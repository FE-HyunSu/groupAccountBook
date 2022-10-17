import styled from 'styled-components';

export default function AccountItem({ accountName, price, description }) {
  const addComa = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <>
      <AccountCard>
        <dt>{Number(price) > 0 ? accountName : description}</dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>{addComa(price)}</dd>
      </AccountCard>
    </>
  );
}

const AccountCard = styled.dl`
  display: flex;
  position: relative;
  width: 100%;
  border-top: 1px solid #eee;
  font-size: 1.8rem;
  dt {
    padding: 1.5rem;
    font-weight: 300;
  }
  dd {
    padding: 1.5rem;
    font-weight: 300;
  }
`;
