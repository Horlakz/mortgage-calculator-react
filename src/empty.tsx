import image from "./assets/illustration-empty.svg";

function Empty() {
  return (
    <section className=" bg-[#122f3f] w-full justify-center items-center flex flex-col px-10 gap-3 text-center rounded-bl-[4rem] py-3.5  ">
      <img src={image} alt="" />
      <h2 className="text-2xl font-bold text-[#e3f3fd]">Results shown here</h2>
      <p className="font-medium text-[#4e6e7e]">
        Complete the form and click "calculate repayments" to see what your
        monthly replayments would be.
      </p>
    </section>
  );
}

export default Empty;
