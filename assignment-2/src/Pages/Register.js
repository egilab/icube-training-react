import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { action_register } from "../actions/action_regsiter";
import * as Yup from "yup";

function Register() {
  const dispatch = useDispatch();

  const RegisterSchemaValidation = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("email not valid").required("email is required"),
    telepon: Yup.number().required("phone number is required"),
    password: Yup.string().required("password is required"),
  });

  const formRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      telepon: "",
      password: "",
    },
    validationSchema: RegisterSchemaValidation,
    onSubmit: (values, {resetForm}) => {
      dispatch(action_register(values));
      resetForm({values:''});
    },
  });
  return (
    <>
      <div className="wrapper form-register">
        <h2 className="title">Register</h2>
        <form onSubmit={formRegister.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="input-text"
              name="name"
              onChange={formRegister.handleChange}
              value={formRegister.values.name}
            />
            {formRegister.touched.name && formRegister.errors.name && (
              <p style={{ color: "red" }}>{formRegister.errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input-text"
              name="email"
              onChange={formRegister.handleChange}
              value={formRegister.values.email}
            />
             {formRegister.touched.email && formRegister.errors.email && (
              <p style={{ color: "red" }}>{formRegister.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label>Telepon</label>
            <input
              type="number"
              className="input-text"
              name="telepon"
              onChange={formRegister.handleChange}
              value={formRegister.values.telepon}
            />
             {formRegister.touched.telepon && formRegister.errors.telepon && (
              <p style={{ color: "red" }}>{formRegister.errors.telepon}</p>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input-text"
              name="password"
              onChange={formRegister.handleChange}
              value={formRegister.values.password}
            />
             {formRegister.touched.password && formRegister.errors.password && (
              <p style={{ color: "red" }}>{formRegister.errors.password}</p>
            )}
          </div>
          <div className="action-register">
            <button>Create An Account</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
