import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { setCookie } from "../util/Cookie";
import axios from "axios";

const AuthRedirect = () => {
  const [ isTokenExist, setIsTokenExist ] = useState(false);

  useEffect(() => {
    const expires = new Date();
    const token = new URL(window.location.href).searchParams.get("token");
    expires.setHours(expires.getHours() + 5); // 5시간 후 만료
    setCookie("access_token", token, {
      path: "/",
      expires,
    });
    axios
      .post(
        `${String(process.env.REACT_APP_API_URL)}/api/v1/auth/getRefreshToken`,
        { key: "value" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resp) => {
        console.log("refreshToken: ", resp);
        setCookie("refresh_token", resp, {
          path: "/",
          expires,
        });
        setIsTokenExist(true);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <Layout>
      {!isTokenExist ? <div>Redirecting...</div> : <Link to={"/search"}/>}
    </Layout>
  );
};

export default AuthRedirect;
