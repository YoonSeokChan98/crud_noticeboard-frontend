import { ToastContainer, toast } from 'react-toastify';
import { LoginStyled } from './styled';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { postLogin } from '@/pages/api/userApi';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Login = () => {
  const router = useRouter();

  const formInitialValues = {
    userSocialId: '',
    userPassword: '',
  };

  const loginFormik = useFormik({
    initialValues: formInitialValues,
    onSubmit: async (values) => {
      const { userSocialId, userPassword } = values;
      try {
        const response = await postLogin({ userSocialId, userPassword });
        loginFormik.resetForm();
        if (response.result === true) {
          if (response.data.token) {
            Cookies.set('userToken', response.data.token, { expires: 1 });
          }
          toast.success(`${response.message}`);
          router.push('/');
        } else {
          toast.error(`${response.message}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <LoginStyled>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      <form onSubmit={loginFormik.handleSubmit}>
        <div>
          <label>아이디</label>
          <Input
            id="userSocialId"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.userSocialId}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <Password
            id="userPassword"
            onChange={loginFormik.handleChange}
            value={loginFormik.values.userPassword}
            required
          />
        </div>
        <Button htmlType="submit">로그인</Button>
      </form>
    </LoginStyled>
  );
};

export default Login;
