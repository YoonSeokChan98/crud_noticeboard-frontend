import { Button, Input } from 'antd';
import { WritePostStyled } from './styled';
import { useFormik } from 'formik';
import TextArea from 'antd/es/input/TextArea';
import { postWriteNote } from '@/pages/api/postApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const WritePost = () => {
  const router = useRouter();
  const userId = useSelector((state: RootState) => state.user.userInfo?.userSocialId);
  const formInitialValues = {
    postTitle: '',
    postContent: '',
  };
  const writePostFormik = useFormik({
    initialValues: formInitialValues,
    onSubmit: async (values) => {
      const { postTitle, postContent } = values;
      try {
        const response = await postWriteNote({ userSocialId: userId, postTitle, postContent });
        if (response.result === false) {
          toast.error(`${response.message}`);
        }
        writePostFormik.resetForm();
        router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <WritePostStyled>
      <form onSubmit={writePostFormik.handleSubmit}>
        <div>
          <label htmlFor="">제목</label>
          <Input
            id="postTitle"
            onChange={writePostFormik.handleChange}
            value={writePostFormik.values.postTitle}
            required
          />
        </div>
        <div>
          <label htmlFor="">내용</label>
          <TextArea
            rows={10}
            id="postContent"
            onChange={writePostFormik.handleChange}
            value={writePostFormik.values.postContent}
            required
          />
        </div>
        <Button htmlType="submit">저장하기</Button>
      </form>
    </WritePostStyled>
  );
};

export default WritePost;
