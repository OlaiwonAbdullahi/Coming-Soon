const Form = () => {
  return (
    <div className=" mx-auto flex gap-6 flex-col md:flex-row">
      <div className="basis-2/3 md:w-96 w-full h-12 items-center bg-primary p-2 rounded-md border border-secondary border-r-4 border-b-4">
        <input
          type="text"
          placeholder="Your Email Address ..."
          className="text-sm text-secondary h-8 items-center w-full placeholder:text-secondary focus:outline-none"
        />
      </div>
      <div className="basis-1/3">
        <button className="bg-btnColor rounded-md h-12 p-2 font-semibold border border-secondary border-r-4 border-b-4 md:w-32 w-full text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Form;
