// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\CountUpExam.tsx : rfce
import { useEffect } from "react";

import initMain from "../assets/js/initMain";

function CountUpExam() {
  useEffect(() => {
    // 실행문
    initMain();
  }, []);
  return (
    // TODO: HTML
    <div>
      <span className="counter">1,234,567.00</span>
      <br />
      <span>$</span>
      <br />
      <span className="counter">1.99</span>
      <br />
      <span className="counter">12345 </span>
      <br />
      <br />
      <br />
      <span className="text-dark fw-bold mb-0" data-toggle="counter-up">
        1,234,567.00
      </span>
      <br />
      <span>$</span>
      <br />
      <span className="text-dark fw-bold mb-0" data-toggle="counter-up">
        1.99
      </span>
      <br />
      <span className="text-primary fw-bold mb-0" data-toggle="counter-up">
        12345
      </span>
      <br />
      <br />
      <br />
      <div>
        <span className="counter">1,234,567.00</span>
        <br />
        <span>$</span>
        <br />
        <span className="counter">1.99</span>
        <br />
        <span className="counter">12345</span>
        <br />
      </div>
    </div>
  );
}

export default CountUpExam;
