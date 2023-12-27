import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import useBlogStore from "../../components/zustand/Store";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faPlus,
  faRepeat,
  faTag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductDropDown = ({ product, content, policyTitle }) => {
  const [isOpen, setIsOPen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div className="mt-4 w-full flex flex-col px-6">
        <button
          onClick={() => setIsOPen(!isOpen)}
          className="w-full flex flex-row justify-between"
        >
          <>
            {policyTitle}
            <FontAwesomeIcon
              icon={faGreaterThan}
              rotation={isOpen ? 90 : 0}
              className=""
            />
          </>
        </button>
        {isOpen && <div className="ml-6">{content}</div>}
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { name } = useParams();
  const { allArray, addToBasket, preview, cart } = useBlogStore();
  const [activeSize, setActiveSize] = useState("s");
  const [activeColor, setActiveColor] = useState("blue");
  // const product = allArray[name].find((prod) => prod.id === productId);
  const product = preview;
  let dateFrom = new Date(Date.now());
  dateFrom.setDate(dateFrom.getDate() + 2);
  let dateTo = new Date();
  dateTo.setDate(dateTo.getDate() + 5);
  const notify = (fn) => fn;
  const shipContent = (
    <>
      <p>Estimated to be delivered</p>
      <p>
        {dateFrom.toLocaleDateString()} - {dateTo.toLocaleDateString()}
      </p>
    </>
  );
  const codContent = Object.values(product).length > 0 && (
    <>
      <p>{product.policy && product.policy.cod}</p>
    </>
  );
  const shipTitle = Object.values(product).length > 0 && (
    <div className="flex flex-row gap-x-2 items-center font-medium">
      <FontAwesomeIcon icon={faTruck} className="" />
      {product.shipping.status === "free" ? (
        <span>Free Flat Rate Shipping</span>
      ) : (
        <span>Shipping Rate: $ {product.shipping.price}</span>
      )}
    </div>
  );
  const codTitle = Object.values(product).length > 0 && (
    <div className="flex flex-row gap-x-2 items-center font-medium">
      <FontAwesomeIcon icon={faTag} className="" />
      <span>COD Policy</span>
    </div>
  );
  const returnTitle = Object.values(product).length > 0 && (
    <div className="flex flex-row gap-x-2 items-center font-medium">
      <FontAwesomeIcon icon={faRepeat} className="" />
      <span>Return Policy</span>
    </div>
  );
  const returnContent = Object.values(product).length > 0 && (
    <>
      <p>{product.policy.return}</p>
    </>
  );
  const navigateTo = useNavigate();
  const handleAddToBasket = () => {
    let cartedBefore = cart?.find((prod) => prod.id === product.id);
    console.log(cartedBefore);
    if (cartedBefore) {
      notify(toast.warning("Item already exists!"));
    } else {
      let productDetails = product;
      addToBasket(productDetails);
      notify(toast.success("Added successfully"));
      setTimeout(() => {
        navigateTo("/cart");
      }, 2000);
    }
  };
  // let cardArray = allArray.filter()
  // console.log(allArray.length)
  // console.log(product)
  let compare = [].concat(...allArray);
  console.log(compare);

  return (
    <div className="w-full mt-6 ">
      <ToastContainer />
      {Object.values(product).length > 0 ? (
        <>
          <div className="w-full flex flex-col px-2">
            <Swiper
              className=" w-full h-full"
              spaceBetween={50}
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              {product &&
                product.image.map((img, index) => (
                  <SwiperSlide key={index}>
                    <a href={img} target="_blank">
                      <img
                        src={img}
                        alt={`${product.title} image`}
                        className="w-full h-72 md:h-[450px] object-cover object-top"
                      />
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex flex-col gap-y-1 capitalize">
              <h2 className="font-medium uppercase">{product.title}</h2>
              <p>{product.desc}</p>
              <p className="text-price-brown">${product.price}</p>
              <div className="w-full flex flex-row gap-x-8 items-center mt-2 ">
                <div className="flex flex-row gap-x-2 items-center ">
                  <span>Color</span>

                  <button
                    onClick={() => {
                      setActiveColor("blue");
                    }}
                    className={`p-[2px] rounded-full ${
                      activeColor === "blue" && "border border-price-brown"
                    }`}
                  >
                    <div
                      className={`bg-[#171752e5] rounded-full h-5 w-5`}
                    ></div>
                  </button>
                  <button
                    onClick={() => {
                      setActiveColor("red");
                    }}
                    className={`p-[2px] rounded-full ${
                      activeColor === "red" && "border border-price-brown"
                    }`}
                  >
                    <div
                      className={`bg-[#ff00007c] rounded-full h-5 w-5`}
                    ></div>
                  </button>
                  <button
                    onClick={() => {
                      setActiveColor("yellow");
                    }}
                    className={`p-[2px] rounded-full ${
                      activeColor === "yellow" && "border border-price-brown"
                    }`}
                  >
                    <div
                      className={`bg-[#d6d62280] rounded-full h-5 w-5`}
                    ></div>
                  </button>
                </div>
                <div className="flex flex-row gap-x-2 items-center ">
                  <span>Size</span>
                  <button
                    onClick={() => {
                      setActiveSize("s");
                    }}
                    className={`${
                      activeSize === "s" ? "bg-slate-900 text-white" : "border"
                    }  rounded-full h-7 w-7 text-center`}
                  >
                    S
                  </button>
                  <button
                    onClick={() => {
                      setActiveSize("m");
                    }}
                    className={`${
                      activeSize === "m" ? "bg-slate-900 text-white" : "border"
                    }  rounded-full h-7 w-7 text-center`}
                  >
                    M
                  </button>
                  <button
                    onClick={() => {
                      setActiveSize("l");
                    }}
                    className={`${
                      activeSize === "l" ? "bg-slate-900 text-white" : "border"
                    }  rounded-full h-7 w-7 text-center`}
                  >
                    L
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleAddToBasket}
            className="w-full mt-6 flex flex-row justify-between items-center bg-black text-white px-4 py-2"
          >
            <div className="flex flex-row items-center">
              <FontAwesomeIcon icon={faPlus} className="text-lg" />
              <span className="uppercase ml-2">ADD TO BASKET</span>
            </div>
            <div>
              {!product.liked ? (
                <i className="far fa-heart text-xl mr-3 px-2"></i>
              ) : (
                <i className="fa fa-heart text-lg mr-3 px-2"></i>
              )}
            </div>
          </button>
          <div className="mt-8 w-full flex flex-col px-4 gap-y-8">
            {product.otherInfo.map((info, index) => (
              <div key={index} className="flex flex-col w-full">
                <h2 className="font-medium text-black uppercase tracking-wider">
                  {info.title}
                </h2>
                <p>{info.desc}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col mt-6 px-4 gap-y-2 ">
            {product.caution.map((value, index) => (
              <li key={index} className="">
                {value}
              </li>
            ))}
          </div>
          <ProductDropDown
            product={product}
            content={shipContent}
            policyTitle={shipTitle}
          />
          <ProductDropDown
            product={product}
            content={codContent}
            policyTitle={codTitle}
          />
          <ProductDropDown
            product={product}
            content={returnContent}
            policyTitle={returnTitle}
          />
        </>
      ) : (
        <p className="font-semibold text-lg text-center my-10">Something Went wrong!!</p>
      )}
      <div>{/* <Card cardArray={cardArray}/> */}</div>
    </div>
  );
};

export default ProductDetail;
