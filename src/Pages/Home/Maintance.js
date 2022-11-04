import React from 'react'
import Container from '../../components/Container'
import Wrapper from '../../components/Wrapper'
import personworking from "../../image/personworking.png";
import phone from "../../image/phone.png";

function Maintance() {
  return (
    <Container>
      <div className="my-[200px] ">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-[54px] text-[#000000;] font-bold ">
              How can you maintain your{" "}
              <span className="text-[#FEAB02]">car.</span>
            </p>

            <p className="text-[18px] text-[#636363] my-5 ">
              If you had access to a car while living at home, chances are your
              parents took care of its maintenance or offered reminders as to
              when to take it in for service. When you’re on your own, car
              maintenance becomes your responsibility. Yes, it can be expensive
              and time consuming, but the investment you make today will save
              you money down the road. <br></br> <br></br> Don’t be like the 1/3
              of college students who change their oil less than two times a
              year because they simply forget to do it. Your car won’t magically
              take care of itself. Get in the habit of regular car maintenance
              and quit relying on your folks to remind you to get your tires
              rotated or your oil changed.
            </p>

            <div className="bg-[#090B21] h-[60px] w-[198px] my-20  rounded-full flex gap-4  justify-center items-center">
              <div className="bg-[#FF9A23] h-[48px] w-[48px]  rounded-full flex justify-center items-center ">
                <img src={phone} />
              </div>
              <p className="text-[20px] text-[#FFFFFF;] font-bold">CALL NOW</p>
            </div>
          </div>
          <div>
            <img src={personworking} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Maintance