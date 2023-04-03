import React from "react";
import Map from './Map'

const Contact = () => {
  const center = { lat: 35.8393438, lng: 10.5967063 }; 

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
      <Map center={center} />
    </div>
  );
};

export default Contact;
