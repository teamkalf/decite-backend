import express from "express";

// App Config
const App = express();
const port = process.env.port || 3000;
// Middle wares

// API End points
App.get('/', (req, res)=> {
    res.send('Hello Broken Skull Programmer!!')
})

// Listeners
App.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});