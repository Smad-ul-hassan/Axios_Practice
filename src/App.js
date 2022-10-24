import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Register from "./components/Register";
import UserData from "./components/UserData";
import Login from "./components/Login";
function App() {
  const [Data, setData] = useState([]);
  
  // useEffect(() => {
  //   axios
  //     .get("https://forkify-api.herokuapp.com/api/search?q=pizza")
  //     .then((res) => {
  //       setData(res.data["recipes"]);
  //       console.log(res.data["recipes"]);
  //     });
  // }, []);
  return (
    <div>
      <Register />
      <UserData />
      <Login />
    {/* <div className="text-[40px] font-extrabold  font-serif text-center">Forkify Pizza Api Product List</div>
    <div className="grid grid-cols-3 ml-20">  
      {Data.map((item, index) => {
        return (
          <div class="bg-white" key={item.recipe_id}>
            <div class=" max-w-2xl   py-5 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 max-w-[280px] overflow-auto">
                {item.title}
              </h2>
              <div class="mt-6 grid grid-cols-1  gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div class="group relative">
                  <div class="w-[300px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={item.image_url}
                      alt="Front of men&#039;s Basic Tee in black."
                      class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div class=" flex justify-between w-[300px] items-center mt-2" >
                    <div>
                      <p class=" text-sm text-gray-500">{item.publisher}</p>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">
                        {item.social_rank}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div> */}
   </div>
  );
}
export default App;
