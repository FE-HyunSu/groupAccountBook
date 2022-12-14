import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <HeaderBox>
        <h1>
          <strong>🥸 React Study Group</strong>
        </h1>
      </HeaderBox>
    </>
  );
}

const HeaderBox = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffa5ac;
  z-index: 100;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    strong {
      display: block;
      width: 100%;
      margin: 0;
      padding: 1.4rem 1rem;
      font-weight: 300;
      font-size: 1.4rem;
      color: #1a1a1a;
      letter-spacing: 0.1rem;
      background-color: #ffa5ac;
      text-align: center;
      text-transform: uppercase;
      transition: 0.2s;
      transform-origin: 50% 50%;
      em {
        display: block;
        font-size: 1.2rem;
        color: #999;
      }
      &:hover {
        letter-spacing: 0.7rem;
        @media only screen and (max-width: 992px) {
          letter-spacing: 0;
        }
      }
    }
  }
  & + div,
  & + section {
    margin-top: 4rem;
  }
  & + main {
    width: 100%;
    min-height: calc(100vh - 10rem);
    margin: 4rem auto 0;
    overflow: hidden;
  }
`;
