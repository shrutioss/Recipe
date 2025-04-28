// import React,{useContext, useEffect, useState} from 'react'
// import { AppContext } from '../context/App_Context';
// import { Link , useLocation} from 'react-router-dom';



// function FetchRecipeById({ id }) {
//   const location = useLocation()
//   const { getRecipeById } = useContext(AppContext);
//   const [recipe, setrecipe] = useState("");
//   console.log(id)
//   useEffect(() => {
//     const fetchRecipe = async (id) => {
//       const result = await getRecipeById(id);
//       console.log("recipe by id", result);
//       setrecipe(result.data.recipe);
//     };

//     fetchRecipe(id);

//   }, [id]);

//   return (
    
//     <div className='text-center'>
//     <div className=" text-center " 
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column'
//         }}>
//         <div className="d-flex justify-content-center align-items-center p-3 ">
//           <img
//             src={recipe?.imgurl}
//             className="card-img-top"
//             alt="..."
//             style={{
//               width: "200px",
//               height: "200px",
//               borderRadius: '10px',
//               border: '2px solid yellow'
//             }} />
//          </div>
//         <h3>{recipe?.title}</h3>
//       </div>
//       {location.pathname !== '/saved' &&(
//         <>
//         <div className="container " style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '2rem'
//       }}>
//         <div className="left">
//           <h4>{recipe?.ing1} - {recipe?.qty1}</h4>
//           <h4>{recipe?.ing2} - {recipe?.qty2}</h4>
//           <h4>{recipe?.ing3} - {recipe?.qty3}</h4>
//           <h4>{recipe?.ing4} - {recipe?.qty4}</h4>
//         </div>
//         <div className="right" style={{ maxWidth: '500px' }}>{recipe?.ist}

//         </div>
//     </div>
//       <Link to={"/"} className='btn btn-warning my-5 '>Back to Home</Link>
      
//         </>
//       )}
     
     
      
//     </div>

//   );

// }

// export default FetchRecipeById;


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for React Router v6
import { AppContext } from '../context/App_Context';
import { Link, useLocation } from 'react-router-dom';

function FetchRecipeById({ id }) {
  const location = useLocation();
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState("");

  const navigate = useNavigate();  // For React Router v6

  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      console.log("recipe by id", result);
      setRecipe(result.data.recipe);
    };

    fetchRecipe(id);
  }, [id]);

  const handleOrderClick = () => {
    // Navigate to OrderForm page and pass recipe as state (using navigate instead of history.push)
    navigate('/orderform', { state: { recipe } });
  };

  return (
    <div className='text-center'>
      <div className="text-center" 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={recipe?.imgurl}
            className="card-img-top"
            alt="..."
            style={{
              width: "200px",
              height: "200px",
              borderRadius: '10px',
              border: '2px solid yellow'
            }}
          />
        </div>
        <h3>{recipe?.title}</h3>
      </div>

      <Link to={"/"} className='btn btn-warning my-5'>Back to Home</Link>

      {/* Order button */}
      <button 
        onClick={handleOrderClick} 
        className='btn btn-primary my-2'>
        Order
      </button>
    </div>
  );
}

export default FetchRecipeById;
