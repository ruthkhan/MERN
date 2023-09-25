const express = require("express");
const { faker } = require('@faker-js/faker')
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const userObject = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(), 
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(), 
        password: faker.internet.password(), 
    }
    return userObject
}

const createCompany = () => {
    const companyObject = {
        name: faker.company.name(), 
        address: {
            street: faker.location.streetAddress(), 
            city: faker.location.city(), 
            state: faker.location.state(), 
            zipCode: faker.location.zipCode(), 
            country: faker.location.country()
        }
    }
    return companyObject
}

app.get("/api/users/new", (req, res) => {
    res.json(createUser())
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany())
})

app.get("/api/user/company", (req, res) => {
    res.json(Object.assign(createUser(), createCompany()))
})

app.listen( port, () => console.log(`Listening on port: ${port}`) )