import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      console.log("Google login successful:", result.user);

      navigate("/");
    } catch (error) {
      console.log("Google login error:", error);
      setError("Google login failed");
    }
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log("Login successful:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.log("Login failed:", error.message);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo / Title */}
        <div className="text-center">
          <div className="flex justify-center">
            <img
              className="w-25 object-contain hover:scale-105 transition-transform duration-300"
              src={LOGO_URL}
              alt="PetPuja"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to PetPuja
          </h1>

          <p className="mt-2 text-gray-500">Login to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-8">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>
          {error && (
            <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>

          <span className="px-3 text-sm text-gray-400">OR</span>

          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Google Login - UI only for now */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-orange-500 font-semibold cursor-pointer">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
