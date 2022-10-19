import styled from 'styled-components';

export default function AccountItem({ dateTime, accountName, price, description }) {
  const addComa = (number) => {
    return (
      (number > 0 ? `+` : ``) + number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    );
  };
  const shortDate = (date) => {
    return date.split('-')[1] + '.' + date.split('-')[2];
  };
  return (
    <>
      <AccountCard>
        <dt>
          <span>{shortDate(dateTime)}</span>
          <strong>{Number(price) > 0 ? accountName : description}</strong>
        </dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>{addComa(price)}</dd>
      </AccountCard>
    </>
  );
}

const AccountCard = styled.dl`
  display: flex;
  position: relative;
  width: 100%;
  border-top: 1px solid #f4f4f4;
  font-size: 1.6rem;
  transition: 0.2s;
  box-sizing: border-box;
  &:hover {
    padding: 0 4rem;
    background-color: #f4f4f4;
    transform: scale(1.05);
  }
  dt {
    display: flex;
    padding: 2rem;
    strong {
      display: inline-block;
      font-weight: 300;
    }
    span {
      display: inline-block;
      padding-right: 1.5rem;
      font-weight: 300;
      font-size: 1.2rem;
      color: #777;
    }
  }
  dd {
    flex: 1 1;
    padding: 2rem;
    font-weight: 500;
    text-align: right;
    &.plus {
      color: #0a7ec6;
    }
    &.minus {
      color: #000;
    }
  }
`;
