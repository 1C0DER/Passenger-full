'use client';
import { useState } from 'react';

type User = {
  id: number;
  emailAddress: string;
};

export default function DeleteUserBody({
  user,
  onClose,
  onDelete,
}: {
  user: User;
  onClose: () => void;
  onDelete: (id: number) => void;
}) {
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/auth/delete-user`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: user.id,
            reason, // ✅ reason now sent
          }),
        }
      );

      if (!res.ok) throw new Error('Delete failed');

      onDelete(user.id);
      alert('User deleted successfully');
      onClose();
    } catch (err) {
      alert('Failed to delete user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative mb-9">
        <h2 className="text-[18px] text-center">Delete User</h2>
        <button className="absolute right-0 top-0 text-xl" onClick={onClose}>
          ✕
        </button>
      </div>

      <p className="text-sm text-center text-gray-500 mb-6">
        {user.emailAddress}
      </p>

      <div className="mb-10">
        <label className="block mb-3 text-[16px]">
          Reason for account deletion (Optional)
        </label>
        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-white focus:outline-none"
        />
      </div>

      <button
        type="button"
        disabled={loading}
        onClick={handleDelete}
        className="w-full bg-red-500 text-white font-medium py-3 rounded-full"
      >
        {loading ? 'Deleting...' : 'Confirm Delete'}
      </button>
    </>
  );
}
