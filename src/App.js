import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { Name: "laptop", price: "145000" },
    { Name: "phone", price: "140000" },
    { Name: "watch", price: "45000" },
    { Name: "pc", price: "145000" }
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.Name} price={product.price}></Product>)
      }
      <h2>hello</h2>
      <Product name="laptop" price="10000"></Product>
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
