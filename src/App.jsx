import Fruits from "./components/Fruits";
import Header from "./components/Header";
import Login from "./components/Login";
import MovingDot from "./components/MovingDot";
import Register from "./components/Register";
import Register2 from "./components/Register2";
// import Product from "./components/Product";

// const products = [
//   {
//     id: 1,
//     name: "Mukena Rabbani",
//     description: "Mukena pilihan",
//     price: 150000,
//   },
//   {
//     id: 2,
//     name: "Sarung Mangga",
//     description: "Sarung pilihan",
//     price: 50000,
//   },
//   {
//     id: 3,
//     name: "Peci Wadimor",
//     description: "Peci pilihan",
//     price: 40000,
//   },
// ];

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Fruits />
        {/* <MovingDot /> */}
        {/* <Login /> */}
        {/* <Register2 /> */}
        {/* {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))} */}
      </main>
      <form></form>
      <footer>&copy; 2023 Bima Sakti</footer>
    </>
  );
}
