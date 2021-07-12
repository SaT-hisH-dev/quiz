import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ADMIN_DASHBOARD } from "../../constants/RoutePaths";
export default function Sidebar() {
  const [activeMenu, setActiveItem] = useState("/");
  let location = useLocation();
  useEffect(() => {
    let currentActive = window.location.pathname.split("/")[2];
    setActiveItem(currentActive);
  }, [location]);
  return (
    <Fragment>
      <div className="sidebar">
        <ul>
          <li className={activeMenu === "new" ? "active" : ""}>
            <Link to={ADMIN_DASHBOARD}>
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
