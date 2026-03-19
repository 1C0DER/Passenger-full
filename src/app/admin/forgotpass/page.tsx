'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin/forgotpassemail");
    } else {
      alert("Error sending reset email");
    }
  };

  return (
    <main className="bg-[rgba(248,244,251,1)] min-h-screen overflow-x-hidden">
      
      <div className="mt-[31px] ml-[60px]">
        <h1 className="font-medium text-[28px] text-gray-800">PASSENGER</h1>
      </div>

      <section>
        <div className="flex justify-center min-h-[calc(100vh-100px)] p-4">
          <div className="p-8 w-full max-w-md rounded-lg">
            <h2 className="font-medium text-2xl text-center mb-3">Forgot Password</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-3 w-full p-4 border rounded-lg"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-[30px]"
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
