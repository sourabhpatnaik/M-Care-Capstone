import React from 'react'

function AboutUs() {
  return (
    <div className="about-container">
    <div className="container-left"></div>
    <div className="container-right">
      <h1>About Us</h1>
      <p>
        We are a team of 4th year students from VIT Bhopal university creating
        this pocket healthcare management app for our final capstone project.
        At M-care we provide you with three handy easy to use tools which
        includes:-
      </p>

      <p>
        <strong>Nearest Hospital tracker</strong> <br /> This tool will provide you with details and
        directions to best nearest hospital based on your symptoms and will
        notify the hospital of your arrival.{" "}
      </p>

      <p>
        <strong>Prescription manager</strong> <br/>This tool will magange all your prescriptions
        and is a medical record tracker. Currently users need to mannualy
        input the details of prescriptions.
      </p>

      <p>
        {" "}
        <strong>Medicine Manager</strong> <br/>It will provide you with all the details of your
        medicine.
      </p>
    </div>
  </div>
  )
}

export default AboutUs