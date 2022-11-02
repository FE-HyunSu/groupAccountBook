import styled, { keyframes } from 'styled-components';

export default function Footer() {
  const FontColorMotion = keyframes`
    0% {
      color: #111;
    }
    10% {
      color: #0068c3;
    }
    60% {
      color: #4b7c5e;
    }
    100% {
      color: #ff0000;
    }
  `;
  const Footer = styled.footer`
    display: block;
    height: 5rem;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 0;
      padding: 0;
      font-weight: 300;
      font-size: 1.4rem;
      color: #1a1a1a;
      background-color: #fff;
      text-align: center;
      transition: 0.2s;
      :hover {
        background-color: #f7f7f7;
        letter-spacing: 0.4rem;
        animation: ${FontColorMotion} 2s infinite linear alternate;
        @media only screen and (max-width: 992px) {
          background-color: #fff;
          letter-spacing: 0;
          animation: none;
        }
      }
    }
  `;
  return (
    <>
      <Footer>
        <p>KHS. ALL RIGHT RESERVED.</p>
      </Footer>
    </>
  );
}
