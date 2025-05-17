import { GetPostType } from '@/types';
import { PostCardStyled } from './styled';
import { useRouter } from 'next/router';

const PostCard = ({ item }: any) => {
  const router = useRouter();
  const { id, postTitle, postContent } = item;

  const handlePostCard = () => {
    router.push({
      pathname: '/post_detail/[id]',
      query: { id },
    });
  };

  return (
    <PostCardStyled>
      <div className="PostCardWrap" onClick={handlePostCard}>
        <div className="PostCardTitle">
          <div>제목: </div>
          <div>{postTitle}</div>
        </div>
        <div className="PostCardContent">
          <div>내용: </div>
          <div>{postContent}</div>
        </div>
      </div>
    </PostCardStyled>
  );
};

export default PostCard;
