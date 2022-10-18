import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import memberList from '../data/memberList.json';
import accountList from '../data/accountList.json';
import AccountItem from '../components/AccountItem';

export default function AccountList() {
  const [accountTarget, setAccountTarget] = useState(accountList);
  const [totalPrice, setTotalPrice] = useState('0');
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
  const totalPriceCalculation = () => {
    let returnPrice = 0;
    accountTarget.forEach((item) => (returnPrice += Number(item.calculation)));
    setTotalPrice(addComa(returnPrice));
  };

  useEffect(() => {
    totalPriceCalculation();
  }, []);

  return (
    <>
      <SectionBox>
        <div className="total-price">
          <strong>{totalPrice}</strong>
          <p>
            {memberList &&
              memberList.map((item, idx) => {
                return (
                  <span key={idx} style={{ backgroundImage: `url(${item.imgUrl})` }}>
                    {item.userName}
                  </span>
                );
              })}
          </p>
        </div>
      </SectionBox>
      <SectionBox>
        <ul>
          {/* dateTime 값으로 배열값 sort 필요 */}
          {accountTarget &&
            accountTarget.map((item, idx) => {
              return (
                <li key={idx}>
                  <AccountItem
                    dateTime={item.dateTime}
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
    padding: 5rem 0 7rem;
    background-color: #ffa5ac;
    text-align: center;
    strong {
      display: inline-block;
      padding-bottom: 1rem;
      font-weight: bold;
      font-size: 4rem;
      color: #111;
      transition: 0.3s;
      &:after {
        content: '원';
      }
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
    span {
      display: inline-block;
      width: 3.5rem;
      height: 3.5rem;
      margin-right: -1rem;
      background-size: 100% auto;
      border-radius: 100%;
      text-indent: -999rem;
      transition: 0.2s;
      opacity: 1;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
