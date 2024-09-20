import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    /*
    If product has an id property, it will use that.
    If product doesn't have an id but has an _id property, it will use that.
    If product has neither id nor _id, it will default to 2.
    */
    navigate(`/product/${product?.id || product?._id || 2}`)
  }

  return (
    <div
      onClick={handleNavigate}
      className="productCard cursor-pointer flex flex-col items-center bg-white rounded-xl shadow-2xl shadow-gray-400 overflow-hidden w-[15rem] mx-3 my-3 hover:scale-105 transition duration-300"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full mt-4"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 mt-2">
        <h3 className="text-md font-bold text-gray-800">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
        <p className='text-sm mt-2 text-green-700'>{product?.price}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
