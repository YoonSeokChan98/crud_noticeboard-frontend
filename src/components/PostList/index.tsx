import { getAllPost } from '@/pages/api/postApi';
import { PostListStyled } from './styled';
import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toast } from 'react-toastify';

const PostList = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    try {
      const response = await getAllPost();
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const nowUser = useSelector((state: RootState) => state?.user.isLoggedIn);
  const writeClick = () => {
    if (!nowUser) {
      return toast.error('먼저 로그인을 해주세요');
    }
    router.push('/write_post');
  };

  return (
    <PostListStyled>
      <div>
        <div>게시글 리스트</div>
        {posts?.length > 0 ? (
          posts?.map((x: any, i: number) => <PostCard key={i} item={x} />)
        ) : (
          <div>작성된 글이 없습니다.</div>
        )}
        <Button onClick={writeClick}>작성하기</Button>
      </div>
    </PostListStyled>
  );
};
export default PostList;
