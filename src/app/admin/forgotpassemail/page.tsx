'use client';
import Link from 'next/link';
import Image from "next/image";

export default function ForgotPasswordEmail() {
  return (
    <main className="bg-[rgba(248,244,251,1)] min-h-screen overflow-x-hidden">
      <div className="mt-[31px] ml-[60px]">
        <h1 className="font-medium text-[28px] text-gray-800">PASSENGER</h1>
      </div>
      <section>
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] p-4">
          <div className="p-8 w-full max-w-md sm:max-w-lg md:max-w-xl rounded-lg">
            <h1 className="font-medium text-[28px] sm:text-3xl text-center mb-8 text-[rgba(31,41,55,1)]">Forgot Password?</h1>
            <p className="text-center font-normal text-lg mb-8 text-[rgba(55,65,81,1)]">We’ve sent you an email to johnd@email.com . Please
            check your inbox and follow instructions to reset your password. </p>
            <p className='text-center'>Didn’t receive an email? <a className='hover:underline text-[rgba(52,209,134,1)]' href="">Send again</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
