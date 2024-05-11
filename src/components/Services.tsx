import { GiCheckedShield } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="w-11/12 mx-auto px-8 py-4 flex gap-x-2 font-medium">
      <div className="flex justify-center items-center h-60 w-1/3 bg-slate-100 rounded-xl">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
            <TbTruckDelivery className="text-2xl text-violet-600" />
          </div>

          <p>Super Fast and Free Delivery</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-60  w-1/3 rounded-xl gap-y-2">
        <div className="h-[120px] flex items-center justify-center bg-slate-100 rounded-xl w-full ">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
              <GiCheckedShield className="text-2xl text-violet-600" />
            </div>
            <p>Non-contact Shipping</p>
          </div>
        </div>

        <div className="h-[120px]   flex items-center justify-center bg-slate-100 rounded-xl w-full">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
              <FaHandHoldingUsd className="text-2xl text-violet-600" />
            </div>
            <p>Money-back Guaranteed</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-60   w-1/3 bg-slate-100  rounded-xl">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
            <RiSecurePaymentFill className="text-2xl text-violet-600" />
          </div>
          <p>Super Secure Payment System</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
