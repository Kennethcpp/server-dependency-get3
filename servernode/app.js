
/* I copied THE NODE_MODULES to a different folder BECAUSE IT TOO LARGE,
i remember you said we should 
not upload .env file to github directly but i wanted you to see it since it not a real project. */

const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const app = express()

//const access = 7000 //this also worked.

//calling port name(access) from env file.

const access = process.env.access || 5000

app.listen(access, ()=>{
    console.log(`server started runnung on port ${access}`)
})

///* testing server.............
app.get("", (request, response)=>{
    response.send("My server is running at port 700")
    
}) 
 
//ASSIGNMENT: 
//String Assignment calls............

app.get("//", (request, response)=>{
   mystring = response.send("My name Is Kenneth Onyeonoro, Am A Backend Developer")
}) 

//* /object Assignment calls............
  app.get("/", (request, response)=>{
    response.send({First_Name:"kenneth", Last_Name: "Onyeonoro", User_Name: "kemila,",id:"001"})
    
})
 
//Array Assignment calls............
const myarray =["Access bank", "keystone bank", "Stanbic Ibtc Bank"]
app.get("/", (request, response)=>{
    response.send(myarray)
    
}) 



