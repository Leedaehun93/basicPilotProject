// C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\01_proman\frontend-typescript\src\components\common\Nav.tsx : rfce
import React from "react";

export default function Nav() {
  return (
    // TODO: HTML
    <>
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{width: 3 + "rem", height: 3 + "rem"}}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* <!-- Spinner End --> */}
    </>
  );
} // end of Nav

