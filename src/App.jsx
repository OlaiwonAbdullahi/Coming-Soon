import Rocket from "./assets/rocket.svg";
const App = () => {
  return (
    <div className=" bg-bg min-h-screen flex flex-col justify-center items-center">
      <div className="">
        <img src={Rocket} alt="" />
      </div>
      <div className="">
        <h2 className="text-center font-bold text-3xl">Coming Soon</h2>
        <p className=" text-center">
          Are you Ready to get something new from us. Then subscribe the news
          latter to get latest updates?
        </p>
      </div>
    </div>
  );
};

export default App;
