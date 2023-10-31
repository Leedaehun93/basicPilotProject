// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\BootstrapIcons.tsx : rfce
// 컴포넌트 이름 : 첫글자 대문자로 만들기(안만들면 에러발생)
import React from "react";

function BootstrapIcons() {
  return (
    // TODO: HTML
    <div>
      {/* TODO: 공홈 : https://icons.getbootstrap.com/ */}
      {/* 1) Bootstrap Icons : 홈페이지 각각의 아이콘 모양을 쉽게 제공 */}
      {/* 사용법(install) : 부트스트랩-아이콘 cdn 걸기 : index.html */}
      {/*                   <i className='bi bi-아이콘클래스명'>글자</i> */}
      {/* TODO: 유사사이트(참고): font-awesome 사이트 */}
      <i className="bi bi-heart-fill"> : bi-heart-fill</i>
      <br />
      <i className="bi bi-heart"> : bi-heart</i>
      <br />
      <i className="bi bi-gem"> : bi-gem</i>
      <br />
      <i className="bi bi-laptop"> : bi-laptop</i>
      <br />
      <i className="bi bi-globe"> : bi-globe</i>
      <br />
      <br />
      <i className="bi bi-bar-chart"> : 안테나</i>
    </div>
  );
}

export default BootstrapIcons;
