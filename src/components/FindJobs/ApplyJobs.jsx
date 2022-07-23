import { Box, Input, Text, Select, FormControl } from "@chakra-ui/react";
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
        marginLeft="5rem"
        box-shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
      >
        <p marginTop="1rem">Full Name</p>
        <input
          type="text"
          size="md"
          w="md"
          placeholder="Enter your name"
          value={formData.name}
          id="name"
          onChange={(e) => handleChange(e)}
        />
        <p marginTop="1rem">Email</p>
        <input
         type="text"
          size="md"
           w="md" 
           id="email"
           value={formData.email}
           onChange={(e) => handleChange(e)}
           placeholder="Enter email address" />
        <p marginTop="1rem">Phone Number</p>
        <input
          type="text"
          size="md"
          w="md"
          value={formData.phone}
          id="phone"
          placeholder="Enter Phone number"
          onChange={(e) => handleChange(e)}
        />
        <Text marginTop="1rem">
          What is the highest level of education you have completed?
        </Text>
        <select value={formData.education}
        onChange={(e) => handleChange(e)}
         id="education"
          w="md"
         placeholder="Highest Qualification">
          <option value="Intermediate">Intermediate</option>
          <option value="Graduation">Graduation</option>
          <option value="Post Graduation">Post Graduation</option>
        </select>
        <p marginTop="1rem">Resume Uploads</p>
        <input type="file" size="md" w="md" id="resume" onChange={(e) => handleChange(e)} value={formData.resume} />
       <Link to="/">
        <input
          marginTop="1rem"
          color="white"
          bg="blue.500"
          type="submit"
          placeholder="Apply"
          onClick={(e)=>handleNot(e)}
        />
        </Link>
      </div>
    </form>
  );
};

export default ApplyJobs;
