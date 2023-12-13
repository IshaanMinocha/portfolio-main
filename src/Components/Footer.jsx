import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiDiscordLine } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";



function Footer() {
    return (
        <footer className="bg-secondary text-white rounded-lg shadow  m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 space-x-3 ">
                        <img src="/logo-nobg.png" className="w-40" alt="Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LOGO</span> */}
                    </a>
                    <div className='flex justify-center'>
                        <FaInstagram />
                        <CiLinkedin />
                        <RiDiscordLine />
                        <SiLinktree />
                        <SiGmail />
                        <FiGithub />
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="text-2xl hover:underline me-4">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-2xl hover:underline me-4">Portfolio</a>
                        </li>
                        <li>
                            <a href="#" className="text-2xl hover:underline me-4">Connect</a>
                        </li>
                        <li>
                            <a href="#" className="text-2xl hover:underline me-4">Résumé</a>
                        </li>
                    </ul>
                </div>
                <span className='flex justify-center mb-5 text-dark text-4xl font-robotic'>Nice to meet you. See you again! </span>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-2xl text-gray-500 text-center dark:text-gray-400">Made with ❤️ and pure code by <a className="text-primary underline duration-300 hover:text-9xl hover:no-underline" href="https://linktr.ee/ishaanminocha"> Ishaan Minocha</a>.</span>
            </div>
        </footer>


    )
}

export default Footer