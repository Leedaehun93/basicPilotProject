// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\SimpleLightboxComExam.tsx : rfce
import React, { useEffect } from 'react'

import initMain from '../assets/js/initMain';

// 이미지 경로 import
// 큰이미지
import img01 from "../assets/img/gallery/full/01.jpg";
import img02 from "../assets/img/gallery/full/02.jpg";
import img03 from "../assets/img/gallery/full/03.jpg";
import img04 from "../assets/img/gallery/full/04.jpg";
import img05 from "../assets/img/gallery/full/05.jpg";
import img06 from "../assets/img/gallery/full/06.jpg";

// 작은이미지
import imgt01 from "../assets/img/gallery/thumb/01.jpg";
import imgt02 from "../assets/img/gallery/thumb/02.jpg";
import imgt03 from "../assets/img/gallery/thumb/03.jpg";
import imgt04 from "../assets/img/gallery/thumb/04.jpg";
import imgt05 from "../assets/img/gallery/thumb/05.jpg";
import imgt06 from "../assets/img/gallery/thumb/06.jpg";

export default function SimpleLightboxComExam() {
    useEffect(() => {
        initMain();
      }, []);

  return (
    // TODO: HTML
    <div>
      <h1 className="align-center">Simple LightboxExam Demo Page</h1>
      <div className="row gallery">
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
  )
}
