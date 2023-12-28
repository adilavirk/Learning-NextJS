"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [userName, setUserName] = useState("");
    const [data, setData] = useState(null);
    const [followers, setFollowers] = useState([])

    const onChangeHandler = (e) => {
        setUserName(e.target.value);
    };

    const onClickHandler = async () => {
        let response = await fetch(`https://api.github.com/users/${userName}`);
        const userData = await response.json();
        setData(userData);
        console.log(userData);
    };
    const onFollowerHandler = async () => {
        const response = await axios.get(data.followers_url);
        setFollowers(response.data);
        console.log(response)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <label htmlFor="userName" className='mt-4 text-2xl font-bold'>Enter UserName:</label>
            <input type="text" onChange={onChangeHandler} className='p-2 m-4' />
            <button className='bg-green-800 p-3  w-40 text-lg rounded-lg text-white hover:bg-green-500 hover:shadow-2xl hover:shadow-pink-700' onClick={onClickHandler}>Search</button>

            {data &&
                <>
                    <h1 className='font-semibold text-xl'>Github User</h1>
                    <img src={data.avatar_url} alt={`${data.login}'s avatar`} width={200} />
                    <p className='mt-4 text-lg font-medium'>bio: {data.bio} - {data.followers}</p>
                    <button className='bg-indigo-700 p-3  w-40 text-lg rounded-lg text-white hover:bg-indigo-500 hover:shadow-2xl hover:shadow-pink-500' onClick={onFollowerHandler}>Search</button>

                    {followers.length >= 1 &&
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Profile</th>
                            </tr>
                            {followers.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.login}</td>
                                    <td><img src={user.avatar_url} alt={`${user.avatar_url}'s image`} width={60} />
                                    </td>
                                </tr>

                            ))}

                        </table>

                    }
                </>
            }
        </div>
    );
};

export default Page;

