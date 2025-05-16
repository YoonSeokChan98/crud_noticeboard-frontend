import { ToastContainer, toast } from 'react-toastify';
import { LoginStyled } from './styled';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { postLogin } from '@/pages/api/userApi';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { loginSuccess } from '@/redux/slices/userSlices';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

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

        if (response.result === false) {
          toast.error(`${response.message}`);
        }

        if (response.data.token) {
          Cookies.set('userToken', response.data.token, {
            expires: 1, // 만료 시간 하루
            secure: true, // HTTPS에서만 전송
            sameSite: 'Strict', // CSRF 공격 방지
            path: '/', // 쿠키의 유효 경로
          });

          dispatch(
            loginSuccess({
              userName: response.data.user.userName,
              userSocialId: response.data.user.userSocialId,
              userToken: response.data.user.userToken,
            })
          );

          toast.success(`${response.message}`);

          loginFormik.resetForm();
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
