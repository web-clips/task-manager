
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export const AppLayout = () => {
    return (
        <>
            <Sidebar />
            <div className="app__main">
                <Header />
                <main className="app__content">
                    <Outlet />
                </main>
            </div>
        </>
    );
}