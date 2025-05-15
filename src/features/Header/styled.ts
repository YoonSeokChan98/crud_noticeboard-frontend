import styled from 'styled-components';

export const HeaderStyled = styled.div`
.headerWrap{
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  .headerLogo{
    font-weight: bolder;
    font-size: larger;
    margin: 20px;
  }
  .headerNavBar{
    display: flex;
    margin: 10px;
    div{
      margin: 10px;
    }
  }
}
`;
