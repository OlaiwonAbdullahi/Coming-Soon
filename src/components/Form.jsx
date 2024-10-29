const Form = () => {
  return (
    <div className=" flex">
      <div className=" basis-2/3">
        <input type="text" placeholder="Your Email Address" />
      </div>
      <div className=" basis-1/3">
        <button className=" bg-btnColor rounded-md p-2 font-semibold border border-secondary border-r-4 border-b-4 w-32 text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Form;
