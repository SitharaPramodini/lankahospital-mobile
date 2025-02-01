import React from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import { FaRoad } from "react-icons/fa";


function Home() {
    const { id, reqid } = useParams(); // Get dynamic route parameters

    return (
        <div>
            <Header />
            <div className="container mt-[18rem] max-w-full pt-6 pb-14 bg-[#f4f8fb] w-full absolute rounded-t-3xl h-auto">
                <p className="text-2xl text-center font-bold tracking-normal text-gray-500 dark:text-black">
                    Trip update at the gate
                </p>

                <div className="w-[80%] h-auto flex flex-col justify-around item gap-y-6 mx-auto my-10">
                    <Link to={`/${id}/${reqid}/gateout`} className="px-8 text-2xl w-full shadow-lg text-left font-bold p-6 bg-[#d2e7ec] rounded-lg flex flex-row justify-between items-center">
                        <div>
                            <h1>Out</h1>
                            <p className="text-sm">Active the trip</p>
                        </div>
                        <FaRoad />
                    </Link>
                    <Link to={`/${id}/${reqid}/gatein`} className="px-8 text-2xl w-full shadow-lg text-left font-bold p-6 bg-[#93cbdb] rounded-lg flex flex-row justify-between items-center">
                        <div>
                            <h1>In</h1>
                            <p className="text-sm">Update mileage</p>
                        </div>
                        <FaRoad />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
