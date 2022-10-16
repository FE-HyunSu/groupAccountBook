import Image from 'next/image';
import memberList from '../data/memberList.json';
import accountList from '../data/accountList.json';

export default function Home() {
  return (
    <>
      <ul>
        {accountList &&
          accountList.map((item, idx) => {
            return <li key={idx}>{item.calculation}</li>;
          })}
      </ul>
    </>
  );
}
