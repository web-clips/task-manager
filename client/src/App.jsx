import AuthForm from "./components/Auth/AuthForm";
import Sidebar from "./components/Sidebar/Sidebar";
import DragExample from "./DragExample";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      {/* <AuthForm /> */}
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
