import React from "react";
import contactPagePicture from "../../../static/assets/images/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">25teerich@gmail</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-location" />
            </div>

            <div className="text">Devcamp, AL </div>
          </div>
        </div>
      </div>
    </div>
  );
}
