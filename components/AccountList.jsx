import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AccountItem from './AccountItem';
import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function AccountList() {
  const dbInstanceUserList = collection(database, 'userList');
  const [memberList, setmemberList] = useState([]);
  const dbInstanceAccountList = collection(database, 'accountList');
  const [accountList, setAccountList] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0');
  const [nbbang, setNbbang] = useState('0');
  const getMemberList = async () => {
    await getDocs(dbInstanceUserList).then((data) => {
      const userList = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setmemberList(userList); // memberList 값에 업데이트.
      getAccountList(userList);
    });
  };

  const getAccountList = async (userList) => {
    await getDocs(dbInstanceAccountList).then((data) => {
      const accountList = data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      setAccountList(accountList); // accountList 값에 업데이트.
      totalPriceCalculation(userList, accountList);
    });
  };

  // 금액 단위로 숫자를 콤마 찍어서 return.
  const addComa = (number) => {
    const numberComa = number.toString().split('.');
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberComa.join('.');
  };

  // userId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (userId) => {
    let returnName = '(이름없음)';
    memberList.forEach((item) => {
      if (Number(item.id) === userId) returnName = item.userName;
    });

    return returnName;
  };

  // total 잔액을 표기하는 함수입니다.
  const totalPriceCalculation = (user, account) => {
    let returnPrice = 0;
    account.forEach((item) => (returnPrice += Number(item.calculation)));
    setTotalPrice(addComa(returnPrice));
    setNbbang(addComa(returnPrice / user.length));
  };

  useEffect(() => {
    getMemberList();
  }, []);

  return (
    <>
      <SectionBox>
        <div className="total-price">
          <strong>{totalPrice}</strong>
          <em>1/n 정산 :{nbbang}</em>
          <p>
            {memberList &&
              memberList.map((item, idx) => {
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
          {accountList &&
            accountList
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
