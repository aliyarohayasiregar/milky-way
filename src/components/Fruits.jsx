// const fruits = ["Apple", "Banana", "Mango"];

import { useState } from "react";

export default function Fruits() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
  const [newFruit, setNewFruit] = useState("");
  const [index, setIndex] = useState(0);
  // menghasilkan/membuat array baru berisi kumpulan <div> dari array berisi kumpulan string
  //   const fruitDifes = fruits.map((fruit) => <div key={fruit}>{fruit}</div>);

  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* {fruitDifes} */}
        {fruits.map((fruit, i) => (
          <div key={i} className="card">
            {fruit}
          </div>
        ))}
      </div>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <button onClick={() => setFruits(fruits.slice(1))}>Hapus depan</button>
        <button
          onClick={() => {
            //   const newFruits = fruits.slice(0, -1);
            //   setFruits(newFruits);
            setFruits(fruits.slice(0, -1));
          }}
        >
          Hapus belakang
        </button>
      </div>
      <form className="card">
        <label>
          Indeks:
          <input
            type="number"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFruits(fruits.filter((fruit, i) => i != index));
          }}
        >
          Hapus
        </button>
      </form>
      <form className="card">
        <label>
          Nama buah:
          <input
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFruits([newFruit, ...fruits]);
          }}
        >
          Tambah depan
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFruits([...fruits, newFruit]);
          }}
        >
          Tambah belakang
        </button>
      </form>
    </main>
  );
}
