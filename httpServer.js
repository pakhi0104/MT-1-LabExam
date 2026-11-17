import http from 'http';
import fs from 'fs';
const PORT = 3000;
let vehicles = [
    {
        id: 1,
        vehicleName: "Hyundai Creta",
        vehicleNumber: "HR26AB1234",
        type: "SUV",
        price: 1500000
    },
    {
        id: 2,
        vehicleName: "Maruti Swift",
        vehicleNumber: "DL8CAF5030",
        type: "Hatchback",
        price: 750000
    },
    {
        id: 3,
        vehicleName: "Honda City",
        vehicleNumber: "UP14CD5678",
        type: "Sedan",
        price: 1200000
    }
];
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain');

    res.end("Vehicle Management HTTP Server is Working");

});
server.listen(PORT, () => {
    console.log(`HTTP Server running at http://localhost:${PORT}`);
});