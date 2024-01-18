import React, { useState, useEffect } from "react";
import axios from "axios";

function Subscriber() {
  const [showPopup, setShowPopup] = useState(false);

  const [inputField, setInputField] = useState({
    email: "",
  });

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputField.email);

    const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

    axios.post(`${baseuri}/api/subscriber`, formData).then((res) => {
      if (res.data.status === 200) {
        setShowPopup(true);
        setInputField({
          email: "",
        });
      } else {
        alert(
          "Maybe You not fill all the required fields. Please check again and fill all the required fields (*)."
        );
      }
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <form onSubmit={allInfoSubmit}>
        <div className="form-group">
          <input
            className="input-email border-gray-500"
            type="email"
            name="email"
            onChange={inputsHandler}
            value={inputField.email}
            required
            placeholder="Email address"
          />
        </div>
        <div className="form-group mt-20">
          <button className="btn btn-linear hover-up" type="submit">
            Subscribe
            <i className="fi-rr-arrow-small-right"></i>
          </button>
        </div>
      </form>
      {/* <div className={showPopup ? "active popup" : "popup"}>
        <div className="popup-inner">
          <div className="popup-content">
            <div className="popup-close" onClick={closePopup}>
              <i className="ri-close-line"></i>
            </div>
            <div className="popup-image">
              <img
                loading="lazy"
                src="/assets/images/message.png"
                alt="image"
              />
            </div>
            <div className="popup-text">
              <h3>Subscribe To Our Newsletter</h3>
              <p>
                Your message has been successfully sent! We&apos;ll be in touch
                shortly
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Subscriber;
