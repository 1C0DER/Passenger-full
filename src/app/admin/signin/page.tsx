"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --- API CALL ---
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sign-in failed");

      // Save token
      localStorage.setItem("token", data.token);

      window.location.href = "/dashboard";

    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <main className="bg-[rgba(248,244,251,1)] min-h-screen overflow-x-hidden">
      
      {/* Logo/Header */}
      <div className="mt-[31px] ml-[60px]">
        <h1 className="font-medium text-[28px] text-gray-800">PASSENGER</h1>
      </div>

      {/* Sign-in Form Section */}
      <section>
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] p-4">
          <div className="p-8 w-full max-w-md sm:max-w-lg md:max-w-xl rounded-lg">
            
            <h2 className="font-medium text-2xl sm:text-3xl text-center mb-3 text-[rgba(31,41,55,1)]">
              Sign In
            </h2>

            <p className="text-center font-normal text-lg mb-5 text-[rgba(55,65,81,1)]">
              Please enter your information below
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-normal text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-3 w-full p-4 bg-white border border-[rgba(243,243,243,1)] rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-[rgba(52,209,134,1)]"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="font-normal text-black">
                  Password
                </label>

                <div className="relative mt-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 pr-10 bg-white border border-[rgba(243,243,243,1)] rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-[rgba(52,209,134,1)]"
                    required
                  />

                  {/* Toggle Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <Image src="/eye.png" alt="toggle password visibility" width={20} height={20} />
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-center text-sm">
                  {error}
                </p>
              )}

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-[rgba(31,41,55,1)] rounded"
                  />
                  Remember me
                </label>

                <Link
                  href="/admin/forgotpass"
                  className="hover:underline text-[rgba(52,209,134,1)]"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-[rgba(52,209,134,1)] text-white font-semibold
                rounded-[30px] hover:bg-green-400 transition disabled:opacity-50">
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

          </div>
        </div>
      </section>
      
    </main>
  );
}
