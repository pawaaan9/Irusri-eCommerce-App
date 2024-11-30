import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = (values: { email: string; password: string }) => {
    console.log("Login data:", values);

    const user = { email: values.email };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Successfully logged in.");

    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-20 bg-white border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-[#14B8A6] mb-6">
          MobileMart
        </h1>
        <h2 className="text-2xl font-bold text-center text-[#FB7185] mb-6">Sign in</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-4 px-5">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14B8A6]" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm font-semibold mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm font-semibold mt-0.5"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#14B8A6] text-white py-2 px-4 rounded-md hover:bg-[#14B8C1] transition disabled:bg-[#14B8C1]"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <p className="text-gray-700">No account yet?</p>
          <Link
            to="/register"
            className="text-[#14B8A6] hover:underline text-sm"
          >
            Create an account
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;