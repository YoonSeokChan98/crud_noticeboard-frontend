import styled from 'styled-components';

export const PostCardStyled = styled.div`
  .PostCardWrap {
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 16px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }

    .PostCardText {
      display: flex;
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 5px;

      > div:first-child {
        margin-right: 8px;
        color: #888;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 600px) {
    .PostCardWrap {
      padding: 16px;
      .PostCardTitle {
        font-size: 16px;
      }
      .PostCardContent {
        font-size: 13px;
      }
    }
  }
`;
