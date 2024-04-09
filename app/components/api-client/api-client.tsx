"use client"

// UserList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(null); // State to handle error

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        setError(error.message); // Set error message
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
      {error ? (
        <div>
        <p>Error fetching users:</p>
        <p> {error} </p> 
        </div>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      </ul>
    </div>
  );
};

export default UserList;
