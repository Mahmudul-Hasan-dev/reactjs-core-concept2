import logo from './logo.svg';
import './App.css';

function App() {
  // const products
  return (
    <div className="App">
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
