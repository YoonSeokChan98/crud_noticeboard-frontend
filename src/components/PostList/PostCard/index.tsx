import { GetPostType } from '@/types';
import { PostCardStyled } from './styled';
import { useRouter } from 'next/router';

const PostCard = ({ item }: any) => {
  console.log('🚀 ~ PostCard ~ item:', item);
  const router = useRouter();
  const { id, postTitle, postContent, createdAt, userSocialId } = item;

  const handlePostCard = () => {
    router.push({
      pathname: '/post_detail/[id]',
      query: { id },
    });
  };

  return (
    <PostCardStyled>
      <div className="PostCardWrap" onClick={handlePostCard}>
        <div className="PostCardText">
          <div>작성날짜: </div>
          <div>{createdAt.split('T')[0]}</div>
        </div>
        <div className="PostCardText">
          <div>작성자: </div>
          <div>{userSocialId}</div>
        </div>
        <div className="PostCardText">
          <div>제목: </div>
          <div>{postTitle}</div>
        </div>
        <div className="PostCardText">
          <div>내용: </div>
          <div>{postContent}</div>
        </div>
      </div>
    </PostCardStyled>
  );
};

export default PostCard;
