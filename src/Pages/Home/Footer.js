import React from 'react'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import footer from "../../image/footer.png";
import content from "../../image/content.png";
import inputImage from "../../image/inputImage.png";
import phone from "../../image/phone.png";


function Footer() {
  return (
    <div className="relative ">
      <img
        className="absolute top-0 left-0 h-full w-full -z-10"
        src={footer}
      ></img>
      <Container>
        <div className="flex justify-center   items-center">
          <div className="bg-[#090B21] relative h-[94px] w-[476.27px] my-[100px]  rounded-full flex justify-center items-center ">
            <div className="bg-[#FF9A23] h-[75.2px] w-[75.2px]  absolute top-2 left-2 rounded-full flex justify-center items-center ">
              <img className="w-[27.91px] h-[27.91px]" src={phone} />
            </div>

            <p className="text-[20px] text-[#FFFFFF;] font-bold">CALL NOW</p>
          </div>
        </div>

        <div className="grid grid-cols-3  ">
          <div className="relative -z-10 flex flex-col items-center ">
            <div className="absolute top-0 right-0 ">
              <img className="w-[365px] h-[400.5px] " src={content} />
            </div>

            <div className="flex justify-center items-center my-[80px]">
              <div className="z-10 text-center ">
                <p className="text-[22px] text-[#FFFFFF] ">Emergency 24/7</p>
                <div>
                  <p className="text-[#FFFFFF] text-[50px]  ">
                    Car Reapair{" "}
                    <span className="text-[#FF9A23] p-0 m-0 text-[50px]">
                      Services
                    </span>{" "}
                  </p>
                  <p className="text-[#FFFFFF] text-[20px] text-center  ">
                    If you have questions <br></br> feel free to call us
                  </p>
                  <p className="text-[#FFFFFF] text-[28.2195px] font-bold text-center  ">
                    +97142942245
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-2  my-6 flex flex-col items-center   ">
            <div className="absolute top-0 right-0">
              <img className="w-[753px] h-[378.5px] " src={inputImage} />
            </div>
            <div className="flex justify-around gap-3 my-5 z-10">
              <div className="w-[322px]  ml-10  h-[80px] rounded-full border-2 border-[#FF9A23] flex justify-center items-center ">
                <input className="bg-inherit h-[40px]  " placeholder="name" />
              </div>
              <div className="w-[322px]    h-[80px] rounded-full border-2 border-[#FF9A23] flex justify-center items-center ">
                <input className="bg-inherit h-[40px]  " placeholder="name" />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="w-[669px] z-10  ml-10  h-[80px] rounded-full border-2 border-[#FF9A23] flex justify-center items-center ">
                <input
                  className="bg-inherit h-[40px] w-[569px] "
                  placeholder="Your Current Location"
                />
              </div>
            </div>
            <div className="flex justify-center my-5 ">
              <div className="w-[669px] z-10  ml-10  h-[80px] rounded-full border-[#FF9A23]  bg-[#FF9A23] flex justify-center items-center ">
                <p className="text-[#FFFFFF] text-[23.0649px] font-bold text-center  ">
                  Schedual your car checkup
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-[22px] text-[#BEBEBE;]">
            2022 Mechanic- Baba® All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer