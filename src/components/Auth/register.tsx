import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleRegister = (values: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    console.log("Registration data:", values);

    const user = { email: values.email, name: values.name };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Successfully registered.");

    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-20 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-[#FB7185] mb-6">Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4 px-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 font-semibold text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 font-semibold text-sm mt-1"
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
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 font-semibold text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
                Confirm Password:
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 font-semibold text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#14B8A6] text-white py-2 px-4 rounded-md hover:bg-[#14B8C1] transition disabled:bg-blue-300"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#14B8A6] hover:underline">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;