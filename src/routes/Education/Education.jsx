import React from "react";
import "./Education.css";
import Bounce from "react-reveal";
import { useEffect } from "react";

export function Education() {
  // Here useEffect is used to apply some styles in body
  useEffect(() => {
    document.body.className = "educationBody";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <>
      {" "}
      <div className="Education">
        <div className="pageTitle">
          <Bounce>
            <h2>Education</h2>
          </Bounce>
        </div>
        <div className="entries">
          <div className="entry">
            <div className="title big">2012-17</div>
            <h2>BE in Mechanical Engineering</h2>
            <div className="body ">
              <div className="educationImageDiv">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Rcert_logo.JPG"
                  alt="Rcert logo"
                  className="educationImage"
                />
              </div>
              <p>
                Rajiv Gandhi College of Engineering
                <br /> Chandrapur, M.H <br />
                CPGA : 6.63
              </p>
            </div>
          </div>
          
          <div className="entry School">
            <div className="title">2011</div>
            <h2>10th standard</h2>
            <div className="body">
              <p>
                Govt High School <br /> Chandrapur, M.H <br /> GPA : 8.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
