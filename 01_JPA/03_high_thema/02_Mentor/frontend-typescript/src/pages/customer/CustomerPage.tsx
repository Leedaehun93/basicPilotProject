/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\02_Mentor\frontend-typescript\src\pages\CustomerPage.tsx */
import React from "react";
import { useEffect } from "react";
import initMain from "../../assets/js/main";
import Customer from "../../components/basic/customer/Customer";


export default function CustomerPage() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: JSX
    <>
    {/* 제목 start */}
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>고객 수정</h2>
        <p>고객 수정은 여기서 할 수 있습니다. </p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    {/* 제목 end */}

    {/* <!-- ======= 고객 수정 Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          {/* 여기 */}
          <Customer />
        </div>
      </div>
    </section>
    {/* <!-- End 고객 수정 Section --> */}
  </>
  );
}
