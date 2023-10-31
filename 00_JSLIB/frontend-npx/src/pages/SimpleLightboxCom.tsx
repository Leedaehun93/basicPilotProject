// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\SimpleLightboxCom.tsx : rfce
import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

// 이미지 경로 import
import img01 from "../assets/img/portfolio/fullsize/1.jpg";
import img02 from "./assets/img/portfolio/fullsize/2.jpg";
import img03 from "../assets/img/portfolio/fullsize/3.jpg";
import img04 from "../assets/img/portfolio/fullsize/4.jpg";
import img05 from "../assets/img/portfolio/fullsize/5.jpg";
import img06 from "../assets/img/portfolio/fullsize/6.jpg";

import imgt01 from "../assets/img/portfolio/thumbnails/1.jpg";
import imgt02 from "../assets/img/portfolio/thumbnails/2.jpg";
import imgt03 from "../assets/img/portfolio/thumbnails/3.jpg";
import imgt04 from "../assets/img/portfolio/thumbnails/4.jpg";
import imgt05 from "../assets/img/portfolio/thumbnails/5.jpg";
import imgt06 from "../assets/img/portfolio/thumbnails/6.jpg";

export default function SimpleLightboxCom() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      <h1 className="align-center">Simple Lightbox Demo Page</h1>
      

      <div className="row portfolio">
        <a href={img01} className="col-4 ">
          <img src={imgt01} />
        </a>
        <a href={img02} className="col-4 ">
          <img src={imgt02} />
        </a>
        <a href={img03} className="col-4 ">
          <img src={imgt03} />
        </a>
        <a href={img04} className="col-4 ">
          <img src={imgt04} />
        </a>
        <a href={img05} className="col-4 ">
          <img src={imgt05} />
        </a>
        <a href={img06} className="col-4 ">
          <img src={imgt06} />
        </a>
        <div className="clear"></div>
      </div>
    </div>
  );
}
