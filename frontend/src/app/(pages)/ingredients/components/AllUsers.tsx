"use client"
import React from 'react';
import {useGetAllUsersQuery} from '@/src/services/users';

function AllUsers() {
    const { data: users, isLoading, isError } = useGetAllUsersQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching users</div>;
    console.log(users);

    return (
        <div>
            <h1>All Users</h1>
            <ul>
                {users && users.map((user,index) => (
                    <div key={index}>
                        {user.username} - {user.email}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default AllUsers;
