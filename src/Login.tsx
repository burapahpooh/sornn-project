import hash from "hash.js";
import "./fonts.css";
import "./index.css";
import React from "react";
hash;
function Login() {
  // const encryptedMessage: string = hash
  //   .sha256()
  //   .update("B_password")
  //   .digest("hex");
  // return encryptedMessage;
  var username: string = "";
  var password: string = "";
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
              required
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
          </div>

          <button
            className="button-cs"
            onClick={() => {
              console.log(username + password);
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
