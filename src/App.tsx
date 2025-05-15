//import image from "./assets/illustration-empty.svg";//
import { useState } from "react";
import image2 from "./assets/icon-calculator.svg";
function App() {
  const [mortageAmount, setMortageAmount] = useState(0);
  const [mortgageTerm, serMortgageTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  return (
    <main className=" bg-[#e3f3fd] flex items-center h-screen justify-center w-full">
      <div className="h-150 rounded-2xl flex max-w-5xl w-full bg-white  overflow-hidden shadow-xl">
        <section className=" w-full bg-white p-10 ">
          <header className="flex  justify-between items-end w-full mb-5 ">
            <h1 className=" text-2xl font-bold text-[#122f3f]">
              Mortgage Calculator
            </h1>
            <button className="underline text-[#4e6e7e] capitalize">
              Clear all
            </button>
          </header>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="mortgage_amount"
                className="block mb-2 font-medium text-[#4e6e7e]"
              >
                Mortgage Amount
              </label>
              <div className="relative h-fit w-full ">
                <span className="absolute left-0 h-full flex items-center px-4 bg-[#e3f3fd] rounded-l-lg border-l border-y border-[#9abed5]">
                  &pound;
                </span>
                <input
                  type="text"
                  id="mortgage_amount"
                  className=" border border-[#4e6e7e] rounded-lg py-2 pl-12 w-full focus:outline-none"
                />
              </div>
            </div>

            <div className="w-full flex gap-6">
              <div>
                <label
                  htmlFor="mortgage_term"
                  className="block mb-2 text-[#4e6e7e] font-medium"
                >
                  Mortgage Term
                </label>
                <div className="relative h-fit w-full">
                  <span className="absolute right-0 h-full flex items-center px-4 bg-[#e3f3fd] rounded-r-lg border-r border-y border-[#4e6e7e]">
                    Years
                  </span>
                  <input
                    type="text"
                    id="mortgage_term"
                    className="border border-[#4e6e7e] rounded-lg py-2 pl-12 w-full focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest_rate"
                  className="block mb-2 text-[#4e6e7e] font-medium"
                >
                  Interest Rate
                </label>
                <div className="relative h-fit w-full">
                  <span className="absolute right-0 h-full flex items-center px-4 bg-[#e3f3fd] rounded-r-lg border-r border-y border-[#4e6e7e]">
                    %
                  </span>
                  <input
                    type="text"
                    id="interest_rate"
                    className="border border-[#4e6e7e] rounded-lg py-2 pl-12 w-full focus:outline-none "
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="mortgage-type"
                className="block mb-2 text-[#4e6e7e] font-medium"
              >
                Mortgage Type
              </label>
              <div className="space-y-3.5">
                <label className="flex gap-4 items-center border py-2 border-[#4e6e7e] pl-2 cursor-pointer">
                  <input type="radio" name="payment" className="peer hidden" />
                  <span className="h-4 w-4 rounded-full border border-[#4e6e7e] peer-checked:bg-[#4e6e7e]" />
                  <span className="font-bold text-gray-700 peer-checked:text-[#4e6e7e]">
                    Repayment
                  </span>
                </label>
                <label className="flex gap-4 items-center border py-2 border-[#4e6e7e] pl-2 cursor-pointer">
                  <input type="radio" name="payment" className="peer hidden" />
                  <span className="h-4 w-4 rounded-full border border-[#4e6e7e] peer-checked:bg-[#4e6e7e]" />
                  <span className="font-bold text-gray-700 peer-checked:text-[#4e6e7e]">
                    Interest Rate
                  </span>
                </label>
              </div>
            </div>

            <button className="bg-[#d7da2f] flex rounded-4xl font-medium text-[#122f3f] px-7 py-3 ">
              <img src={image2} alt="" />
              <p>calculate Repayments</p>
            </button>
          </div>
        </section>
        {/*
        <section className=" bg-[#122f3f] w-full justify-center items-center flex flex-col px-10 gap-3 text-center rounded-bl-[4rem] py-3.5  ">
          <img src={image} alt="" />
          <h2 className="text-2xl font-bold text-[#e3f3fd]">
            Results shown here
          </h2>
          <p className="font-medium text-[#4e6e7e]">
            Complete the form and click "calculate repayments" to see what your
            monthly replayments would be.
          </p>
        </section>
        */}

        <section className="bg-[#122f3f] w-full p-10 rounded-bl-[4rem]">
          <header className="justify-between w-full font-medium text-[#ffffff] text-lg">
            {" "}
            Your results
          </header>
          <p className="text-[#9abed5] py-5">
            Your results are shown below based on the information you provided.
            To adjust results, edit the form and click "calculate repayments"
            again.
          </p>
          <div className="bg-black border-t-2 border-[#d7da2f] p-7  divide-y divide-blue-300 rounded-xl ">
            <div>
              <p className="text-[#9abed5] pl-4">Your monthly repayments</p>
              <p className="font-medium text-[#d7da2f] text-6xl p-3 pb-7">
                &pound; 1,794.74{" "}
              </p>
            </div>
            <div className="pl-3">
              <p className="text-[#9abed5] pt-4">
                {" "}
                Total you'll repay over the term
              </p>
              <p className="text-[#e3f3fd] font-bold text-lg py-3">
                &pound;539,322.94
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
