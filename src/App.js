import { useState } from "react";
function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div
      className={`transition-colors ease-in-out duration-1000 w-full h-screen flex items-center justify-center ${
        isLightMode ? "bg-white" : "bg-[#9DA5B5]"
      }`}
    >
      <div
        className={`transition-colors duration-500 ease-in-out toggler-shadow overflow-hidden z-10 relative w-[222px] h-[87px]  rounded-[120px] border-1  ${
          isLightMode ? "bg-[#3A8DCA]" : "bg-[#1B1D2A]"
        }`}
      >
        <div
          onClick={() => setIsLightMode(!isLightMode)}
          className={`z-30 absolute top-[7px] left-[8px] transition-all ease-in-out duration-700 w-[72px] h-[72px]  rounded-full sun-shadow cursor-pointer ${
            isLightMode
              ? "translate-x-0 bg-[#FED62E]"
              : "translate-x-[calc(200%-8px)] bg-[#C4C9D2]"
          }`}
        >
          <div
            className={`transition-opacity ease-in-out   moon-shadow w-[25px] h-[25px] absolute left-[12px] bottom-[12px] bg-[#9DA5B5] rounded-full ${
              isLightMode
                ? "opacity-0 duration-200"
                : "opacity-100  delay-300 duration-500"
            }`}
          ></div>
          <div
            className={`transition-opacity ease-in-out duration-500  moon-shadow w-[11px] h-[11px] absolute left-[26px] top-[14px] bg-[#9DA5B5] rounded-full ${
              isLightMode
                ? "opacity-0 duration-200"
                : "opacity-100 delay-300 duration-500"
            }`}
          ></div>
          <div
            className={`transition-opacity ease-in-out duration-500 moon-shadow w-[15px] h-[15px] absolute right-[10px] bottom-[20px] bg-[#9DA5B5] rounded-full ${
              isLightMode
                ? "opacity-0 duration-200"
                : "opacity-100 delay-300 duration-500"
            }`}
          ></div>
        </div>
        <div
          className={`w-[229px] z-20 h-[229px] transition-all ease-in-out duration-700 rounded-full bg-white/10 absolute left-0 top-1/2 transform -translate-y-1/2 ${
            isLightMode ? "-translate-x-1/4" : "translate-x-[27%]"
          }`}
        ></div>
        <div
          className={`w-[173px] z-20 h-[173px] transition-all ease-in-out duration-700 rounded-full bg-white/10 absolute left-0 top-1/2 transform  -translate-y-1/2
        ${isLightMode ? "-translate-x-[20%]" : "translate-x-[51%]"}`}
        ></div>
        <div
          className={`w-[123px] z-20 h-[123px] rounded-full transition-all ease-in-out duration-700 bg-white/10 absolute left-0 top-1/2 transform  -translate-y-1/2 ${
            isLightMode ? "-translate-x-[12%]" : "translate-x-[94%]"
          }`}
        ></div>

        <div
          className={`w-[64px] h-[64px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[-15px] ${
            isLightMode ? "top-[-20px]" : "top-[100%]"
          }`}
        ></div>
        <div
          className={`w-[49px] h-[49px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[-8px]  ${
            isLightMode ? "top-[-30px]" : "top-[100%]"
          }`}
        ></div>
        <div
          className={`w-[44px] h-[44px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[16px]  ${
            isLightMode ? "bottom-[0]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[49px] h-[49px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[39px]  ${
            isLightMode ? "bottom-[-27px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[42px] h-[42px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[62px]  ${
            isLightMode ? "bottom-[-12px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[36px] h-[36px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[98px]  ${
            isLightMode ? "bottom-[-14px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[46px] h-[46px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[126px]  ${
            isLightMode ? "bottom-[-22px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[46px] h-[46px] rounded-full transition-all ease-in-out duration-700 bg-gray-300 absolute right-[154px]  ${
            isLightMode ? "bottom-[-22px]" : "-bottom-[100%]"
          }`}
        ></div>

        <div
          className={`w-[64px] h-[64px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[-26px]  ${
            isLightMode ? "top-[-18px]" : "top-[100%]"
          }`}
        ></div>
        <div
          className={`w-[49px] h-[49px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[-20px]  ${
            isLightMode ? "top-[38px]" : "top-[100%]"
          }`}
        ></div>
        <div
          className={`w-[44px] h-[44px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[10px]  ${
            isLightMode ? "bottom-[-12px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[49px] h-[49px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[33px]  ${
            isLightMode ? "bottom-[-39px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[42px] h-[42px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[56px]  ${
            isLightMode ? "bottom-[-24px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[36px] h-[36px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[92px]  ${
            isLightMode ? "bottom-[-26px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[46px] h-[46px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[120px]  ${
            isLightMode ? "bottom-[-34px]" : "-bottom-[100%]"
          }`}
        ></div>
        <div
          className={`w-[46px] h-[46px] rounded-full transition-all ease-in-out duration-700 bg-[#F3FDFF] absolute right-[148px] ${
            isLightMode ? "bottom-[-34px]" : "-bottom-[100%]"
          }`}
        ></div>

        <div
          className={`transition-opacity ease-in-out duration-200 star w-[10px] h-[10px] absolute top-[20px] left-[42px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[8px] h-[8px] absolute top-[40px] left-[22px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[6px] h-[6px] absolute top-[55px] left-[50px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[7px] h-[7px] absolute top-[64px] left-[32px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[7px] h-[7px] absolute top-[26px] left-[74px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[5px] h-[5px] absolute top-[60px] left-[78px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[4px] h-[4px] absolute top-[40px] left-[106px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[8px] h-[8px] absolute top-[32px] left-[129px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
        <div
          className={`transition-opacity ease-in-out duration-200 star w-[12px] h-[12px] absolute top-[60px] left-[115px] ${
            isLightMode ? "opacity-0" : "opacity-100 delay-200"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default App;
