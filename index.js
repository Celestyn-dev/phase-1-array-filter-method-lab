// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to return drivers whose names start with the provided letters
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to return driver objects where the name matches the given string
function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

// Example Usage
const driversList = ["Mwangi", "Akinyi", "Kamau", "Wanjiku", "Otieno", "Ndungu"];
console.log(findMatching(driversList, "Mwangi")); // ["Mwangi"]

console.log(fuzzyMatch(driversList, "Wa")); // ["Wanjiku"]

const driverObjects = [
    { name: "Mwangi", hometown: "Nairobi" },
    { name: "Akinyi", hometown: "Kisumu" },
    { name: "Kamau", hometown: "Thika" },
    { name: "Wanjiku", hometown: "Nyeri" },
    { name: "Otieno", hometown: "Mombasa" },
    { name: "Ndungu", hometown: "Nakuru" }
];

console.log(matchName(driverObjects, "Otieno")); // [{ name: "Otieno", hometown: "Mombasa" }]
