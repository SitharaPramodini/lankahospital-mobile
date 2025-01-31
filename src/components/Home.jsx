import React from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";

function Home() {
    const { id, reqid } = useParams(); // Get dynamic route parameters

    return (
        <div>
            <Header />
            <div className="container mt-[18rem] max-w-full pt-6 pb-14 bg-[#f4f8fb] w-full absolute rounded-t-3xl h-auto">
                <p className="text-2xl text-center font-bold tracking-normal text-gray-500 dark:text-black">
                    Trip update at the gate
                </p>

                <div className="w-[80%] h-auto flex flex-row justify-around item gap-x-6 mx-auto my-10">
                    <Link to={`/${id}/${reqid}/gateout`} className="text-2xl w-1/2 text-center font-bold p-6 bg-yellow-200 rounded-lg">Out</Link>
                    <Link to={`/${id}/${reqid}/gatein`} className="text-2xl w-1/2 text-center font-bold p-6 bg-blue-200 rounded-lg">In</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
