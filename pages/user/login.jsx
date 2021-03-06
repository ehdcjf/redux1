import FormLayout from "../../components/FormLayout";
import Head from "next/head";
import Router from "next/router";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { UserLoginAction } from "../../reducers/user";


const Login = () => {
  const dispatch = useDispatch();

  const userid = useInput("");
  const userpw = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLoginAction())
    
    userid.value === "kkk" && userpw.value === "1234"
      ? Router.push("/")
      : alert("아이디와 패스워드가 다릅니다.");
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <FormLayout>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" {...userid} placeholder="아이디를 입력해주세요" />
          <input
            type="password"
            {...userpw}
            placeholder="패스워드를 입력해주세요"
          />
          <button type="submit">로그인</button>
        </form>
      </FormLayout>
    </>
  );
};

export default Login;
