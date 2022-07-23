import { Box, Input, Text, Select, FormControl } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const ApplyJobs = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    education:"",
    resume:""
  });

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
    <FormControl onSubmit={(e) => handleSubmit(e)}>
      <Box
        marginLeft="5rem"
        box-shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
      >
        <Text marginTop="1rem">Full Name</Text>
        <Input
          type="text"
          size="md"
          w="md"
          placeholder="Enter your name"
          value={formData.name}
          id="name"
          onChange={(e) => handleChange(e)}
        />
        <Text marginTop="1rem">Email</Text>
        <Input
         type="text"
          size="md"
           w="md" 
           id="email"
           value={formData.email}
           placeholder="Enter email address" />
        <Text marginTop="1rem">Phone Number</Text>
        <Input
          type="text"
          size="md"
          w="md"
          value={formData.phone}
          id="phone"
          placeholder="Enter Phone number"
        />
        <Text marginTop="1rem">
          What is the highest level of education you have completed?
        </Text>
        <Select value={formData.education} id="education" w="md" placeholder="Highest Qualification">
          <option value="option1">Intermediate</option>
          <option value="option2">Graduation</option>
          <option value="option3">Post Graduation</option>
        </Select>
        <Text marginTop="1rem">Resume Uploads</Text>
        <Input type="file" size="md" w="md" id="resume" value={formData.resume} />
        <Input
          marginTop="1rem"
          color="white"
          bg="blue.500"
          type="submit"
          placeholder="Apply"
        />
      </Box>
    </FormControl>
  );
};

export default ApplyJobs;
