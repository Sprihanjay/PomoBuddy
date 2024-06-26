import React from "react";
import Timer from "../components/Timer";
import TodoList from "../components/TodoList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TimerPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-background-gradient">
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-0 items-start w-full ">
        <div className="items-center justify-center flex order-1 lg:order-2">
          <Timer />
        </div>
        <div className="lg:justify-end flex justify-center order-2 lg:order-1 mt-5 lg:mt-0">
          <TodoList />
        </div>
      </div>

      <style>{`
    .bg-background-gradient {
      background: rgb(4, 20, 72);
      background: -moz-radial-gradient(
        circle,
        rgba(4, 20, 72, 1) 21%,
        rgba(0, 0, 0, 1) 55%
      );
      background: -webkit-radial-gradient(
        circle,
        rgba(4, 20, 72, 1) 21%,
        rgba(0, 0, 0, 1) 55%
      );
      background: radial-gradient(
        circle,
        rgba(4, 20, 72, 1) 21%,
        rgba(0, 0, 0, 1) 55%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#041448",endColorstr="#000000",GradientType=1);
    }
  `}</style>
    </div>
  );
};

export default TimerPage;
