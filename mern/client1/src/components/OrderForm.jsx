// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function OrderForm() {
//   const location = useLocation();
//   const recipe = location.state?.recipe; // Access the recipe passed from FetchRecipeById page

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   const handlePlaceOrder = () => {
//     if (!name || !address || quantity < 1) {
//       alert("Please fill all fields correctly.");
//       return;
//     }

//     const orderDetails = {
//       recipeName: recipe?.title,
//       name,
//       address,
//       quantity,
//       Price,
//     };

//     console.log('Order Details:', orderDetails);
//     alert('Order placed successfully!');
//   };

//   return (
//     <div className="container text-center">
//       <h2>Order Form</h2>
//       <div>
//         <h4>{recipe?.title}</h4>
//         <img src={recipe?.imgurl} alt="Recipe" style={{ width: '200px', height: '200px' }} />
//       </div>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="form-control my-2"
//       />
//       <input
//         type="text"
//         placeholder="Your Address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         className="form-control my-2"
//       />
//       <input
//         type="number"
//         placeholder="Quantity"
//         value={quantity}
//         min="1"
//         onChange={(e) => setQuantity(e.target.value)}
//         className="form-control my-2"
//       />
//       <button onClick={handlePlaceOrder} className="btn btn-success my-3">
//         Place Order
//       </button>
//     </div>
//   );
// }

// export default OrderForm;
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function OrderForm() {
//   const location = useLocation();
//   const recipe = location.state?.recipe; // Access the recipe passed from FetchRecipeById page

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   const handlePlaceOrder = () => {
//     if (!name || !address || quantity < 1) {
//       alert("Please fill all fields correctly.");
//       return;
//     }

//     const orderDetails = {
//       recipeName: recipe?.title,
//       name,
//       address,
//       quantity,
//     };

//     console.log('Order Details:', orderDetails);
//     alert('Order placed successfully!');
//   };

//   return (
//     <div style={{
//       backgroundColor: '#f9f9f9',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       padding: '30px',
//       maxWidth: '500px',
//       margin: '50px auto',
//       textAlign: 'center'
//     }}>
//       <h2 style={{ color: '#333', fontSize: '2rem', marginBottom: '20px' }}>Order Form</h2>
//       <div>
//         <h4>{recipe?.title}</h4>
//         <img 
//           src={recipe?.imgurl} 
//           alt="Recipe" 
//           style={{ width: '200px', height: '200px', borderRadius: '10px', marginBottom: '20px' }} 
//         />
//       </div>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{
//           borderRadius: '5px',
//           border: '1px solid #ddd',
//           padding: '10px',
//           width: '100%',
//           marginBottom: '15px',
//           fontSize: '1rem'
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Your Address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         style={{
//           borderRadius: '5px',
//           border: '1px solid #ddd',
//           padding: '10px',
//           width: '100%',
//           marginBottom: '15px',
//           fontSize: '1rem'
//         }}
//       />
//       <input
//         type="number"
//         placeholder="Quantity"
//         value={quantity}
//         min="1"
//         onChange={(e) => setQuantity(e.target.value)}
//         style={{
//           borderRadius: '5px',
//           border: '1px solid #ddd',
//           padding: '10px',
//           width: '100%',
//           marginBottom: '15px',
//           fontSize: '1rem'
//         }}
//       />
//       <button 
//         onClick={handlePlaceOrder} 
//         style={{
//           backgroundColor: '#008cba',
//           color: 'white',
//           border: 'none',
//           padding: '12px 20px',
//           fontSize: '1.1rem',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           width: '100%',
//           transition: 'background-color 0.3s ease'
//         }}
//       >
//         Place Order
//       </button>
//     </div>
//   );
// }

// export default OrderForm;
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderForm() {
  const location = useLocation();
  const Navigate = useNavigate(); // useHistory for redirect after placing the order
  const recipe = location.state?.recipe; // Access the recipe passed from FetchRecipeById page

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handlePlaceOrder = () => {
    if (!name || !address || quantity < 1) {
      alert("Please fill all fields correctly.");
      return;
    }

    const orderDetails = {
      recipeName: recipe?.title,
      name,
      address,
      quantity,
      image: recipe?.imgurl, // Include image for order summary
    };

    // Save order details to localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(orders));

    console.log('Order Details:', orderDetails);
    alert('Order placed successfully!');

    // Optionally redirect to order summary page (your "My Order" page)
    history.push({
      pathname: '/my-order',
      state: { recipe: recipe }, // Pass the recipe data to the next page
    });
  };

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      maxWidth: '500px',
      margin: '50px auto',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#333', fontSize: '2rem', marginBottom: '20px' }}>Order Form</h2>
      <div>
        <h4>{recipe?.title}</h4>
        <img 
          src={recipe?.imgurl} 
          alt="Recipe" 
          style={{ width: '200px', height: '200px', borderRadius: '10px', marginBottom: '20px' }} 
        />
      </div>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          borderRadius: '5px',
          border: '1px solid #ddd',
          padding: '10px',
          width: '100%',
          marginBottom: '15px',
          fontSize: '1rem'
        }}
      />
      <input
        type="text"
        placeholder="Your Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          borderRadius: '5px',
          border: '1px solid #ddd',
          padding: '10px',
          width: '100%',
          marginBottom: '15px',
          fontSize: '1rem'
        }}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
        style={{
          borderRadius: '5px',
          border: '1px solid #ddd',
          padding: '10px',
          width: '100%',
          marginBottom: '15px',
          fontSize: '1rem'
        }}
      />
      <button 
        onClick={handlePlaceOrder} 
        style={{
          backgroundColor: '#008cba',
          color: 'white',
          border: 'none',
          padding: '12px 20px',
          fontSize: '1.1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          transition: 'background-color 0.3s ease'
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderForm;

