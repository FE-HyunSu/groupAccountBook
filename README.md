## 💵 리액트 스터디 모임 정산 페이지 (ver1)
- 해당 프로젝트는 ver2로 migraition 되었습니다.
- ver2 : https://github.com/FE-HyunSu/accountbook.v2

<br/>

## 📽 지난기록

### 🏂 URL 
- page : https://illustrious-arithmetic-f0422e.netlify.app

### 🪬 내용
- 정산내역 기록용으로 생성.
- 카뱅 UI를 참고함.
- `React` `NextJS` `Netlify` `firebase` `firestore`

### 🧾 데이터 관리
- Firebase Firestore
- 멤버 정보. { `id` : 고유값, `userName` : 이름, `imgUrl` : 프로필 이미지 }
- 입출금 내역. { `targetId` : 멤버id, `dateTime` : 날짜, `description` : 내용, `calculation` : 금액 }

