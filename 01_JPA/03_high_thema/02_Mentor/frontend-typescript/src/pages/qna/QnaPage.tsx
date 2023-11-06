/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\02_Mentor\frontend-typescript\src\pages\qna\AddQnaPage.tsx */

import React from "react";
import { useEffect } from "react";
import initMain from "../../assets/js/main";
import Qna from "../../components/basic/qna/Qna";

export default function QnaPage() {
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
        <h2>Q&A 상세 조회</h2>
        <p>Q&A 상세 조회는 여기서 할 수 있습니다. </p>
      </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}
    {/* 제목 end */}

    {/* <!-- ======= Q&A 조회 Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          {/* 여기 */}
          <Qna />
        </div>
      </div>
    </section>
    {/* <!-- End Q&A 조회 Section --> */}
  </>
  );
}
