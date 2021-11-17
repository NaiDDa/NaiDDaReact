import { useState } from "react";

const VendingMachine = () => {
  const [coin, setcoin] = useState(0);
  const coins = [100, 500, 1000, 5000, 10000];

  const items = [
    { id: 1, name: "물", price: 1000 },
    { id: 2, name: "콜라", price: 1500 },
    { id: 3, name: "사이다", price: 2000 },
    { id: 4, name: "커피", price: 2000 },
  ];

  const charge = (e) => {
    setcoin(coin + e);
  };

  const change = () => setcoin(0);

  const buy = (list) => {
    setcoin(coin - list.price);
  };
  const zero = () => {
    if (coin === 0) {
      coin = 0;
    }
  };

  return (
    <>
      <div>
        {coins.map((e) => (
          <button onClick={() => charge(e)} key={e}>
            {e}원
          </button>
        ))}
      </div>
      <p>현재 가격 : {coin}원</p>

      {items.map((list) => (
        <li key={list.id} onClick={() => buy(list)}>
          {list.name} : {list.price}원
        </li>
      ))}

      <button onClick={change}>거스름돈 반환</button>
    </>
  );
};
export default VendingMachine;
