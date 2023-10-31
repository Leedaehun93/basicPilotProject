// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\TypedExam.tsx : rfce
import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

export default function TypedExam() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      <span id="typedExam"></span>
    </div>
  );
}
