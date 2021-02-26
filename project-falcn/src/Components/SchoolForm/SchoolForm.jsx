import { React, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SchoolForm.css";
const axios = require("axios").default;

const SchoolForm = ({ school, title, openHome }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [schoolObj, setSchoolObj] = useState(school);
  const [location, setLocation] = useState("");
  const [admission, setAdmission] = useState("");

  useEffect(() => {
    if (JSON.stringify(schoolObj) !== {}) {
      setName(schoolObj.name);
      setLocation(schoolObj.location);
      setAdmission(schoolObj.admission);
    }
  }, []);

  const addSchool = () => {
    axios
      .post("http://localhost:3001/schools", {
        name: name,
        location: location,
        admission: admission,
        image: image,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const editSchool = () => {
    console.log('bhenchode')
    console.log(schoolObj.school_id)
    axios
      .put(`http://localhost:3001/school/${schoolObj.school_id}`, {
        name: name,
        location: location,
        admission: admission,
        image: image,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    JSON.stringify(schoolObj) == {} ? addSchool() : editSchool();
  };

  return (
    <div className={"school-form"}>
      <h1> {title} School </h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.File
          label="Image (git, jpeg, jpg, png)"
          className="school-form-input"
        />
        <Form.Control
          as="textarea"
          rows={1}
          maxLength="16"
          placeholder="Enter Name"
          value={name}
          className="school-form-input"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="school-form-input"
        />
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Admission"
          value={admission}
          onChange={(e) => setAdmission(e.target.value)}
          className="school-form-input"
        />
        <Button size="lg" type="submit" className="submit-school-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SchoolForm;
