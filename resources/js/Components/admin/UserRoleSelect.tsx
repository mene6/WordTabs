import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/theme/select'; // Importing the existing Select component
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserRoleManager = ({ userId }: { userId: number }) => {
    const [roles, setRoles] = useState<string[]>([]);
    const [userRoles, setUserRoles] = useState<string[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('');

    useEffect(() => {
        // Fetch all roles from the API
        axios.get('/api/roles')
            .then(response => setRoles(response.data.map((role: { name: string }) => role.name)))
            .catch(error => console.error('Error fetching roles:', error));

        // Fetch current user's roles from the API
        axios.get(`/api/users/${userId}/roles`)
            .then(response => {
                const userRoles = response.data.map((role: { name: string }) => role.name);
                setUserRoles(userRoles);
                if (userRoles.length > 0) {
                    setSelectedRole(userRoles[0]);  // Set the initial selected role
                }
            })
            .catch(error => console.error('Error fetching user roles:', error));
    }, [userId]);

    const handleSubmit = () => {
        axios.put(`/api/users/${userId}/roles`, { role: selectedRole })
            .then(response => alert('Role updated successfully!'))
            .catch(error => console.error('Error updating role:', error));
    };

    return (
        <div className="mx-auto w-full max-w-sm">
            <h3 className="mb-4 font-medium text-lg">Manage User Role</h3>
            <Select value={selectedRole} onValueChange={(value) => setSelectedRole(value)}>
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
            <button
                className="bg-blue-500 mt-4 px-4 py-2 rounded-md text-white"
                onClick={handleSubmit}
            >
                Update Role
            </button>
        </div>
    );
};

export default UserRoleManager;
