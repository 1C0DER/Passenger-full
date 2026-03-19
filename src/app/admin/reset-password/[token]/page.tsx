'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function ResetPassword() {
  const params = useParams();
  const token = params.token as string;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const res = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword: password }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Password reset successful!");
      router.push("/signin");
    } else {
      alert("Invalid or expired reset link");
    }
  };

  return (
    <main className="bg-[rgba(248,244,251,1)] min-h-screen">

      <div className="mt-[31px] ml-[60px]">
        <h1 className="text-[28px]">PASSENGER</h1>
      </div>

      <section>
        <div className="flex justify-center min-h-[calc(100vh-100px)] p-4">
          <div className="p-8 w-full max-w-md">

            <h2 className="text-3xl text-center mb-3">Reset your Password</h2>

            <form className="space-y-6" onSubmit={handleReset}>
              
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 border rounded-lg mt-3"
                  required
                />
              </div>

              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full p-4 border rounded-lg mt-3"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-[30px]"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
