import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const FeatureProduct = () => {
  const { featureProducts, fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex justify-center">
      {featureProducts.length === 0 ? (
        <div>Loading ...</div>
      ) : (
        <div className="w-11/12 mx-auto">
          <p className="capitalize text-slate-400 font-bold text-lg">
            Check now!!
          </p>
          <p className="text-4xl font-bold mb-4">Our Feature Products</p>
          <div className="flex flex-col items-center justify-center h-ful gap-x-8 md:flex-row">
            {featureProducts.map((product) => (
              <div key={product.id} className="object-cover">
                <NavLink to={`/singleProduct/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="rounded-md h-2/3 w-full"
                  />
                </NavLink>
                <div className="flex w-full justify-between px-2 py-4">
                  <p className="capitalize text-slate-400 font-bold">
                    {product.name}
                  </p>
                  <p className="font-bold text-violet-600">
                    ₹ {product.price.toString().substring(0, 5)}.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureProduct;
