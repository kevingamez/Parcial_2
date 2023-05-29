import React from "react";
import { Image } from 'react-bootstrap';

function Banner() {
  return (
    <div className="d-flex justify-content-center align-items-center">
     <Image src="banner.png" fluid style={{ width: "100%" }} />
    </div>
  );
}

export default Banner;
