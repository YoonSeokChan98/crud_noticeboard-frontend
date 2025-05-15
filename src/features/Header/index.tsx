import { useEffect, useState } from 'react';
import { HeaderStyled } from './styled';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get('userToken');
    console.log(`토큰 존재여부 확인: ${cookie}`);
  }, []);
  const logOut = () => {
    Cookies.remove('userToken');
    router.push('/');
  };
  const loginStatus = loginUser ? (
    <div onClick={logOut}>로그아웃</div>
  ) : (
    <>
      <div
        onClick={() => {
          router.push('/login');
        }}
      >
        로그인
      </div>
      <div
        onClick={() => {
          router.push('/signup');
        }}
      >
        회원가입
      </div>
    </>
  );
  return (
    <HeaderStyled>
      <div className="headerWrap">
        <div
          className="headerLogo"
          onClick={() => {
            router.push('/');
          }}
        >
          LOGO
        </div>
        <div className="headerNavBar">{loginStatus}</div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
