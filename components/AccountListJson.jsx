import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import accountListData from '../data/accountList.json';
import userListData from '../data/memberList.json';
import AccountItem from './AccountItem';

export default function AccountList_json() {
  const [userList, setUserList] = useState([userListData]);
  const [accountTarget, setAccountTarget] = useState(accountListData);
  const [totalPrice, setTotalPrice] = useState('0');
  const [nbbang, setNbbang] = useState('0');

  // 금액 단위로 숫자를 콤마 찍어서 return.
  const addComa = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  };
  // userId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (userId) => {
    let returnName = '(이름없음)';
    userList.forEach((item) => {
      if (item.userId === userId) returnName = item.userName;
    });
    return returnName.length > 2
      ? returnName.replace(/(?<=.{2})./gi, '*')
      : returnName.replace(/(?<=.{1})./gi, '*');
  };

  // total 잔액을 표기하는 함수입니다.
  const totalPriceCalculation = () => {
    let returnPrice = 0;
    accountTarget.forEach((item) => (returnPrice += Number(item.calculation)));
    setTotalPrice(addComa(returnPrice));
    setNbbang(addComa(returnPrice / userList.length));
  };

  useEffect(() => {
    setUserList(userListData);
    totalPriceCalculation();
  }, [userList]);

  return (
    <>
      <SectionBox>
        <div className="total-price">
          <strong>{totalPrice}</strong>
          <em>1/n 정산 :{nbbang}</em>
          <p>
            {userList &&
              userList.map((item, idx) => {
                return (
                  <span key={idx} style={{ backgroundImage: `url(${item.userImg})` }}>
                    {item.userName}
                  </span>
                );
              })}
          </p>
        </div>
      </SectionBox>
      <SectionBox>
        <ul>
          {accountTarget &&
            accountTarget
              .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
              .map((item, idx) => {
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
    em {
      display: block;
      padding-bottom: 1rem;
      font-size: 1.4rem;
      text-align: center;
      transition: 0.3s;
      opacity: 0.4;
      &:before {
        content: '(';
      }
      &:after {
        content: '원)';
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
