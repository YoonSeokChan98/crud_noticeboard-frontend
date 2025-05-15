import { SignupType } from '@/types';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

// 회원가입
export const postSignup = async (userData: SignupType) => {
  try {
    console.log('?????????', userData);

    const response = await axios.post(`${API_URL}/api/user/signup`, userData);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};
