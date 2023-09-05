import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
// import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MyFooter /> */}
      <Welcome />
      <AllTheBooks />
    </div>
  );
}

export default App;
