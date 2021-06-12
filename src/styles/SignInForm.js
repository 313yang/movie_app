import styled from "styled-components";

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/6d68acdf-6efa-4f03-9513-ef482daff117/KR-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 40px;
    width: 350px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.9);
    h1 {
      font-family: "Bebas Neue", cursive;
      color: white;
      margin: 0 0 30px 0;
      border-bottom: 1px solid red;
      padding-bottom: 10px;
    }
    input {
      font-family: "Martel Sans", sans-serif;
      width: 100%;
      padding: 8px 14px;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: #333;
      &::placeholder {
        color: rgba(255, 255, 255, 0.9);
      }
      &[type="submit"] {
        margin-top: 20px;
        background-color: red;
      }
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &:focus,
      &:active {
        outline: none;
      }
    }
  }
`;
export default SignInForm;
