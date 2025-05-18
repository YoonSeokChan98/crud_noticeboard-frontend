import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  .headerWrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .headerLogo {
      font-weight: 700;
      font-size: 22px;
      color: #1890ff;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #40a9ff;
      }
    }

    .headerNavBar {
      display: flex;
      align-items: center;
      gap: 16px;

      div {
        cursor: pointer;
        font-size: 15px;
        color: #333;
        transition: color 0.2s;

        &:hover {
          color: #1890ff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .headerWrap {
      flex-direction: column;
      align-items: flex-start;

      .headerNavBar {
        margin-top: 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  }
`;
