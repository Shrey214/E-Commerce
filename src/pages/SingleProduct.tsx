import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import ColorCircle from "../components/ColorCircle";

const SingleProduct = () => {
  const { id } = useParams();

  const { fetchSingleProduct, singleProduct } = useContext(ProductContext);
  useEffect(() => {
    const url = `https://api.pujakaitem.com/api/products/${id}`;
    fetchSingleProduct(url);
  }, [id]);
  return (
    <div className="w-11/12 h-full p-6 mx-auto flex justify-around flex-col md:flex-row">
      <div className="h-full flex w-full justify-center items-center space-x-6 flex-col md:flex-row md:w-1/2">
        <div className="flex flex-row w-fit overflow-hidden gap-x-4 gap-y-2 md:w-1/3 md:flex-col md:gap-y-4">
          {singleProduct?.image?.map((img, idx) => {
            return (
              <img
                key={idx}
                src={img.url}
                alt="single product"
                className="w-32 md:w-44  h-full object-cover rounded-md"
              />
            );
          })}
        </div>
        <div className="flex items-center mt-10    justify-around w-full md:w-1/2">
          <img
            src={singleProduct?.image[0]?.url}
            alt=""
            className="rounded-md w-32 md:w-64"
          />
        </div>
      </div>

      <div className="mt-4 w-full justify-center md:w-1/2 flex flex-col py-3 px-4 gap-y-4">
        <h2 className="capitalize text-3xl font-medium">
          {singleProduct.name}
        </h2>
        <p className="text-slate-400 font-medium">
          ({singleProduct.reviews} customer reviews)
        </p>
        <p className="font-medium text-base line-through">
          MRP : ₹{singleProduct.price.toString().substring(0, 5)}.00
        </p>
        <p className="font-medium text-violet-800">
          Deal of the Day :₹ {singleProduct.price - 570000}.00
        </p>
        <p className="text-justify text-slate-500 font-normal ">
          {singleProduct.description}
        </p>
        <hr />
        <p className="text-slate-500 font-medium">
          Available : <span className="text-black">In Stock</span>
        </p>
        <p className="text-slate-500 font-medium">
          ID : <span className="text-black">{singleProduct.id}</span>
        </p>
        <p className="text-slate-500 font-medium">
          Brand : <span className="text-black">{singleProduct.company}</span>
        </p>
        <hr className="bg-black h-1" />
        <div className="flex space-x-2 items-center">
          <p>Colors :</p>
          <div className="flex space-x-4">
            {singleProduct.colors.map((color, idx) => {
              return <ColorCircle color={color} key={idx} />;
            })}
          </div>
        </div>
        <button className=" w-[50%] md:w-[30%] px-4 py-2 bg-indigo-500  text-white font-bold rounded-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
