import express from 'express'//1
import  {createCoffee, getAllCoffees} from './src/coffees.js'
//connect to api in a new file cofeess.js

const app = express()//2

app.use(express.json())//3

app.post('/coffees', createCoffee)
app.get('/coffees', getAllCoffees)

app.listen (3030, () => console.log('listening on http://localhost:3030...'))//4