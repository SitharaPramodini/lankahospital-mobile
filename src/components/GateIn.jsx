import React, { useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function GateIn() {
    const { id, reqid } = useParams();  // Get vehicle number and request ID from URL params
    const [mileage, setMileage] = useState("");  // State to store mileage input
    const [loading, setLoading] = useState(false);
    // const [message, setMessage] = useState("");

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // setMessage("");

        const requestData = {
            vehicle_number: id,
            request_id: reqid, // Include request_id in the API request
            mileage: parseInt(mileage, 10),
        };

        try {
            const response = await fetch("https://demo.secretary.lk/ambulance_system/API/vehicle_in.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Mileage updated successfully!");
                setMileage("");
            } else {
                toast.error(`Error: ${data.error || "Failed to update mileage"}`);
            }
        } catch (error) {
            toast.error("Failed to connect to the server.");
            console.error("Error updating mileage:", error);
        }

        setLoading(false);
    };

    return (
        <div>
            <Header />
            <ToastContainer
                position="top-center"
                toastClassName="rounded-full w-auto px-4 mx-3 mt-4 text-xs py-[-16rem] bg-white text-black/60 font-bold shadow-[4px_4px_9px_0px_#00000082]"
                className="custom-toast"
                bodyClassName="custom-toast-body"
                draggable
                hideProgressBar
                closeButton={false}
            />
            <div className="container mt-[18rem] max-w-full pt-6 pb-14 bg-[#f4f8fb] w-full absolute rounded-t-3xl h-auto">
                
            <p className="text-4xl text-center font-bold tracking-normal text-blue-700 ">
            Hospital Entry
                </p>
                <p className="text-xl text-center font-bold tracking-normal text-gray-500 dark:text-black">
                    Update the vehicle mileage
                </p>

                <form className="w-9/12 mx-auto mt-6" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Vehicle Number</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={id} disabled />
                    </div>

                    {/* <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Request ID</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={reqid} disabled />
                    </div> */}

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Current Mileage</label>
                        <input
                            type="number"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Submit"}
                    </button>
                </form>

                {/* {message && <p className="mt-4 text-center text-gray-700">{message}</p>} */}
            </div>
        </div>
    );
}

export default GateIn;
