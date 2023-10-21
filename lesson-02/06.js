let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let clon = {...passportWithAddress, address: {...passportWithAddress.address}};
clon.address.city = "Bobryisk";

console.log(passportWithAddress)
console.log(clon)