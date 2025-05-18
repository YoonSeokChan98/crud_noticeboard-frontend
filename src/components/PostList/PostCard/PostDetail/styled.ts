import styled from "styled-components";

export const PostDetailStyled = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;

  .PostDetailWrap {
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);

    .PostDetailDate,
    .PostDetailUserName,
    .PostDetailTitle,
    .PostDetailContent {
      display: flex;
      margin-bottom: 16px;

      .BoldFont {
        font-weight: 600;
        min-width: 100px;
        color: #333;
      }

      div:last-child {
        flex: 1;
        font-weight: 400;
        color: #555;
      }
    }

    .PostDetailTitle {
      align-items: center;

      input {
        flex: 1;
      }
    }

    .PostDetailContent {
      /* flex-direction: column; */

      textarea {
        margin-top: 8px;
        resize: none;
        font-size: 16px;
        line-height: 1.5;
      }
    }

    .PostBtn {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 20px;

      button {
        padding: 6px 16px;
        font-weight: 500;
        border-radius: 6px;
        transition: all 0.3s;
      }

      button:first-child {
        background-color: #1890ff;
        color: white;
        border: none;

        &:hover {
          background-color: #40a9ff;
        }
      }

      button:last-child {
        background-color: #ff4d4f;
        color: white;
        border: none;

        &:hover {
          background-color: #ff7875;
        }
      }
    }
  }

  form {
    .PostDetailTitle input,
    .PostDetailContent textarea {
      border: 1px solid #d9d9d9;
      padding: 8px 12px;
      border-radius: 6px;
    }
  }
`;
