import styled from 'styled-components';

export const PostDetailStyled = styled.div`
  .PostDetailWrap {
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    .BoldFont {
      font-size: large;
      font-weight: bolder;
    }
    .PostDetailDate {
      display: flex;
      border-bottom: 1px solid;
    }
    .PostDetailUserName {
      display: flex;
      border-bottom: 1px solid;
    }
    .PostDetailTitle {
      display: flex;
      border-bottom: 1px solid;
    }
    .PostDetailContent {
      display: flex;
      border-bottom: 1px solid;
    }
  }
`;
