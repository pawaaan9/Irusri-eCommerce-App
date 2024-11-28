import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; 

const Login = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = (values: { email: string; password: string }) => {
    console.log("Login data:", values);
    alert("Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">abc</h1>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Link to the Register page */}
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
