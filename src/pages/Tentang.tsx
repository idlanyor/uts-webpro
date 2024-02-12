import React, { useState, useEffect } from 'react'
import axios from 'axios';
interface userDataInterface {
    avatar_url: string
    name: string
    bio: string
    html_url: string
}
export default function Tentang() {
    const [userData, setUserData] = useState<userDataInterface>(
        {
            avatar_url: '',
            name: '',
            bio: '',
            html_url: ''
        }
    );

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                let username = "idlanyor"
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUserData(response.data);
                // console.log(response.data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div className="w-full mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
            <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 mx-4">
                {userData && (
                    <a href={userData.html_url} className='flex flex-col items-center space-x-2 pt-10'>
                        <img className="w-[10rem] mb-3 rounded-full shadow-lg" src={userData.avatar_url} alt="User Avatar" />
                        <figcaption className='mb-1 text-2xl font-medium text-gray-900 dark:text-white text-center'>{userData.name}</figcaption>
                        <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400">{userData.bio}</figcaption>
                        {/* ...additional information */}
                    </a>
                )}
                <div className="flex flex-col prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2 xl:space-x-3 space-y-3 text-center md:text-left">
                    <p></p>
                    <span className='text-gray-800 dark:text-slate-400'>
                        Hello! My name is Roynaldi, and I am a third-semester student at STMIK Widya Utama Purwokerto. I am a Tech enthusiast with a strong interest in various technology fields.
                        Currently, I have intermediate-level skills in web development, mobile development, and beginner-level skills in desktop programming. I am also actively interested in learning and staying updated on the latest technologies emerging in the world.
                    </span>
                    <span className='text-gray-800 dark:text-slate-400'>
                        I often spend my free time pursuing my primary hobby, which is coding. I find great joy in creating something new and functional through programming languages. This hobby helps me continuously sharpen my software development skills.
                    </span>
                    <p className='text-gray-800 dark:text-slate-400'>
                        In addition to being a student, I work at Wisesa Cell & Copier in Karangreja. There, I have a dual role as a Graphic Designer and a Store Employee. This allows me to combine my creativity with technology to create visually appealing and effective designs.

                    </p>
                    <p className='text-gray-800 dark:text-slate-400'>
                        I am always open to learning and growing in the field of technology. With my enthusiasm and dedication, I believe I can continue to contribute to the creation of innovative and useful technological solutions for the world. Thank you for getting to know me!

                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}