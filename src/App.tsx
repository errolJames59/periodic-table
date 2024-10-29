import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundBlob from "./components/BackgroundBlob";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen p-12 relative max-w-[100%] overflow-x-clip">
        <BackgroundBlob />
        <Outlet />
      </main>
    </>
  );
};

export default App;
