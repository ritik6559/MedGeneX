import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import OnBoarding from "./pages/OnBoarding";
import { useStateContext } from "@/context";
import { usePrivy } from "@privy-io/react-auth";
import Profile from "@/pages/Profile";
import Records from "@/pages/Records";
import RecordDetails from "@/components/RecordDetails";
import ScreeningSchedule from "@/pages/ScreeningSchedule";

const App = () => {

  const navigate = useNavigate();
  const { currentUser, fetchUserByEmail } = useStateContext();
  const { user, authenticated, ready, login } = usePrivy();

  console.log(currentUser);
  useEffect(() => {
    if( ready && !authenticated ){
      login();
    } else if ( user && !currentUser ){
      navigate("/onboard");
    }
  }, [ ready, currentUser, navigate ]);

  return (
    <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 h-56 w-56 rounded-full bg-purple-600/10 blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>

      <div className="relative mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboard" element={<OnBoarding />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/medical-records" element={<Records />} />
          <Route path="/medical-records/:id" element={<RecordDetails />} />
          <Route path="/screening-schedules" element={<ScreeningSchedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
