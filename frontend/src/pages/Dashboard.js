import React, { useState } from "react";
import task from "../assets/tasks.jpeg";
import analytics from "../assets/analytics.jpeg";
import lead from "../assets/lead.jpeg";
import sale from "../assets/sasle.jpeg";
import { useLocation } from "react-router-dom";
import Lead from "./Lead";
import Sale from "./Sale";
import Task from "./Task";
import Analytics from "./Analytics";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const email = location.state?.email || "Guest";

  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>MutalFundsAdda -- CRM</h1>
        <div className="user-email">{email}</div>
      </header>

      <main className="dashboard-content">
        {activeSection === "dashboard" && (
          <div className="container">
            <div className="lead-management">
              <img
                src={lead}
                height="200"
                width="200"
                onClick={() => setActiveSection("lead")}
                alt="Lead"
              />
            </div>
            <div className="sale-pipeline">
              <img
                src={sale}
                height="200"
                width="200"
                onClick={() => setActiveSection("sale")}
                alt="Sale"
              />
            </div>
            <div className="tasks-followups">
              <img
                src={task}
                height="200"
                width="200"
                onClick={() => setActiveSection("task")}
                alt="Task"
              />
            </div>
            <div className="analytics">
              <img
                src={analytics}
                height="200"
                width="200"
                onClick={() => setActiveSection("analytics")}
                alt="Analytics"
              />
            </div>
          </div>
        )}

        {activeSection === "lead" &&  <Lead goBack={() => setActiveSection("dashboard")} />}
        {activeSection === "sale" && <Sale goBack={() => setActiveSection("dashboard")} />}
        {activeSection === "task" && <Task goBack={() => setActiveSection("dashboard")} />}
        {activeSection === "analytics" && <Analytics goBack={() => setActiveSection("dashboard")} />}
      </main>

      <div className="footer">© All rights reserved.</div>
    </div>
  );
}

export default Dashboard;
