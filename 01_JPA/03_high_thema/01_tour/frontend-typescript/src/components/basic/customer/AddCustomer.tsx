import React, { useEffect, useState } from "react";
import ICustomer from "../../../types/basic/ICustomer";
import TitleCom from "../../../components/common/TitleCom";
import CustomerService from "../../../services/basic/CustomerService";
import initScripts from "../../../assets/js/scripts";
import initCustom from "../../../assets/js/custom";

function AddCustomer() {

  useEffect(()=>{
    initScripts();
    initCustom();
},[])

  // 객체 초기화
  const initialCustomer = {
    cid: null,
    fullName: "",
    email: "",
    phone: ""
  };

  // 부서객체
  const [customer, setCustomer] = useState<ICustomer>(initialCustomer);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setCustomer({ ...customer, [name]: value });  // 변수저장
  };

  // 저장 함수
  const saveCustomer = () => {
    // 임시 부서 객체
    var data = {
      cid: customer.cid,
      fullName: customer.fullName,
      email: customer.email,
      phone: customer.phone
    };

    CustomerService.create(data)    // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newCustomer = () => {
    setCustomer(initialCustomer); // 부서 초기화
    setSubmitted(false);  // submitted 변수 초기화
  };

  return (
    <>
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
   {/*        <TitleCom title="Add Customer" /> */}
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="fullName" className="col-form-label">
                FullName
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="fullName"
                  required
                  className="form-control"
                  value={customer.fullName}
                  onChange={handleInputChange}
                  placeholder="fullName"
                  name="fullName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="email" className="col-form-label">
                Email
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="email"
                  required
                  className="form-control"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="email"
                  name="email"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="phone" className="col-form-label">
                Phone
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="phone"
                  required
                  className="form-control"
                  value={customer.phone}
                  onChange={handleInputChange}
                  placeholder="phone"
                  name="phone"
                />
              </div>
            </div>
            
            <div className="row g-3 mt-3 mb-3">
              <button onClick={saveCustomer} className="btn btn-outline-primary ms-2 col">
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AddCustomer;