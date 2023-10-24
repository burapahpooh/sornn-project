import hash from "hash.js";
hash;
function Login() {
  const encryptedMessage: string = hash
    .sha256()
    .update("B_password")
    .digest("hex");
  return encryptedMessage;
}

export default Login;
