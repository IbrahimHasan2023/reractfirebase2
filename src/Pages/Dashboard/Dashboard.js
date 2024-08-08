import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Topbar from "../../Components/Dashboard/Topbar";
import "./Dashboard.css";
import React from "react";

export default function Dashboard() {
  return (
    <div className="position-relativ ">
      <Topbar />
      <div className="dashboard d-flex gab-1" style={{ marginTop: "70px" }}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
