import { DeletePostType, EditPostType, PostType } from '@/types';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

// 게시글 등록하기
export const postWriteNote = async (postData: PostType) => {
  try {
    const response = await axios.post(`${API_URL}/api/post/create_post`, postData);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

// 게시글 전체 가져오기
export const getAllPost = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/post/get_all_post`);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

// 게시글 1개 가져오기
export const getOnePost = async (id: any) => {
  try {
    const response = await axios.get(`${API_URL}/api/post/get_one_post`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

// 게시글 수정하기
export const updatePost = async (postData: EditPostType) => {
  try {
    const response = await axios.patch(`${API_URL}/api/post/update_post`, postData);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};

// 게시글 삭제하기
export const deletePost = async (postId: DeletePostType) => {
  try {
    const response = await axios.patch(`${API_URL}/api/post/delete_post`, postId);
    return response.data;
  } catch (error) {
    console.error(`에러: ${error}`);
  }
};
