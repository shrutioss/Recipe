// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function MyOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Get orders from localStorage
//     const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//     setOrders(savedOrders);
//   }, []);

//   return (
//     <div className="container text-center my-5">
//       <h2>My Orders</h2>
      
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <div className="row justify-content-center">
//           {orders.map((order, index) => (
//             <div key={index} className="card my-3 p-3" style={{ width: '18rem' }}>
//               <h5 className="card-title">{order.recipeName}</h5>
//               <p><strong>Name:</strong> {order.name}</p>
//               <p><strong>Address:</strong> {order.address}</p>
//               <p><strong>Quantity:</strong> {order.quantity}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
//     </div>
//   );
// }

// export default MyOrders;
import React, { useEffect, useState } from 'react';

function MyOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container text-center">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <h4>No orders placed yet.</h4>
      ) : (
        <div className="row">
          {orders.map((order, index) => (
            <div className="col-md-4 my-3" key={index}>
              <div className="card p-3 shadow" style={{ borderRadius: '10px' }}>
                <img 
                  src={order.imgurl} 
                  alt={order.recipeName} 
                  style={{ width: '100%', height: '200px', borderRadius: '10px' }} 
                />
                <h4 className="mt-3">{order.recipeName}</h4>
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrder;
