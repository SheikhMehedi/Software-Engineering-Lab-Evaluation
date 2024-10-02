import React, { useState } from 'react';
import './App.css';


function App() {
  // States to store the inputs
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [currentField, setCurrentField] = useState('name'); // to track which field is active

  // States for product selection and cost
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const productPrices = {
    "Product-1": 100,
    "Product-2": 300,
    "Product-3": 400,
  };

  // Function to handle button click for inputs
  const handleInput = (value) => {
    if (currentField === 'name') {
      // Allow only alphabets in the name field
      if (/^[A-Za-z]+$/.test(value)) {
        setName(name + value);
      }
    } else if (currentField === 'mobile') {
      // Allow only numbers in the mobile field
      if (/^[0-9]+$/.test(value)) {
        setMobile(mobile + value);
      }
    } else if (currentField === 'email') {
      // Allow only letters, numbers, @, and .
      if (/^[A-Za-z0-9@.]+$/.test(value)) {
        setEmail(email + value);
      }
    }
  };

  // Add a product to the selection
  const addProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  // Remove a product from the selection
  const removeProduct = (product) => {
    setSelectedProducts(selectedProducts.filter(p => p !== product));
  };

  // Calculate total cost
  const calculateCost = () => {
    const cost = selectedProducts.reduce((acc, product) => acc + productPrices[product], 0);
    setTotalCost(cost);
  };

  // Print details (name, email, cost)
  const handlePrint = () => {
    alert(`Name: ${name}\nEmail: ${email}\nCost: ${totalCost} Tk`);
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onFocus={() => setCurrentField('name')}
          readOnly
        />
      </div>

      <div>
        <label>Mobile: </label>
        <input
          type="text"
          value={mobile}
          onFocus={() => setCurrentField('mobile')}
          readOnly
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onFocus={() => setCurrentField('email')}
          readOnly
        />
      </div>

      {/* Buttons for numbers */}
      <div>
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => handleInput(num.toString())}>
            {num}
          </button>
        ))}
      </div>

      {/* Buttons for alphabets */}
      <div>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <button key={letter} onClick={() => handleInput(letter)}>
            {letter}
          </button>
        ))}
      </div>

      {/* Special characters */}
      <div>
        <button onClick={() => handleInput('@')}>@</button>
        <button onClick={() => handleInput('.')}>.</button>
      </div>

      {/* Product selection */}
      <div>
        <button onClick={() => addProduct('Product-1')}>Add Product-1 (100 Tk)</button>
        <button onClick={() => addProduct('Product-2')}>Add Product-2 (300 Tk)</button>
        <button onClick={() => addProduct('Product-3')}>Add Product-3 (400 Tk)</button>
        <br />
        <button onClick={() => removeProduct('Product-1')}>Remove Product-1</button>
        <button onClick={() => removeProduct('Product-2')}>Remove Product-2</button>
        <button onClick={() => removeProduct('Product-3')}>Remove Product-3</button>
      </div>

      {/* Calculate total cost */}
      <div>
        <button onClick={calculateCost}>Calculate</button>
        <h3>Total Cost: {totalCost} Tk</h3>
      </div>

      {/* Print button */}
      <div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
}

export default App;

