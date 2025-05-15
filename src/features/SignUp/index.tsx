import { useRouter } from 'next/router';
import { SignUpStyled } from './styled';
import { useFormik } from 'formik';
import Password from 'antd/es/input/Password';
import { Button, Input } from 'antd';
import { postSignup } from '@/pages/api/userApi';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const router = useRouter();

  const formInitialValues = {
    userName: '',
    userSocialId: '',
    userPassword: '',
  };
  const signupFormik = useFormik({
    initialValues: formInitialValues,
    onSubmit: async (values) => {
      const { userName, userSocialId, userPassword } = values;
      try {
        const response = await postSignup({ userName, userSocialId, userPassword });
        signupFormik.resetForm();
        if (response.result === true) {
          toast.success(`${response.message}`);
          router.push('/');
        } else {
          toast.error(`${response.message}`);
        }
      } catch (error) {
        console.error(`회원가입 에러: ${error}`);
      }
    },
  });
  return (
    <SignUpStyled>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      <form onSubmit={signupFormik.handleSubmit}>
        <div>
          <label htmlFor="usernameInput">이름</label>
          <Input id="userName" onChange={signupFormik.handleChange} value={signupFormik.values.userName} required />
        </div>
        <div>
          <label htmlFor="usernameInput">아이디</label>
          <Input
            id="userSocialId"
            onChange={signupFormik.handleChange}
            value={signupFormik.values.userSocialId}
            required
          />
        </div>
        <div>
          <label htmlFor="usernameInput">비밀번호</label>
          <Input
            type="password"
            id="userPassword"
            onChange={signupFormik.handleChange}
            value={signupFormik.values.userPassword}
            required
          />
        </div>
        <div>
          <Button htmlType="submit">확인</Button>
        </div>
      </form>
    </SignUpStyled>
  );
};

export default SignUp;
