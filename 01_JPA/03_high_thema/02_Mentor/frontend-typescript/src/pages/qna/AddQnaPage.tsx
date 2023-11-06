/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\02_Mentor\frontend-typescript\src\pages\qna\AddQnaPage.tsx */
import React from "react";
import { useEffect } from "react";
import initMain from "../../assets/js/main";
import AddQna from "../../components/basic/qna/AddQna";

export default function AddQnaPage() {
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
          <h2>Q&A 추가</h2>
          <p>Q&A 추가는 여기서 할 수 있습니다. </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      {/* 제목 end */}

      {/* <!-- ======= Q&A 추가 Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            {/* 여기 */}
            <AddQna />
          </div>
        </div>
      </section>
      {/* <!-- End Q&A 추가 Section --> */}
    </>
  );
}
