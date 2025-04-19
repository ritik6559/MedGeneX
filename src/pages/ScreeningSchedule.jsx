import React from "react";
import KanbanBoard from "../components/KanbanBoard";
import { useLocation } from "react-router-dom";

const ScreeningSchedule = () => {
  const state = useLocation();
  return (
    <div className="h-full w-full overflow-scroll scrollbar-hidden custom-scroll-hide ">
      <KanbanBoard state={state} />;
    </div>
  );
};

export default ScreeningSchedule;
