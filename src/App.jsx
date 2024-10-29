import Rocket from "./assets/rocket.svg";
import Form from "./components/Form";
const App = () => {
  return (
    <div className=" bg-bg min-h-screen font-pop flex flex-col gap-4 justify-center items-center">
      <div className="">
        <img src={Rocket} alt="" className=" h-64 w-72" />
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className="text-center font-bold text-3xl">Coming Soon</h2>
        <p className=" text-center w-5/6 flex mx-auto font-light">
          Are you Ready to get something new from us. Then subscribe the news
          letter to get latest updates?
        </p>
      </div>
      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default App;
