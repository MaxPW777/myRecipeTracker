"use client";
import {useEffect, useState} from 'react';
import {useGetUserByIdQuery, useUpdateUserMutation} from "@/src/services/users";
import Image from "next/image";

function ProfileComponent() {
    const {
        data,
        error,
        isLoading
    } = useGetUserByIdQuery('65f46e79a69422ad1aa775c1');
    const updateUserMutation = useUpdateUserMutation();

    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        if (data) {
            if (data.username) {
                setUsername(data.username);
            }
            else{
                setUsername('no user set');
            }
            setEmail(data.email);
            setPassword(data.password); // Assuming data.password contains the actual password
        }
    }, [data]);

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        if (!isEditing && data) {
            if (data.username) {
                setUsername(data.username);
            }
            setEmail(data.email);
            setPassword(data.password); // Reset password field
        }
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            await updateUserMutation.mutateAsync({
                id: '65f46e79a69422ad1aa775c1',
                user: {username, email, password}
            });
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update user:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handlePasswordChange = (e : any) => {
        setPassword(e.target.value);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading user data.</p>;

    return (
        <div
            className="flex flex-col md:flex-row md:gap-20 items-center gap-5 bg-gray-800 border border-blue-800 rounded-lg p-6 w-[60rem] mx-auto text-gray-200">
            <div className={'relative rounded-full w-full aspect-square '}>
                <Image src="/tiramisu.jpg" alt="tiramisu"
                       className={'rounded-full'} fill={true}/>
            </div>
            {isEditing ? (
                <div className="flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-transparent border border-red-500 rounded-lg p-2 text-gray-200"
                        placeholder="name"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border border-red-500 rounded-lg p-2 text-gray-200"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        value={passwordVisible ? password : '*'.repeat(password.length)}
                        onChange={handlePasswordChange}
                        onFocus={() => setPasswordVisible(true)}
                        onBlur={() => setPasswordVisible(false)}
                        className="bg-transparent border border-red-500 rounded-lg p-2 text-gray-200"
                        placeholder="password"
                    />
                    <button onClick={saveChanges} disabled={isSaving}
                            className="bg-transparent border border-red-500 rounded-lg p-2 text-gray-200 hover:bg-red-500 hover:text-gray-800">
                        {isSaving ? 'Saving...' : 'Update'}
                    </button>
                    <button onClick={toggleEdit} disabled={isSaving}
                            className="bg-transparent border border-red-500 rounded-lg p-2 text-gray-200 hover:bg-red-500 hover:text-gray-800">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex flex-col gap-4 w-full text-2xl">
                    <p>Username: {data?.username}</p>
                    <p>Email: {data?.email}</p>
                    <p>Password: {'*'.repeat(password.length)}</p>
                    <button onClick={toggleEdit}
                            className="bg-transparent border border-red-500 rounded-lg p-2 text-gray-200 hover:bg-red-500 hover:text-gray-800 mt-10">Edit
                        Profile
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProfileComponent;
