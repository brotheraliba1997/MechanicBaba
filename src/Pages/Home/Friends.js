import React from "react";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import orange from "../../image/orange.svg";
import driversvg from "../../image/driver.svg";
import shikh from "../../image/shikh.svg";
import woman from "../../image/woman.svg";
import simle from "../../image/simle.svg";

function Friends() {
  return (
    <Wrapper>
      <Container>
        <div className="my-[100px] ">
          <p className="text-black text-[63.0639px] font-bold ">
            <span className="text-[#FEAB02]"> Friends,</span> enthusiasts
            <br></br> and specialists in their fields.
          </p>

          <div className="my-[40px]">
            <div className="grid grid-cols-4">
              <div>
                <img src={driversvg} />
              </div>
              <div>
                <img src={woman} />
              </div>
              <div>
                <img src={shikh} />
              </div>
              <div className="relative h-[full] w-[full] flex justify-center items-end">
                <img className="absolute -z-10 top-0 right-0" src={orange} />
                <div className="z-20  mb-10">
                    
                  <div className="bg-[#090B21] h-[60px] w-[198px]   rounded-full flex gap-6  justify-center items-center">
                    <div className="bg-[#FCFCFC] h-[48px] w-[48px] flex justify-center items-center  rounded-full ">
                      <img src={simle} />
                    </div>
                    <p className="text-[20px] text-[#FFFFFF;] font-bold">
                      VIEW ALL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Friends;
