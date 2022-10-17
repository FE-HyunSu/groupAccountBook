import styled from 'styled-components';
import memberList from '../data/memberList.json';
import accountList from '../data/accountList.json';
import AccountItem from '../components/AccountItem';

export default function AccountList() {
  const addComa = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };
  // userId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (userId) => {
    let returnName = '(이름없음)';
    memberList.forEach((item) => {
      if (item.id === userId) returnName = item.userName;
    });
    return returnName;
  };

  // total 잔액을 표기하는 함수입니다.
  const totalPrice = () => {
    let returnPrice = 0;
    accountList.forEach((item) => (returnPrice += Number(item.calculation)));
    return addComa(returnPrice);
  };
  return (
    <>
      <SectionBox>
        <div className="total-price">
          <strong>{totalPrice()}</strong>
        </div>
      </SectionBox>
      <SectionBox>
        <ul>
          {/* dateTime 값으로 배열값재정렬 필요 */}
          {accountList &&
            accountList.map((item, idx) => {
              return (
                <li key={idx}>
                  <AccountItem
                    accountName={returnUserName(item.targetId)}
                    price={item.calculation}
                    description={item.description}
                  />
                </li>
              );
            })}
        </ul>
      </SectionBox>
    </>
  );
}

const SectionBox = styled.section`
  display: block;
  position: relative;
  .total-price {
    strong {
      &:after {
        content: '원';
      }
    }
  }
`;
