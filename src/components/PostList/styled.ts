import styled from 'styled-components';

export const PostListStyled = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 20px;

  .PostListWrap {
    display: flex;
    flex-direction: column;

    .WritePostBtn {
      align-self: flex-end;
      width: 120px;
      height: 40px;
      background-color: #1890ff;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 6px;
      transition: background-color 0.3s;

      &:hover {
        /* background-color: #40a9ff; */
      }
    }

    > div {
      font-size: 16px;
      color: #888;
      text-align: center;
      margin-top: 20px;
    }
  }

  @media (max-width: 600px) {
    .PostListWrap {
      .WritePostBtn {
        width: 100%;
        height: 44px;
      }
    }
  }
`;
