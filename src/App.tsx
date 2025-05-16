import { useState } from "react";

import MortgageType from "./mortgage-type";

import image2 from "./assets/icon-calculator.svg";
import Empty from "./empty";
import Result from "./result";

function App() {
  const [mortgageAmount, setMortageAmount] = useState(0);
  const [mortgageTerm, serMortgageTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  function TypeRepaymentMonthlyRepayment() {
    const numerator = (interestRate * (1 + interestRate)) ** mortgageTerm;
    const denominator = (1 + interestRate) ** mortgageTerm - 1;

    return mortgageAmount * (numerator / denominator);
  }

  function TypeRepaymentTotalRepayment() {
    return TypeRepaymentMonthlyRepayment() * mortgageTerm;
  }

  function TypeInterestRateMonthlyRepayment() {
    return mortgageAmount * interestRate;
  }

  function TypeInterestRateTotalRepayment() {
    return TypeInterestRateMonthlyRepayment() * mortgageTerm + mortgageAmount;
  }

  function handleCalculate() {
    if (mortgageType === "repayment") {
      setMonthlyRepayment(TypeRepaymentMonthlyRepayment());
      setTotalRepayment(TypeRepaymentTotalRepayment());
    } else {
      setMonthlyRepayment(TypeInterestRateMonthlyRepayment());
      setTotalRepayment(TypeInterestRateTotalRepayment());
    }
  }

  function clear() {
    setMortageAmount(0);
    serMortgageTerm(0);
    setInterestRate(0);
    setMortgageType("repayment");
    setMonthlyRepayment(0);
    setTotalRepayment(0);
  }

  return (
    <main className=" bg-[#e3f3fd] flex items-center h-screen justify-center w-full">
      <div className="h-150 rounded-2xl flex max-w-5xl w-full bg-white  overflow-hidden shadow-xl">
        <section className=" w-full bg-white p-10 ">
          <header className="flex  justify-between items-end w-full mb-5 ">
            <h1 className=" text-2xl font-bold text-[#122f3f]">
              Mortgage Calculator
            </h1>
            <button
              onClick={clear}
              className="underline text-[#4e6e7e] capitalize cursor-pointer"
            >
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
                  type="number"
                  id="mortgage_amount"
                  className=" border border-[#4e6e7e] rounded-lg py-2 pl-12 w-full focus:outline-none"
                  onChange={(e) => {
                    setMortageAmount(parseFloat(e.target.value));
                  }}
                  value={mortgageAmount}
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
                    type="number"
                    id="mortgage_term"
                    className="border border-[#4e6e7e] rounded-lg py-2 pl-2 pr-12 w-full focus:outline-none"
                    onChange={(e) => {
                      serMortgageTerm(parseFloat(e.target.value));
                    }}
                    value={mortgageTerm}
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
                    type="number"
                    id="interest_rate"
                    className="border border-[#4e6e7e] rounded-lg py-2 pl-2 pr-12 w-full focus:outline-none"
                    onChange={(e) => {
                      setInterestRate(parseFloat(e.target.value));
                    }}
                    value={interestRate}
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
                <MortgageType
                  name="Repayment"
                  onChange={(e) => {
                    setMortgageType(e.target.value);
                  }}
                />
                <MortgageType
                  name="Interest Rate"
                  onChange={(e) => {
                    setMortgageType(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="bg-[#d7da2f] flex rounded-4xl font-medium text-[#122f3f] px-7 py-3 cursor-pointer"
            >
              <img src={image2} alt="" />
              <p>calculate Repayments</p>
            </button>
          </div>
        </section>

        {monthlyRepayment !== 0 || totalRepayment !== 0 ? (
          <Result
            monthlyRepayment={monthlyRepayment}
            totalRepayment={totalRepayment}
          />
        ) : (
          <Empty />
        )}
      </div>
    </main>
  );
}

export default App;
