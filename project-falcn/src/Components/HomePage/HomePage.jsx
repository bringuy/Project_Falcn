import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import School from "../School/School";
import "./HomePage.css";
const axios = require("axios").default;

const HomePage = ({ openForm }) => {
  const [schoolDataset, setSchoolDataset] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSchool = async () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/schools", {
        params: {},
      })
      .then(function (response) {
        console.log(response);
        setSchoolDataset(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getSchool();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [schoolDataset]);

  return isLoading ? (
    <></>
  ) : (
    <>
      <h1 className="title">Home Page</h1>
      <div className="home-page-container">
        <Button
          size="lg"
          onClick={() => openForm("Add", {})}
          className="create-school-button"
        >
          Create
        </Button>
        <div className="school-list-container">
          {schoolDataset &&
            schoolDataset.map((school) => (
              <School schoolData={school} openForm={openForm}></School>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
