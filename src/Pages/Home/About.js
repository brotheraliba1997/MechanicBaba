import React from "react";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import machineman from "../../image/image636.png"
import phone from "../../image/phone.png";

function About() {
  return (
    <Wrapper>
      <Container>
        <div class="my-[100px]  overflow-x-hidden">
          <div className="grid grid-cols-2 ">
            <div className="">
              <p className="text-[18px]  py-3 text-[#000000] font-normal ">
                ABOUT US
              </p>

              <p className="text-[54px] font-bold py-5">
                Always <span className="text-[#D38122]"> Ready</span> To{" "}
                <br></br> Our First{" "}
                <span className="text-[#E98F26] ">Priority</span>
              </p>
              <div className="w-[90%] ">
                <p className="text-[#636363] text-[18px] ">
                  We will come to your location and fix your broken car, whether
                  it near your home ,on highway or in office parking. Forget
                  about calling <br></br> <br></br> Recovery an towing car to
                  some Garge. we do magic front of your eyes, save your mony and
                  time with MECHANIC BABA
                </p>
              </div>

              <div className="bg-[#090B21] h-[60px] w-[198px] my-20  rounded-full flex gap-4  justify-center items-center">
                <div className="bg-[#FF9A23] h-[48px] w-[48px]  rounded-full flex justify-center items-center ">
                  <img src={phone} />
                </div>
                <p className="text-[20px] text-[#FFFFFF;] font-bold">
                  CALL NOW
                </p>
              </div>
            </div>

            <div>
              <img className="w-[90%] " src={machineman} />
              <div className="flex justify-center">
                <div className="flex gap-3   items-center">
                  <p className="text-[110px] text-[#FF9A23]  ">12</p>
                  <p className="text-[35px] text-[#000000]  leading-12  ">
                    Years Of <br></br> Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default About;
