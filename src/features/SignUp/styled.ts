import styled from 'styled-components';

export const SignUpStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #f9f9f9;

  form {
    background-color: #fff;
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    label {
      font-weight: 600;
      margin-bottom: 6px;
      display: block;
      color: #333;
    }

    input {
      height: 40px;
    }

    .ant-input-password {
      height: 40px;
    }

    button {
      height: 44px;
      background-color: #1890ff;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 6px;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #40a9ff;
      }
    }
  }

  @media (max-width: 600px) {
    form {
      padding: 30px 20px;
    }
  }
`;
