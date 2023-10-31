// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\TypedCom.tsx : rfce
import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

export default function TypedCom() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      <span id="typed1"></span>
    </div>
  );
}
