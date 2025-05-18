import PostList from '@/components/PostList';
import { MainPageStyled } from './styled';

const MainPage = () => {
  return (
    <MainPageStyled>
      <div className="mainWrap">
        <PostList />
      </div>
    </MainPageStyled>
  );
};
export default MainPage;
