import { deletePost, getOnePost, updatePost } from '@/pages/api/postApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PostDetailStyled } from './styled';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import TextArea from 'antd/es/input/TextArea';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const PostDetail = () => {
  const [edit, setEdit] = useState(false);
  const [editPermission, setEditPermission] = useState(false);

  const [postUserSocialId, setPostUserSocialId] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postPostDate, setPostDate] = useState('');

  const router = useRouter();
  const { id } = router.query;
  const nowUser = useSelector((state: RootState) => state?.user?.userInfo?.userSocialId);
  useEffect(() => {
    const getPost = async () => {
      const resPost = await getOnePost(id);
      const postUserId = resPost.data.userSocialId;
      console.log('🚀 ~ getPost ~ postUserId:', postUserId);

      setPostUserSocialId(postUserId);
      setPostTitle(resPost.data.postTitle);
      setPostContent(resPost.data.postContent);
      setPostDate(resPost.data.createdAt.split('T')[0]);

      if (nowUser === postUserId) {
        setEditPermission(true);
      } else {
        setEditPermission(false);
      }
    };

    getPost();
  }, [id]);

  if (!id) {
    return <div>로딩중</div>;
  }

  const handleEditClick = () => {
    setEdit(true);
  };
  const postId = Number(id);

  const handleDeleteClick = async () => {
    try {
      const postStatus = 'inactive';
      const response = await deletePost({ id: postId, postStatus });
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const formInitialValues = {
    postTitle: postTitle,
    postContent: postContent,
  };
  const editPostFormik = useFormik({
    initialValues: formInitialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const { postTitle, postContent } = values;
      try {
        const response = await updatePost({ postTitle, postContent, id: postId });
        setEdit(false);
        setPostTitle(response.data[0].postTitle);
        setPostContent(response.data[0].postContent);
        console.log('🚀 ~ onSubmit: ~ response:', response);
        editPostFormik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <PostDetailStyled>
      {edit ? (
        <>
          <form className="PostDetailWrap" onSubmit={editPostFormik.handleSubmit}>
            <div className="PostDetailDate">
              <div className="BoldFont">작성날짜: </div>
              <div>{postPostDate}</div>
            </div>
            <div className="PostDetailUserName">
              <div className="BoldFont">작성자: </div>
              <div>{postUserSocialId}</div>
            </div>
            <div className="PostDetailTitle">
              <div className="BoldFont">제목: </div>
              <Input
                id="postTitle"
                onChange={editPostFormik.handleChange}
                value={editPostFormik.values.postTitle}
                required
              />
            </div>
            <div className="PostDetailContent">
              <div className="BoldFont">내용: </div>
              <TextArea
                rows={10}
                id="postContent"
                onChange={editPostFormik.handleChange}
                value={editPostFormik.values.postContent}
                required
              />
            </div>
            {editPermission && (
              <div className="PostBtn">
                <Button htmlType="submit">저장하기</Button>
              </div>
            )}
          </form>
        </>
      ) : (
        <>
          <div className="PostDetailWrap">
            <div className="PostDetailDate">
              <div className="BoldFont">작성날짜: </div>
              <div>{postPostDate}</div>
            </div>
            <div className="PostDetailUserName">
              <div className="BoldFont">작성자: </div>
              <div>{postUserSocialId}</div>
            </div>
            <div className="PostDetailTitle">
              <div className="BoldFont">제목: </div>
              <div>{postTitle}</div>
            </div>
            <div className="PostDetailContent">
              <div className="BoldFont">내용 </div>
              <div>{postContent}</div>
            </div>
            {editPermission && (
              <div className="PostBtn">
                <Button onClick={handleEditClick}>수정하기</Button>
                <Button onClick={handleDeleteClick}>삭제하기</Button>
              </div>
            )}
          </div>
        </>
      )}
    </PostDetailStyled>
  );
};

export default PostDetail;
