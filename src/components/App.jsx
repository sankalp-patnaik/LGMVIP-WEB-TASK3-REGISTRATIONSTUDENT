import React, { useState } from "react";
import Enroll from "./Form"
import Card from "./Card";
import "../styles.css";
import Button from '@mui/material/Button';
function App(){
    const[Details,setDetails]=useState({
        fname:"",
        lname:"",
        email:"",
        age:"",
        imagelink:"",
        contact:"",
        skills:""
    })
    const[Student,setStudent]=useState([]);
    const[registered,setregistered]=useState("")
    function handleChange(event)
    {
        
        const{name,value}=event.target;
        // console.log(name+" "+value);
        setDetails((prevdetails)=>{
            return {
                ...prevdetails,
                [name]:value
            }
        })
        
    }
    function submitbtn(event){
        // console.log(Student);
        
        if(Details.fname!==""&&Details.lname!==""){
        setStudent((prevStudent)=>{
            return[
                ...prevStudent,
                Details
            ]
        });
        setregistered("Registered Candidates");
        setDetails({
            fname:"",
            lname:"",
            email:"",
            age:"",
            imagelink:"",
            contact:"",
            skills:""

        })
      }
        event.preventDefault();

    }
    return(
        <div className="app">
        <div className="heading">
        <h1>Registration Form</h1>
            <p className="para">Please fill out this form with the required information</p>
        </div>
                <div className="container">
                    <div className="form">
                        <form>
                            <fieldset>
                                <label>Enter Your First Name: <input type="text" name="fname" onChange={handleChange} value={Details.fname} required="required" autocomplete="off" /></label>
                                <label>Enter Your Last Name: <input type="text" name="lname"  onChange={handleChange} value={Details.lname} required autocomplete="off" /></label>
                                <label>Enter Your Email: <input type="email" name="email"  onChange={handleChange} required value={Details.email} autocomplete="off" /></label>
                                <label>Input your age (years): <input type="number" name="age" min="13" max="120"  onChange={handleChange} value={Details.age} autocomplete="off" required/></label>
                                <label>Image Link <input type="text" name="imagelink"  onChange={handleChange} value={Details.imagelink} autocomplete="off"  required /></label>
                            </fieldset>
                            <fieldset>
                                <label>Contact: <input type="number" name="contact" onChange={handleChange} value={Details.contact} autocomplete="off"  required/></label>
                            </fieldset>
                            <fieldset>
                                <label>Skills
                                <select name="skills" onClick={handleChange} required>
                                    <option value="">(select one)</option>
                                    <option value="1">Webdeveloper</option>
                                    <option value="2">App Developer</option>
                                    <option value="3">ML Engineer</option>
                                    <option value="4">Other</option>
                                </select>
                                </label>
                            </fieldset>
                            {/* <input type="submit" value="Submit" onClick={submitbtn} /> */}
                            <Button type="submit" variant="outlined" onClick={submitbtn}>submit</Button>
                            </form>
                                
                            </div>
                    <div className="enroll">
                    <h1 className="enrolledheading">{registered}</h1>
                        {Student.map((enroll,index)=>{
                            return(
                                <Card 
                                    key={index}
                                    id={index}
                                    fname={enroll.fname}
                                    lname={enroll.lname}
                                    email={enroll.email}
                                    age={enroll.age}
                                    imagelink={enroll.imagelink}
                                    contact={enroll.contact}
                                    skills={enroll.skills}
                                />
                            )
                        })}
                                       
                
                    </div>

            
                </div>   

           
        </div>
    )
}
export default App