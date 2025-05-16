interface ResultProps {
  monthlyRepayment: number;
  totalRepayment: number;
}

function Result({ monthlyRepayment, totalRepayment }: ResultProps) {
  return (
    <section className="bg-[#122f3f] w-full p-10 rounded-bl-[4rem]">
      <header className="justify-between w-full font-medium text-[#ffffff] text-lg">
        Your results
      </header>
      <p className="text-[#9abed5] py-5">
        Your results are shown below based on the information you provided. To
        adjust results, edit the form and click "calculate repayments" again.
      </p>
      <div className="bg-black border-t-2 border-[#d7da2f] p-7  divide-y divide-blue-300 rounded-xl ">
        <div>
          <p className="text-[#9abed5] pl-4">Your monthly repayments</p>
          <p className="font-medium text-[#d7da2f] text-6xl p-3 pb-7">
            &pound; {monthlyRepayment.toFixed(2)}
          </p>
        </div>
        <div className="pl-3">
          <p className="text-[#9abed5] pt-4">
            Total you'll repay over the term
          </p>
          <p className="text-[#e3f3fd] font-bold text-lg py-3">
            &pound; {totalRepayment.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Result;
