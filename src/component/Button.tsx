import { useEffect } from "react";
import axios from "axios";

const localhost = "http://localhost:4000";
export default function Button() {
  const onclick = () => {
    const data = axios
      .post(`${localhost}/users/join`, {
        email: "kkt@naver.com",
        password: "dw1602",
        name: "김경태",
        nickname: "경자",
        birth: "1996-12-12",
        address: "강원도 원주시 무실동 휴먼시아6차 606동 1401호",
        phone: "010-2739-2271",
        gender: 2,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <button onClick={onclick}>버튼</button>
    </>
  );
}
