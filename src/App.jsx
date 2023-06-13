import Header from "./components/Header";
import Product from "./components/Product";

const products = [
  {
    id: 1,
    name: "Mukena Rabbani",
    description: "Mukena pilihan",
    price: 150000,
  },
  {
    id: 2,
    name: "Sarung Mangga",
    description: "Sarung pilihan",
    price: 50000,
  },
  {
    id: 3,
    name: "Peci Wadimor",
    description: "Peci pilihan",
    price: 40000,
  },
];

export default function App() {
  return (
    <>
      <Header />
      <main>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </main>
      <footer>&copy; 2023 Bima Sakti</footer>
    </>
  );
}
