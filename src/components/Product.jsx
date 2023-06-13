import { useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";

export default function Product({ name, description }) {
  const [isBought, setIsBought] = useState(false);

  function handleBuy() {
    setIsBought(!isBought);
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={handleBuy}>
        {isBought ? "Batal beli" : <BsCartPlusFill size={24} />}
      </button>
    </div>
  );
}
