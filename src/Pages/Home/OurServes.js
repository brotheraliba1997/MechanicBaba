import React from 'react'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import imageOD from "../../image/imageOD.png"
import imageboy from "../../image/imageboy.png";
import Reangle from "../../image/Rectangle.png"
import bettery from "../../image/bettery.svg"

function OurServes() {
  return (
    <div className="bg-black h-[1530px]  ">
      <Container>
        <div className="my-[180px]">
          <div className="flex flex-col items-center   py-[100px]">
            <p className="text-[#FFFFFF]  text-[66px] font-bold  ">
              OUR
              <span className="text-[#D68628] pl-12  text-[66px] font-bold">
                SERVICES
              </span>
            </p>
            <p className="text-[#E9E9E9] py-10 text-[18px] font-normal text-center w-[785px] ">
              We provide a range of roadside assistance services such as genuine
              battery replacement, starter & alternator repair and AC
              maintenance & repair. In addition, we also provide <br></br> car
              parts of a variety of car makes and models.
            </p>
          </div>

          <div className="flex  items-center justify-around ">
            <div>
              
              <p className="text-[#FFFFFF] font-normal text-[24px]">
                Battery <br></br> Replacement
              </p>
            </div>
            <p className="text-[#FFFFFF] font-normal text-[24px]">
              Starter <br></br> Replacement
            </p>
            <p className="text-[#FFFFFF] font-normal text-[24px]">
              Alternator <br></br> Replacement
            </p>
          </div>

          <div className="flex  my-20  items-center justify-around ">
            <p className="text-[#FFFFFF] font-normal text-[24px]">
              Battery <br></br> Replacement
            </p>
            <p className="text-[#FFFFFF] font-normal text-[24px]">
              Starter <br></br> Replacement
            </p>
            <p className="text-[#FFFFFF] font-normal text-[24px]">
              Alternator <br></br> Replacement
            </p>
          </div>

          <div className="flex justify-center  h-[411px] relative">
            <img className="absolute top-0 left-0" src={imageOD} />
            <div className="absolute top-120 py-[100px] left-100">
              <p className="text-[#FFFFFF]  font-bold text-[53px]">DEAL WITH</p>
              <p className="text-[#FF9A23]  font-bold text-[53px]">
                EVERY BRAND
              </p>
            </div>
          </div>

          {/* image side */}

          <div className="grid grid-cols-3 gap-6   ">
            <div className="col-span-2">
              <img className="h-[330px] w-[791px] " src={imageboy} />
            </div>

            <div className="w-[365px]  h-[506px] relative  flex flex-col items-center  ">
              <img
                src={Reangle}
                className="absolute top-0 left-0 h-[327px] w-[365px] "
              />
              <div className="z-10 text-center">
                <p className="text-[#FFFFFF] text-[22px]  ">Emergency 24/7</p>
                <p className="text-[#FFFFFF] text-[50px]  ">Car Reapair</p>
                <p className="text-[#FF9A23] p-0 m-0 text-[50px] text-center">
                  Services
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
      </Container>
    </div>
  );
}

export default OurServes