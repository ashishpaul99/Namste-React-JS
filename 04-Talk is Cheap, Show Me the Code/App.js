import React from "react";
import ReactDOM from "react-dom/client";


// 1. Header --> Logo
// Nav items - Adding some links at the top corner of the header(home, about,cart).

//2. Body - body of the app
// -->Search bar → Search button
// ->Restaurant container → Restaurant Card→ Image of  food, title of food, star rating,cuisine- (chinese, south indian)
// delivery time

// Footer -
// -->Copyrights
// -->Links
// -->Address
// -->Contact information
const Header=()=>{
  return(
    <div className="header">
        <div className="Logo-container">
           <img className="logo" src="https://raw.githubusercontent.com/ashishpaul99/Namaste-React-JS/main/04-Talk%20is%20Cheap%2C%20Show%20Me%20the%20Code/pixelcut-export%20(1)%20(1).png"/>
        </div>
        <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Cart</li>
            </ul>
        </div>
    </div>
  )
};

// inline styling isnide JSX
// const stylingCard={
//   backgroundColor:"#f0f0f0"
// }



const RestaurantCard=(props)=>{
  const {resData}=props;

  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId}/>
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.deliveryTime} minutes</h4>
     
    </div>
  )
};

const reslist = [
  { 
    id: "67890",
    name: "KFC",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/87a05c2f-b366-4efc-99ec-9938e0510568_686427.JPG",
    cuisines: ["Fried Chicken", "Fast Food"],
    avgRating: "4.5",
    sla: { deliveryTime: 25 },
  },
  {
    id: "12345",
    name: "Ibaco",
    cloudinaryImageId:"kyllhajjzwkzagnskpx6",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.7",
    sla: { deliveryTime: 30 },
  },
  
  {
    id: "631211",
    name: "Domino's Pizza",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/ccf02c59-edba-46b0-aff9-f3deacba54dd_631211.JPG",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    avgRating: "4.2",
    sla: { deliveryTime: 23 },
  },
  {
    id: "508890",
    name: "IC Ice Creams",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/b6dfd4f6-80ac-4180-890b-d4ad70366d27_508890.JPG",
    cuisines: [
      "Ice Cream",
      "Desserts"
    ],
    avgRating: "4.6",
    sla: { deliveryTime: 26 },
  },
  {
    id: "266392",
    name: "The Thick Shake Factory",
    cloudinaryImageId: "vuv0vvek1jl99bvjveq0",
    cuisines: [
      "Beverages",
      "American"
    ],
    avgRating: "4.3",
    sla: { deliveryTime: 27 },
  }
];


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslist.map((restaurant,index) => (<RestaurantCard key={index} resData={restaurant} />))}
      </div>
    </div>
  );
};


const AppLayout=()=>{
  return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)




