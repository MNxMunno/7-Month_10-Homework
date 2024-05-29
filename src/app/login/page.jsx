"use client";
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import axios from "@/fetch/index";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const Login = () => {
  const navigate = useRouter();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res.data.token);
        toast.success("Welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.error(err);
        toast.error("username or password is incorrect");
      });
  };

  return user ? (
    navigate("/admin")
  ) : (
    <section className="login container" style={{ paddingTop: "120px" }}>
      <div className="login__content">
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="text">
            <p>Email Address</p>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              type="text"
              id="text"
              name="text"
              placeholder="Enter Your Email"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your password"
            />
          </label>
          <label htmlFor="checkbox" className="checkbox">
            <input required type="checkbox" id="checkbox" name="checkbox" />
            <p>Remember Me</p>
          </label>
          <button className="btn__login" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
