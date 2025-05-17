import { LoginType, SignupType, getUserDataType } from '@/types';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

// 회원가입
export const postSignup = async (userData: SignupType) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/signup`, userData);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

// 로그인
export const postLogin = async (userData: LoginType) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/login`, userData);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

// 유저 조회
export const getUser = async ({ userSocialId }: { userSocialId: string | undefined }) => {
  try {
    const response = await axios.get(`${API_URL}/api/user/get-user`, { params: { userSocialId } });
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

