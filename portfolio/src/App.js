import "./App.css";
import Banner from "./components/banner";

const backgroundGradient = "bg-gradient-to-br from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90";

function App() {
  return (
    <div className={`w-screen h-screen text-white ${backgroundGradient}`}>

      <Banner />
      
    </div>
  );
}

export default App;
