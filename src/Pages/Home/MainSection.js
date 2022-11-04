import React from "react";
import Container from "../../components/Container";
import ContainerSec from "../../components/ContainerSec";
import Wrapper from "../../components/Wrapper";
import carbar from "../../image/car-bar 1.png";
import phone from "../../image/phone.png"

const MainSection = () => {
  return (
    <Wrapper>
      <img
        className="absolute top-0 left-0 h-full w-full -z-10"
        src={carbar}
      ></img>

      <Container>
        <div className="ml-10 flex flex-col justify-center gap-4  h-full">
          <p className="text-white font-medium ">Emergency 24/7</p>
          <p className="text-white  font-semibold text-6xl">
            Car Reapair <br></br>{" "}
            <span className="text-[#FF9A23]">Services</span>
          </p>
          <div className="bg-white h-[60px] w-[198px]  rounded-full flex gap-6  justify-center items-center">
            <div className="bg-[#FF9A23] h-[48px] w-[48px]  rounded-full flex justify-center items-center ">
              <img src={phone} />
            </div>
            <p className="text-[20px] text-[#3E3E3E] font-bold">CALL NOW</p>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default MainSection;
