import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./School.css";

const School = ({ schoolData, openForm }) => {
  useEffect(() => {
    console.log(schoolData);
  }, [schoolData]);

  return (
    <div className="school-container">
      <div className="label-container">
        <div className="school-label" style={{ "margin-top": "5%" }}>
          {schoolData.name}
        </div>
        <div className="school-label">{schoolData.location}</div>
        <div className="school-label">{schoolData.admission}</div>
        <Button
          size="sm"
          onClick={() => openForm("Edit", schoolData)}
          className="update-school-button"
        >
          Update
        </Button>
      </div>
      <div className="image">
        <p className="image-placeholder">Image will go here</p>
      </div>
    </div>
  );
};

export default School;
