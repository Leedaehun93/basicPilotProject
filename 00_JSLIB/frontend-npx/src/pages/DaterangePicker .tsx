// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\DaterangePicker .tsx : rfce
import React, { useEffect, useRef, useState } from "react";

/* eslint-disable */
export default function DaterangePicker() {
  // 달력 변수
  const [jdate, setJdate] = useState("");

  // 특수한 함수 : 리액트에서 지정한 태그에 직접 접근할때 사용
  const daterange = useRef<HTMLInputElement>(null);

  //   화면이 뜰때 실행 : 달력 생성
  useEffect(() => {
    if ($("#daterange").length) {
      // daterange 있을때만 실행
      // 사용법 : $(선택자).daterangepicker({옵션})
      ($("#daterange") as any).daterangepicker({
        timePicker: true, // 시간(시:분) 표현
        timePicker24Hour: true, // 24시 표현
        timePickerSeconds: true, // (시:분:초) 표현
        locale: {
          format: "YYYY-MM-DD HH:mm:ss", // 달력 포맷
        },
        // singleDatePicker: true // 달력 1개 사용
      });
    }
  }, []);

  //   수동 바인딩
  const onChangeJdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJdate(event.target.value);
  };
  //   달력값 가져오기 : alert()
  const printDate = () => {
    alert(daterange.current?.value);
  };

  return (
    // TODO: HTML
    <div className="container">
      <div className="form-group">
        <label htmlFor="daterange">daterange</label>
        {/* 사용법: ref=변수 */}
        {/* 달력 시작 */}
        <input
          type="text"
          className="form-control"
          id="daterange"
          name="daterange"
          value={jdate}
          onChange={onChangeJdate}
          ref={daterange}
        />
        {/* 달력 끝 */}
        {/* 버튼 시작 */}
        <button
          className="btn btn-primary btn-sm mt-2 mb-2"
          onClick={printDate}
        >
          출력
        </button>
        {/* 버튼 끝 */}
        <br />
      </div>
    </div>
  );
}
