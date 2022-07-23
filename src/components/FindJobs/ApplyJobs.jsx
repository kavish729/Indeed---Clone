import "./finds.css"
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ApplyJobs = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    education:"",
    resume:""
  });

  const handleNot=(e)=>{
alert("you applied successfully ")
  }

  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/student", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      education: formData.education,
      resume: formData.resume,
    }).then((res) => {
      console.log(res.data);
    })
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div
        className="mainDiv"
      >
        <p className="pTag">Full Name</p>
        <input
          type="text"
         className="inputTag"
          placeholder="Enter your name"
          value={formData.name}
          id="name"
          onChange={(e) => handleChange(e)}
        />
        <p className="pTag">Email</p>
        <input
         type="text"
         className="inputTag"
           id="email"
           value={formData.email}
           onChange={(e) => handleChange(e)}
           placeholder="Enter email address" />
        <p className="pTag">Phone Number</p>
        <input
          type="text"
          value={formData.phone}
          id="phone"
          className="inputTag"
          placeholder="Enter Phone number"
          onChange={(e) => handleChange(e)}
        />
        <p className="pTag">
          What is the highest level of education you have completed?
        </p>
        <select className="inputTag" value={formData.education}
        onChange={(e) => handleChange(e)}
         id="education"
         placeholder="Highest Qualification">
          <option value="Intermediate">Intermediate</option>
          <option value="Graduation">Graduation</option>
          <option value="Post Graduation">Post Graduation</option>
        </select>
        <p className="pTag">Resume Uploads</p>
        <input type="file" className="inputTag" id="resume" onChange={(e) => handleChange(e)} value={formData.resume} />
       <Link to="/">
        <input
          type="submit"
          value="Apply"
          className="btn"
          onClick={(e)=>handleNot(e)}
        />
        </Link>
      </div>
    </form>
  );
};

export default ApplyJobs;
