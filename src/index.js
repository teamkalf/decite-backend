import express from "express";


// App Config
const app = express();

// user object more like a database
const user = [
    {
      username: 'camariana',
      password: 'secret'
    }
  ]
  
  const applicant = [
    {
      fname: 'A',
      minit: '',
      lname: 'Camariana',
      status: 'admitted'
    },
    {
      fname: 'Buba',
      minit: 'A',
      lname: 'Faal',
      status: 'denied'
    }
  ]
  
//   Endpoint
  app.get('/api/users', (request, response) => {
    response.json(applicant)
  })
  
//   Listener
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  });