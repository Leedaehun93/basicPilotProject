import React, { useEffect, useState } from "react";
import IQna from "../../../types/basic/IQna";
import TitleCom from "../../../components/common/TitleCom";
import QnaService from "../../../services/basic/QnaService";
import initScripts from "../../../assets/js/scripts";
import initCustom from "../../../assets/js/custom";

function AddQna() {

  useEffect(()=>{
    initScripts();
    initCustom();
},[])

  // 객체 초기화
  const initialQna = {
    qno: null,
    question: "",
    questioner: "",
    answer: "",
    answerer: ""
  };

  // 부서객체
  const [qna, setQna] = useState<IQna>(initialQna);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setQna({ ...qna, [name]: value });  // 변수저장
  };

  // 저장 함수
  const saveQna = () => {
    // 임시 부서 객체
    var data = {
      qno: qna.qno,
      question: qna.question,
      questioner: qna.questioner,
      answer: qna.answerer,
      answerer: qna.answerer
    };

    QnaService.create(data)    // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newQna = () => {
    setQna(initialQna); // 부서 초기화
    setSubmitted(false);  // submitted 변수 초기화
  };

  return (
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newQna}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Qna" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="question" className="col-form-label">
                  Question
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="question"
                  required
                  className="form-control"
                  value={qna.question}
                  onChange={handleInputChange}
                  placeholder="question"
                  name="question"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="answer" className="col-form-label">
                  Answer
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="answer"
                  required
                  className="form-control"
                  value={qna.answer}
                  onChange={handleInputChange}
                  placeholder="answer"
                  name="answer"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="questioner" className="col-form-label">
                  Questioner
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="questioner"
                  required
                  className="form-control"
                  value={qna.questioner}
                  onChange={handleInputChange}
                  placeholder="questioner"
                  name="questioner"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="answerer" className="col-form-label">
                Answerer
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="answerer"
                  required
                  className="form-control"
                  value={qna.answerer}
                  onChange={handleInputChange}
                  placeholder="answerer"
                  name="answerer"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button onClick={saveQna} className="btn btn-outline-primary ms-2 col">
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddQna;