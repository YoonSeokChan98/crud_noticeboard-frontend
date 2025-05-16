import { useEffect, useState } from 'react';
import { HeaderStyled } from './styled';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { logOut } from '@/redux/slices/userSlices';
import { toast } from 'react-toastify';

const Header = () => {
  const router = useRouter();
  const [loginUser, setLoginUser] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const cookie = Cookies.get('userToken');
  useEffect(() => {
    if (cookie) {
      setLoginUser(true);
    } else {
      setLoginUser(false);
    }
  }, [cookie]);

  const handleLogout = () => {
    Cookies.remove('userToken');
    dispatch(logOut());
    toast.info('로그아웃');
    router.push('/');
  };

  const loginStatus = loginUser ? (
    <div onClick={handleLogout}>로그아웃</div>
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
