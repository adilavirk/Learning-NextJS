"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const User = () => {
    const [data, setData] = useState([]);

    const fetchUserData = async () => {
        try {
            const response = await fetch("https://api.github.com/users/naveed-rana/followers");
            const userData = await response.json();
            setData(userData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <button
                onClick={fetchUserData}
                className="bg-yellow-800 p-3 m-2 rounded-lg text-white"
            >
                Get Followers
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col rounded-lg bg-white shadow-md"
                    >
                        <a href="#!">
                            <img
                                className="rounded-t-lg"
                                src={item.avatar_url}
                                alt={`${item.login}'s avatar`}
                                width={300}
                                height={300}
                            />
                        </a>
                        <div className="p-4">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
                                {item.login}
                            </h5>
                            <p className="text-base text-gray-600">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default User;
