import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product?.id || product?._id || 2}`);
  };

  return (
    <div
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === "Enter" && handleNavigate()}
      className="
        group 
        cursor-pointer 
        bg-white/90 
        dark:bg-gray-900/80 
        rounded-3xl 
        shadow-xl 
        ring-1 
        ring-gray-200 
        dark:ring-gray-700 
        overflow-hidden 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:shadow-purple-500/30 
        hover:backdrop-blur-lg 
        w-[18rem] 
        mx-4 my-4
      "
    >
      <div className="relative h-[14rem] w-full overflow-hidden">
        <img
          className="
            object-cover 
            object-center 
            w-full 
            h-full 
            transition-transform 
            duration-500 
            ease-in-out 
            group-hover:scale-110
          "
          src={product?.image || product?.imageUrl}
          alt={product?.title}
          loading="lazy"
          draggable={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 w-full text-center">
        <h3 className="text-md font-bold text-gray-900 dark:text-gray-100 truncate">
          {product?.brand || product?.title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 truncate">
          {product?.title}
        </p>

        <p className="mt-3 text-xl font-extrabold text-green-600 dark:text-green-400">
          {product?.price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate();
          }}
          className="
            mt-4 
            w-full 
            py-2 
            bg-gradient-to-r 
            from-purple-600 
            to-pink-500 
            text-white 
            font-bold 
            rounded-full 
            shadow-lg 
            hover:shadow-pink-400/40 
            hover:brightness-110 
            transition 
            duration-300 
            focus:outline-none 
            focus:ring-2 
            focus:ring-purple-400 
            focus:ring-offset-2
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomeProductCard;
