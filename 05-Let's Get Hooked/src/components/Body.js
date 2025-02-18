import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";

const Body = () => {
 
// local state variable
const arr=useState(reslist);
 const [listOfRestaurants,setListOfRestaurants]=arr;

// Normal JS varaiable
  // let listOfRestaurant=[
  //   { 
  //     id: "67890",
  //     name: "KFC",
  //     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/87a05c2f-b366-4efc-99ec-9938e0510568_686427.JPG",
  //     cuisines: ["Fried Chicken", "Fast Food"],
  //     avgRating: "3.9",
  //     deliveryTime: 25 ,
  //   },
  //   {
  //     id: "12345",
  //     name: "Ibaco",
  //     cloudinaryImageId:"kyllhajjzwkzagnskpx6",
  //     cuisines: ["Pizza", "Italian"],
  //     avgRating: "4.5",
  //     deliveryTime: 30,
  //   },
  //   {
  //     id: "631211",
  //     name: "Domino's Pizza",
  //     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/ccf02c59-edba-46b0-aff9-f3deacba54dd_631211.JPG",
  //     cuisines: [
  //       "Pizzas",
  //       "Italian",
  //       "Pastas",
  //       "Desserts"
  //     ],
  //     avgRating: "4.1",
  //     deliveryTime: 23,
  //   },
  // ];

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
              const filteredList=listOfRestaurants.filter((res)=>res.avgRating>4);
              setListOfRestaurants(filteredList);
           }

          }>Top Rated Restaurants </button>
        </div>

        <div className="res-container">

         {
           listOfRestaurants.map((res)=>
             ( <RestaurantCard key={res.id} resData={res}/>))
          }


        </div>
      </div>
    );
  };

  export default Body;