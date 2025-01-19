import React from "react";
function Education() {
  var education = [
    {
      CollegeName: "Inter Science College , Hazaribagh",
      couse: "Higher Secondary Course",
      year: { start: 2021, end: 2023 },
    },
    {
      CollegeName: "Arka Jain University , Jamshedpur",
      couse: "Bachelor Of Computer Application",
      year: { start: 2023, end: 2026 },
    },
  ];
  return (
    <div className="w-full py-20">
      
      <h1
        style={{ fontFamily: "normal" }}
        className="text-center text-5xl text-[#00EEFF]"
      >
        Education
      </h1>

      <div className="mt-20 w-full  mb-10 px-5 sm:px-0">
        <div className="">
          {education.map((elem, index) => (
            <div
              key={index}
              className="w-full sm:flex items-center justify-center mb-20"
            >
              <div className="mt-10 h-full w-full sm:w-[30%] bg-[##390F7C] flex flex-col items-center justify-center rounded-lg shadow-[0px_0px_15px_rgba(255,255,255,1)] hover:scale-105 duration-300 py-[10vh] text-[#00EEFF]">
                <h1 className="text-xl font-semibold">{elem.CollegeName}</h1>
                <h1 className="text-xl font-semibold ">
                  {elem.couse}
                </h1>
              </div>

              <span className="inline-block sm:mt-[10vh]  ml-[19vh] mt-10 sm:ml-10 h-[10vh] w-[1px] sm:h-[1px] sm:w-[10vw] bg-white rounded-full"></span>
              <div className="mt-5 ml-[9vh] sm:ml-20 sm:mt-10 w-40 h-40 bg-[#354BA1] hover:scale-105 duration-200 rounded-full flex items-center justify-center">
                {elem.year.start} - {elem.year.end}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
export default Education;
