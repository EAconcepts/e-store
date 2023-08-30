import {
  faMinus,
  faPlus,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([
    {
      id: uuidv4(),
      name: "Lameri",
      desc: "Recycle Boucle knit Cardigan Pink",
      price: "$120",
      image: "https://m.media-amazon.com/images/I/61RUMc7+vSL._AC_UY1100_.jpg",
      qty: 1,
    },
    {
      id: uuidv4(),
      name: "5252 Bag",
      desc: "2021 Signature Bag",
      price: "$120",
      image:
        "https://www.stylecraze.com/wp-content/uploads/2018/01/50-Fashion-Tips-Every-Girl-Should-Know.jpg",
      qty: 1,
    },
    {
      id: uuidv4(),
      name: "Croc Top",
      desc: "2021 Signature Top",
      price: "$120",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnpgtQ1aXqIbAQJF0OAFjhkvlIFVidfTgpQ&usqp=CAU",
      qty: 1,
    },
    {
      id: uuidv4(),
      name: "Fashion Dress",
      desc: "2021 Fashion Modeling dress",
      price: "$120",
      image:
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/1734902/1.jpg?7883",
      qty: 1,
    },
  ]);
  const subTotal = cart.reduce((acc, item) => {
    return (acc + parseInt(item.price.slice(1)) * item.qty);
  }, 0);
  //   const handleAddQty=(id)=>{
  //     setCart((prevVals)=>{[...prevVals, ]})
  //   }
 
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col px-4">
        <div className="w-full mt-10 flex flex-col gap-y-4 px-4">
          <h1 className="font-medium tracking-widest text-2xl font-serif">
            CART
          </h1>
          {cart &&
            cart.map((item, index) => (
              <div key={index} className="w-full flex flex-row gap-x-5">
                <img
                  src={item.image}
                  alt={` ${item.name} image`}
                  className=" w-32 h-40 object-cover border border-[#a8715c] bg-[#e7dcd7] p-1"
                />
                <div className="w-full flex flex-col gap-y-2">
                  <h2 className="font-semibold text-lg uppercase tracking-wider">
                    {item.name}
                  </h2>
                  <p className="text-slate-500 text-[14px]">{item.desc}</p>
                  <div className="flex flex-row gap-x-3 text-slate-500">
                    <button 
                    disabled={item.qty ===1} 
                    onClick={() => {
                        setCount(cart[index].qty = item.qty -1)
                    }}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <p className="text-black">{item.qty}</p>
                    <button
                      onClick={() => {
                          setCount(  cart[index].qty = item.qty + 1)
                        setCart(cart)
                      }
                    }
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <p className="text-[#a8715c]">{item.price}</p>
                </div>
              </div>
            ))}
        </div>
        {cart && (
          <>
            <div className="w-full mt-20 flex flex-row justify-between items-center border-t border-slate-300 text-lg font-medium ">
              <h2 className="tracking-wider mt-3">SUB TOTAL</h2>
              <p className="text-[#a8715c] tracking-wider"> ${subTotal}</p>
            </div>
            <p className="mt-2 leading-7 ">
              shipping charges, taxes and discount codes are calculated at the
              time of accounting.
            </p>
          </>
        )}
      </div>
      <button className="w-full my-10 bg-black text-center text-lg flex flex-row gap-x-4 justify-center items-center py-2 text-white">
        <FontAwesomeIcon icon={faShoppingBag} />
        <span>BUY NOW</span>
      </button>
    </div>
  );
};

export default Cart;
