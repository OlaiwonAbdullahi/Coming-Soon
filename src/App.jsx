import Rocket from "./assets/rocket.svg";
const App = () => {
  return (
    <div className=" bg-bg min-h-screen">
      <div className="">
        <img src={Rocket} alt="" />
      </div>
      <div className="">
        <h2>Coming Soon</h2>
        <p>
          Are you Ready to get something new from us. Then subscribe the news
          latter to get latest updates?
        </p>
      </div>
    </div>
  );
};

export default App;
