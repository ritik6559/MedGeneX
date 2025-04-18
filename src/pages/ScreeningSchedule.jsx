import React from "react";
import KanbanBoard from "../components/KanbanBoard";
import { useLocation } from "react-router-dom";

const ScreeningSchedule = () => {
  const state = useLocation();
  return (
    <div className="h-full w-full overflow-scroll ">
      <KanbanBoard state={state} />;
    </div>
  );
};

export default ScreeningSchedule;
