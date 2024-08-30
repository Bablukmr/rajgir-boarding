import React, { useState, useEffect } from 'react';

const vehicleData = [
    { name: "Safari Truck", number: "V001", time: "09:00 AM" },
    { name: "Jeep Wrangler", number: "V002", time: "09:15 AM" },
    { name: "Land Rover", number: "V003", time: "09:30 AM" },
    { name: "ATV Explorer", number: "V004", time: "09:45 AM" },
    { name: "Quad Bike", number: "V005", time: "10:00 AM" },
    { name: "Elephant Ride", number: "V006", time: "10:15 AM" },
    { name: "Camel Caravan", number: "V007", time: "10:30 AM" },
    { name: "Safari Cruiser", number: "V008", time: "10:45 AM" },
    { name: "Tour Bus", number: "V009", time: "11:00 AM" },
    { name: "Mountain Climber", number: "V010", time: "11:15 AM" },
    // Add 40 more entries here...
];

for (let i = 10; i < 50; i++) {
    vehicleData.push({
        name: `Safari Vehicle ${i + 1}`,
        number: `V${(i + 1).toString().padStart(3, '0')}`,
        time: `${9 + Math.floor(i / 4)}:${(i % 4) * 15} AM`,
    });
}

const VehicleBoard = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage(prevPage => (prevPage + 1) % Math.ceil(vehicleData.length / 10));
        }, 12000);  // 5 seconds interval

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update time every second

        return () => clearInterval(timeInterval);
    }, []);

    const vehiclesToDisplay = vehicleData.slice(currentPage * 10, (currentPage + 1) * 10);

    return (
        <div className="bg-green-900 text-white h-screen p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b-2 border-green-600 pb-4">
                <div>
                    <span className="text-lg font-bold">{currentTime.toLocaleDateString()}</span>
                    <h2 className="text-5xl font-extrabold">Razgir Nature Safari</h2>
                </div>
                <div>
                    <span className="text-3xl font-extrabold">{currentTime.toLocaleTimeString()}</span>
                </div>
            </div>

            <table className="table-auto w-full my-4">
                <thead>
                    <tr className="text-left border-b border-green-600">
                        <th className="p-2 text-xl font-bold">Vehicle Name</th>
                        <th className="p-2 text-xl font-bold">Vehicle Number</th>
                        <th className="p-2 text-xl font-bold">Arriving Time</th>
                    </tr>
                </thead>
                <tbody>
                    {vehiclesToDisplay.map((vehicle, index) => (
                        <tr key={index} className="border-b border-green-600">
                            <td className="p-2 text-lg font-medium">{vehicle.name}</td>
                            <td className="p-2">{vehicle.number}</td>
                            <td className="p-2">{vehicle.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="bg-green-700 p-4 rounded text-center text-xl font-bold">
                <p>Enjoy your Safari Adventure!</p>
            </div>
        </div>
    );
};

export default VehicleBoard;
