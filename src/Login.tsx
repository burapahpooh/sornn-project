import hash from "hash.js";
import "./fonts.css";
import "./index.css";
import { users, user } from "./data/data.tsx";
import React, { useState } from "react";
var [userLogin, setLoginUser] = useState<user | null>(null);

function hashFunction(message: string) {
  const encryptedMessage: string = hash.sha256().update(message).digest("hex");
  return encryptedMessage;
}

function loginFunction(username: string, password: string) {
  password = hashFunction(password);

  if (
    users.find((e) => {
      if (e.user_username === username && e.user_password === password) {
        setLoginUser(e);
      }
      return e.user_username === username && e.user_password === password;
    }) == null
  ) {
    console.log(userLogin);
    document.getElementsByClassName("login-status")[0].className =
      "login-status failed";
    return "Login Failed";
  } else {
    console.log(userLogin);
    document.getElementsByClassName("login-status")[0].className =
      "login-status success";
    return "Login Success";
  }
}
function Login() {
  // const encryptedMessage: string = hash
  //   .sha256()
  //   .update("B_password")
  //   .digest("hex");
  // return encryptedMessage;
  var username: string = "";
  var password: string = "";
  var [loginStatus, setLoginStatus] = useState("");
  return (
    <>
      <div className="bg-login">
        <div className="login-page">
          <img
            src="/sornn-project/sornn-logo.svg"
            style={{ width: "50%" } as React.CSSProperties}
          />
          <div
            style={
              {
                position: "relative",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              } as React.CSSProperties
            }
          >
            <input
              name="username"
              type="text"
              className="input-bar"
              placeholder="Username"
              id="username"
              onChange={(e) => {
                username = e.target.value;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setLoginStatus(loginFunction(username, password));
                }
              }}
              required
            />
            <label htmlFor="username" className="input-label">
              Username
            </label>
          </div>
          <div
            style={
              {
                position: "relative",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              } as React.CSSProperties
            }
          >
            <input
              name="password"
              type="password"
              className="input-bar"
              placeholder="Password"
              id="password"
              onChange={(e) => {
                password = e.target.value;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setLoginStatus(loginFunction(username, password));
                }
              }}
              required
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
          </div>
          <div className="login-status">{loginStatus}</div>
          <button
            className="button-cs"
            onClick={() => {
              setLoginStatus(loginFunction(username, password));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLoginStatus(loginFunction(username, password));
              }
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
