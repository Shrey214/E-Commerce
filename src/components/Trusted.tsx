import { HiMiniCube } from "react-icons/hi2";
import { MdRotate90DegreesCw } from "react-icons/md";
import { HiMiniCubeTransparent } from "react-icons/hi2";
import { FaChartColumn } from "react-icons/fa6";

const Trusted = () => {
  return (
    <div className="w-full  bg-slate-100 my-10">
      <div className="w-11/12 h-full mx-auto flex flex-col items-center justify-center py-6">
        <p className="text-lg font-bold">Trusted By 1000+ Companies</p>
        <div className="flex flex-col items-center md:flex-row md:justify-between space-x-8 w-2/3 rounded-2xl mt-2">
          <div className="h-[80px]   flex items-center justify-center bg-slate-100 rounded-xl w-full">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center p-2 rounded-full bg-white text-slate-700 ">
                <HiMiniCube className="text-2xl text-violet-600" />
              </div>
              <p className="font-bold text-xl text-slate-600">ZEINA</p>
            </div>
          </div>
          <div className="h-[80px]   flex items-center justify-center bg-slate-100 rounded-xl w-full">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
                <MdRotate90DegreesCw className="text-2xl text-violet-600" />
              </div>
              <p></p>
            </div>
          </div>
          <div className="h-[80px]   flex items-center justify-center bg-slate-100 rounded-xl w-full">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
                <HiMiniCubeTransparent className="text-2xl text-violet-600" />
              </div>
              <p className="font-bold text-xl text-slate-600">LOGIC+</p>
            </div>
          </div>
          <div className="h-[80px]   flex items-center justify-center bg-slate-100 rounded-xl w-full">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center p-2 rounded-full bg-white text-black">
                <FaChartColumn className="text-2xl text-violet-600" />
              </div>
              <p className="font-bold text-xl text-slate-600">CHARTZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
