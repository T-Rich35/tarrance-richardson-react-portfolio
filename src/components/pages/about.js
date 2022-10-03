import React from "react";
import profilePicture from "../../../static/assets/images/bio/green.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Tarrance please do not give up now you are almost finish with coding
        school amet fermentum. Etiam porta sem malesuada magna mollis euismod.
        Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta
        felis euismod semper.
      </div>
    </div>
  );
}
