import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/theme/select'; // Radix UI Select component
import { Inertia, usePage } from '@inertiajs/react'; // Inertia.js for API requests
import React, { useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    roles: { name: string }[];
}

const UserManagementTable: React.FC = () => {
    const { props } = usePage();
    const [users, setUsers] = useState<User[]>(props.users);  // Initial data comes from Inertia props
    const [roles, setRoles] = useState<string[]>(props.roles);  // Roles also passed via props

    const handleRoleChange = (userId: number, selectedRole: string) => {
        Inertia.put(`/users/${userId}/roles`, { role: selectedRole }, {
            onSuccess: () => {
                // Update the local user state to reflect the new role
                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user.id === userId ? { ...user, roles: [{ name: selectedRole }] } : user
                    )
                );
            },
            onError: (errors) => {
                console.error('Error updating role:', errors);
            }
        });
    };

    return (
        <div className="mx-auto w-full max-w-4xl">
            <h2 className="mb-6 font-bold text-2xl">User Management</h2>
            <table className="border-gray-200 bg-white border min-w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Name</th>
                        <th className="px-4 py-2 border-b">Email</th>
                        <th className="px-4 py-2 border-b">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="px-4 py-2 border-b">{user.name}</td>
                            <td className="px-4 py-2 border-b">{user.email}</td>
                            <td className="px-4 py-2 border-b">
                                <Select
                                    value={user.roles.length > 0 ? user.roles[0].name : ''}
                                    onValueChange={(value) => handleRoleChange(user.id, value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roles.map((role) => (
                                            <SelectItem key={role} value={role}>
                                                {role}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagementTable;
