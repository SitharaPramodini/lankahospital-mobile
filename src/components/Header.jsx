
import React from "react";
import { useParams } from "react-router-dom";

function Header() {
    const { id } = useParams(); 
    
    return (
        <nav class="header fixed bg-[#0096d5] border-gray-200 px-1 rounded-b-2xl pb-3 w-[101%] h-[20rem]" style={{ backgroundImage: 'url("images/backimg.jpg")', backgroundSize:'cover'}}>
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto px-3 pb-3">
                <a href="https://flowbite.com" class="flex items-center space-x-3 pt-6 rtl:space-x-reverse">
                    <img src="/images/logo.png" class="h-14 ml-1" alt="Flowbite Logo" />
                </a>
                <div id="flag" class="flex flex-col px-2 items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <p className="text-sm text-white">Vehicle No:</p>
                    <a href="#" class="roomno font-bold rounded-lg text-xl text-white tracking-[0.1em] ">{id}</a>
                </div>
               
            </div>


            {/* <form class="flex items-center max-w-sm mx-3 my-2">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                    </svg>
                </div>
                <input type="text" id="simple-search" class="search bg-white border-none text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#c2a152] dark:focus:border-[#c2a152]" placeholder="Search service..." required />
            </div>
           
        </form> */}
        </nav>
    );
}

export default Header;
