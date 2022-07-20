import React from "react";

function skill(s){
    if(s==="1"){
        return "Webdeveloper"
    }
    else if(s==="2"){
        return "Appdeveloper"
    }
    else if(s==="3")
    {
        return "ML Engineer"
    }
    else{
        return "Other"
    }
}
function Card(props){
    return( 
    <div className="card">
          <div className="top">
             <h2 className="name">{props.fname} {props.lname}</h2>
              <img className="circle-img" src={(props.imagelink)?props.imagelink:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"} alt="user_img" />
            </div>
             <div className="bottom">
                 <p className="info">Skill: {skill(props.skills)}</p>
                 <p className="info">Age: {props.age}</p>
                 <p className="info">Phone: {props.contact}</p>
                 <p className="info">Email: {props.email}</p>
             </div>
                            
            {/* <p>Name : Sankalp</p> */}
         </div>
    )
}
export default Card