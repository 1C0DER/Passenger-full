'use client';

import { useEffect, useState } from 'react';
import Filter from '@/components/Filter';
import TableSearch from '@/components/TableSearch';
import GenerateButton from '@/components/GenerateButton';
import UserMangTable from '@/components/UserMangTable';
import EditUserBody from '@/components/EditUserBody';
import DeleteUserBody from '@/components/DeleteUserBody';
import Modal from '@/components/Modal';

type User = {
id: number;
name: string;
emailAddress: string;
phoneNumber: string;
Status: string;
actions: string;
};

type ModalType = null | 'edit' | 'delete';

export default function UserManagement() {
const [modal, setModal] = useState<ModalType>(null);
const [users, setUsers] = useState<User[]>([]);
const [selectedUser, setSelectedUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);

// 🔹 FETCH USERS FROM BACKEND
const fetchUsers = async () => {
try {
    const res = await fetch('http://localhost:5000/api/auth/users');
    const data = await res.json();

    // adapt backend -> frontend shape
    const mappedUsers: User[] = data.map((u: any) => ({
    id: u._id,                 
    name: u.name,
    emailAddress: u.email,
    phoneNumber: u.phoneNumber,
    Status: u.status ?? 'Active',
    actions: '/moredot.png',
    }));

    setUsers(mappedUsers);
} catch (err) {
    console.error('Failed to fetch users', err);
} finally {
    setLoading(false);
}
};

useEffect(() => {
fetchUsers();
}, []);

if (loading) {
return <p className="p-7">Loading users...</p>;
}

return (
<div className="p-7 flex flex-col">
    <h1 className="font-medium text-[24px] mb-7">User management</h1>

    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <TableSearch />
        <Filter />
    </div>
    <GenerateButton />
    </div>

    <div className="w-full h-[400px]">
    <UserMangTable
        users={users}
        onEdit={(user) => {
        setSelectedUser(user);
        setModal('edit');
        }}
        onDelete={(user) => {
        setSelectedUser(user);
        setModal('delete');
        }}
    />
    </div>

    {/* EDIT MODAL */}
    <Modal open={modal === 'edit'} onClose={() => setModal(null)}>
    {selectedUser && (
        <EditUserBody
        user={selectedUser}
        onClose={() => setModal(null)}
        onSave={(updatedUser) => {
            setUsers((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
            );
            setModal(null);
        }}
        />
    )}
    </Modal>

    {/* DELETE MODAL */}
    <Modal open={modal === 'delete'} onClose={() => setModal(null)}>
    {selectedUser && (
        <DeleteUserBody
        user={selectedUser}
        onClose={() => setModal(null)}
        onDelete={(id) => {
            setUsers((prev) => prev.filter((u) => u.id !== id));
            setModal(null);
        }}
        />
    )}
    </Modal>
</div>
);
}
