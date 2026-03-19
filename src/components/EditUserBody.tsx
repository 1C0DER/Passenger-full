'use client';
import { useState } from 'react';
import Image from 'next/image';

type User = {
id: number;
name: string;
emailAddress: string;
phoneNumber: string;
Status: string;
actions: string;
};

export default function EditUserBody({
user,
onClose,
onSave,
}: {
user: User;
onClose: () => void;
onSave: (updatedUser: User) => void;
}) {
const [name, setName] = useState(user.name);
const [email, setEmail] = useState(user.emailAddress);
const [phone, setPhone] = useState(user.phoneNumber);
const [password, setPassword] = useState('');
const [showPw, setShowPw] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(
      `http://localhost:5000/api/auth/update-user/${user.id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phoneNumber: phone,
          password: password || undefined,
        }),
      }
    );

    if (!res.ok) throw new Error('Update failed');

    const updatedUser: User = {
      ...user,
      name,
      emailAddress: email,
      phoneNumber: phone,
    };

    onSave(updatedUser);
    alert('User updated successfully!');
  } catch (err) {
    alert('Something went wrong');
  } finally {
    setLoading(false);
  }
};


return (
<>
    <div className="relative mb-9">
    <h2 className="text-[20px] font-medium text-center">Edit User</h2>
    <button className="absolute right-0 top-0 text-xl" onClick={onClose}>
        ✕
    </button>
    </div>

    <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
        <label className="block mb-3 text-[16px]">Full Name</label>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white focus:outline-none"
        />
    </div>

    <div>
        <label className="block mb-3 text-[16px]">Phone Number</label>
        <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white focus:outline-none"
        />
    </div>

    <div>
        <label className="block mb-3 text-[16px]">Email Address</label>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white focus:outline-none"
        />
    </div>

    <div>
        <label className="block mb-3 text-[16px]">Password</label>
        <div className="relative">
        <input
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank to keep current"
            className="w-full px-4 py-2 pr-10 rounded-md bg-white focus:outline-none"
        />
        <button
            type="button"
            onClick={() => setShowPw(!showPw)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
        >
            <Image src="/eye.png" alt="" width={20} height={20} />
        </button>
        </div>
    </div>

    <button
        type="submit"
        disabled={loading}
        className="w-full bg-[rgba(52,209,134,1)] text-white font-medium py-3 rounded-full"
    >
        {loading ? 'Updating...' : 'Confirm Updates'}
    </button>
    </form>
</>
);
}
