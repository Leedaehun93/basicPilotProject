/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\01_tour\frontend-typescript\src\utils\http-common.ts */
import axios from "axios";

// todo: baseURL: "http://스프링ip주소:스프링포트번호/공통url"
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
});
