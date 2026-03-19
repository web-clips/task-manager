import AuthForm from "./components/Auth/AuthForm";
import Sidebar from "./components/Sidebar/Sidebar";
import DragExample from "./DragExample";
import "./App.scss";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import Completed from "./pages/Completed";
import Settings from "./pages/Settings";
import { AppLayout } from "./layout/AppLayout";

function App() {
  return (
    <div className="app">
      {/* <AuthForm /> */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
