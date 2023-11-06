/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\02_Mentor\frontend-typescript\src\pages\CustomerListPage.tsx */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import initMain from "../../assets/js/main";
import CustomerList from "../../components/basic/customer/CustomerList";


export default function CustomerListPage() {
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
          <h2>고객 조회</h2>
          <p>고객 조회는 여기서 할 수 있습니다. </p>
        </div>
      </div>
      {/* <!-- End Breadcrumbs --> */}
      {/* 제목 end */}

      {/* <!-- ======= 고객 조회 Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            {/* 여기 */}
            <CustomerList />
          </div>
        </div>
      </section>
      {/* <!-- End 고객 조회 Section --> */}
    </>
  );
}
