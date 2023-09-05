import {
  faClose,
  faMinus,
  faPlus,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import useBlogStore from "./zustand/Store";

const Cart = () => {
  const {cart, setPreview, preview} = useBlogStore()
  const [count, setCount] = useState(1);
 let reversedCart =[]
  for(let i = cart.length -1 ; i>=0; i--){
    const valueAtIndex = cart[i]
    reversedCart.push(valueAtIndex)
  }
 
  const navigateTo = useNavigate();
  const subTotal = reversedCart.reduce((acc, item) => {
    return (parseInt(acc) + parseInt(item.price)) * item.qty;
  }, 0);
console.log(cart)
  return (
    <div className="w-full flex flex-col">
      {cart.length > 0 ? (
        <>
          <h1 className="w-full mt-5 px-4 font-medium tracking-widest text-2xl font-serif">
            CART
          </h1>
          <div className="flex flex-col gap-y-4 mt-6 ">
            {reversedCart.map((item, index) => (
              <div key={index} className="w-full flex flex-col px-4 ">
                <div key={index} className="w-full flex flex-row gap-x-5">
                  <img
                    onClick={() =>{
                      setPreview(cart.find((prev) => prev.id === item.id))
                      console.log(preview)
                        navigateTo(`/category/${item.category}/${item.id}`)
                    }
                    }
                    src={item.image[0]}
                    alt={` ${item.name} image`}
                    className=" w-32 h-40 object-cover border border-[#a8715c] bg-[#e7dcd7] p-1"
                  />
                  <div className="w-full flex flex-col gap-y-2">
                    <h2
                      onClick={() =>
                        navigateTo(`/category/${item.category}/${item.id}`)
                      }
                      className="font-semibold text-lg uppercase tracking-wider"
                    >
                      {item.title}
                    </h2>
                    <p className="text-slate-500 text-[14px]">{item.desc}</p>
                    <div className="flex flex-row gap-x-3 text-slate-500">
                      <button
                        disabled={item.qty === 1}
                        onClick={() => {
                          setCount((cart[index].qty = item.qty - 1));
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <p className="text-black">{item.qty}</p>
                      <button
                        onClick={() => {
                          setCount((cart[index].qty = item.qty + 1));
                          // setCart(cart);
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <p className="text-[#a8715c]">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4">
            <div className="w-full mt-20  flex flex-row justify-between items-center border-t border-slate-300 text-lg font-medium ">
              <h2 className="tracking-wider mt-3">SUB TOTAL</h2>
              <p className="text-[#a8715c] tracking-wider"> ${subTotal}</p>
            </div>
            <p className="mt-2 leading-7 ">
              shipping charges, taxes and discount codes are calculated at the
              time of accounting.
            </p>
          </div>
          <button className="w-full my-10 bg-black text-center text-lg flex flex-row gap-x-4 justify-center items-center py-2 text-white">
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>BUY NOW</span>
          </button>
        </>
      ) : (
        <div className="w-full absolute top-0 bottom-0 bg-white h-screen flex flex-col justify-between">
          <div>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => navigateTo(-1)}
              className="text-3xl text-slate-500 px-4 py-2"
            />
          </div>
          <p className="w-full text-center text-lg">
            You have no items in your shopping Bag
          </p>
          <button
            onClick={() => navigateTo("/")}
            className="w-full mb bg-black text-center text-lg flex flex-row gap-x-4 justify-center items-center py-2 text-white"
          >
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>CONTINUE SHOPPING</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
