import React, { memo } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { Container } from "..";

const Component = () => {
  const history = useHistory();

  const listMenu = [
    {
      title: "Standar tarif",
      pathname: "/dashboard/standar-tarif"
    },
    {
      title: "Identitas Kapal",
      pathname: "/dashboard/identitas-kapal"
    },
    {
      title: "Rencana Anggaran Biaya Reparasi Kapal",
      pathname: "/dashboard/rab-reparasi-kapal"
    },
    {
      title: "Persetujuan RAB",
      pathname: "/dashboard/persetujuan-rab"
    }
  ];

  const listMenuAdmin = [
    {
      title: "User",
      pathname: "/dashboard/admin/user"
    },
    {
      title: "Type Kapal",
      pathname: "/dashboard/admin/kapal"
    },
    {
      title: "Type Survey",
      pathname: "/dashboard/admin/survey"
    }
  ];

  return (
    <Container className="component-sidebar">
      <ul className="nav flex-column">
        <div className="group">
          <li className="nav-item">
            <div
              className="nav-link item"
              style={{ marginTop: 0 }}
              onClick={() => history.push("/dashboard")}
            >
              Dashboard
            </div>
          </li>
        </div>

        <div className="group">
          <li className="nav-item">
            <div className="nav-link heading">FEATURES</div>
          </li>
          {listMenu.map((item, index) => (
            <li className="nav-item" key={index}>
              <div
                className={`nav-link item ${
                  history.location.pathname.includes(item.pathname) ? "h6" : ""
                }`}
                onClick={() => history.push(item.pathname)}
              >
                {item.title}
              </div>
            </li>
          ))}
        </div>

        {localStorage.getItem("is_admin") === "true" && (
          <div className="group">
            <li className="nav-item">
              <div className="nav-link heading">ADMIN</div>
            </li>
            {listMenuAdmin.map((item, index) => (
              <li className="nav-item" key={index}>
                <div
                  className={`nav-link item ${
                    history.location.pathname.includes(item.pathname)
                      ? "h6"
                      : ""
                  }`}
                  onClick={() => history.push(item.pathname)}
                >
                  {item.title}
                </div>
              </li>
            ))}
          </div>
        )}
      </ul>
    </Container>
  );
};

export default memo(Component);
