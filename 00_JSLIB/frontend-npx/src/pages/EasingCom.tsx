// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\EasingCom.tsx : rfce
import React, { useEffect } from "react";

// TODO: 내가 만든 css
import "../assets/css/EasingCom.css";

import initMain from "../assets/js/initMain";

export default function EasingCom() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    <div>
      <div id="boxing">
        <div id="box"> </div>
      </div>
    </div>
  );
}
