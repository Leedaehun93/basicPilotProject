// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\DatepickerCom.tsx : rfce

import { useEffect, useRef, useState } from "react";


export default function DatepickerCom() {

// TODO: 변수 정의
const [jdate, setJdate] = useState(" ");

// TODO : 리액트에서 특정태그에 직접 접근하는 방법 : const 변수명 = useRef()
// TODO : html input 태그에 속성 정의 : ref={변수명}
// TODO : 바닐라 : querySelecter(선택자) 유사
const datepicker = useRef<HTMLInputElement>(null);

// TODO: 함수 정의
// TODO : 수동 바인딩 : 화면값 -> jdate 저장
const onChangeJdate = (event:any) => { 
    setJdate(event.target.value);
 }
 // TODO : 현재 달력에(ref={datepicker}) 선택된 값을 출력하는 버튼 함수
 const printDate = () => { 
    // useRef 함수 값 가져오기 (달력 연결 : 달력 값)
    // es5 사용법 : 널리쉬 ?
    // 변수?속성명 -> 만약 변수가 null -> undefined 변경됨
    //                변수가 null 아니면 -> 속성명이 실행됨
    // TODO : 방법 1 alert(datepicker.current?.value);
    // TODO : 방법 2 if (datepicker.current != null) { alert(datepicker.current?.value); }}
    if (datepicker.current != null) {
         alert(datepicker.current?.value); // 값 가져오기
        }
    }

// TODO : 특정 날짜를 달력 입력창에 표시하는 버튼 함수
// as any 사용하여 경고문 회피
const setDate = () => { 
    // TODO : 방법 1 (datepicker.current as any).value = "2023-10-30";
    // TODO : 방법 2  if (datepicker.current != null) { datepicker.current.value = "2023-10-30";; // 값 가져오기 } }
 if (datepicker.current != null) {
    datepicker.current.value = "2023-10-30";; // 값 가져오기
   }
}

// TODO : 화면이 뜰 때 달력(외부 lib) 만들기
useEffect(()=>{
    // 사용법 : $(선택자).datepicker({옵션});
    $(function () {
        ($("#datepicker") as any).datepicker(
          // 날짜 포맷 지정
          {
            dateFormat: "yy-mm-dd", // 날짜 포맷
            showOn: "button",       // 입력창 옆에 달력 기본 버튼 보이기
            buttonImage:            // 버튼에 기본 이미지 넣기
              "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
          }
        );
      });
}, [])

  return (
    // TODO: HTML
    <div className="container">
      <div className="form-group">
        <label htmlFor="daterange">daterange</label>
        {/* 달력 시작 */}
        <p>
          Date : &nbsp;
          <input
            type="text"
            id="datepicker"
            ref={datepicker}
            value={jdate}
            onChange={onChangeJdate}
          />
        </p>
        {/* 달력 끝 */}
        {/* 현재 달력에 선택된 값을 출력하는 버튼 : alert() */}
        <button
          className="btn btn-primary btn-sm mt-2 mb-2"
          onClick={printDate}
        >
          출력
        </button>
        {/* 현재 달력에 선택된 값을 출력하는 버튼 끝 */}
        &nbsp;&nbsp;
        {/* 특정 날짜를 달력 입력창에 표시하는 버튼 시작 */}
        <button
          className="btn btn-primary btn-sm mt-2 mb-2"
          onClick={() => setDate()}
        >
          날짜 지정
        </button>
        {/* 특정 날짜를 달력 입력창에 표시하는 버튼 끝 */}
        <br />
      </div>
    </div>
  );
}
