const express = require('express')
const app = express()

cities = 
[
    
    {
        id : 1,
        name : "Toronto", 
        description : "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore.", 
    },
    {
        id : 2,
        name : "New York", 
        description : "New York City comprises of 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.", 
    },
    {
        id : 3,
        name : "Vancouver", 
        description : "Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities.", 
    },
    {
        id : 4,
        name : "London", 
        description : "London is the capital and largest city of England and the United Kingdom, with a population of just over 9 million.", 
    },
    { 
        id : 5,
        name : "Beijing", 
        description : "Beijing is the capital of the People's Republic of China. It is the world's most populous national capital city, with over 21 million residents within an administrative area of 16,410.5 km.", 
    }
];

app.get("/api", (req, res) => {
    //res.json({ "cities": ["London", "userTwo", "userThree", "userFour"]})
    res.json({cities})
})

app.listen(5000, () => {console.log("Server started on port 5000") })