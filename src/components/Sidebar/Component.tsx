import React, { memo } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { Container } from "..";

const Component = () => {
  const history = useHistory();

  const listMenu = [
    {
      title: "Standar tarif",
      pathname: "/dashboard"
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
      title: "Proyek Reparasi Kapal",
      pathname: "/dashboard/proyek-reparasi-kapal"
    },
    {
      title: "Persetujuan RAB",
      pathname: "/dashboard/peresetujuan-rab"
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
    <Container className="sidebar-component">
      <ul className="nav flex-column">
        <>
          <li className="nav-item">
            <div
              className="nav-link h5"
              style={{ margin: 0 }}
              onClick={() => history.push(listMenu[0].pathname)}
            >
              Menu
            </div>
          </li>
          {listMenu.map((item, index) => (
            <li className="nav-item" key={index}>
              <div
                className={`nav-link ${
                  history.location.pathname === item.pathname ? "h6" : ""
                }`}
                onClick={() => history.push(item.pathname)}
              >
                {item.title}
              </div>
            </li>
          ))}
        </>

        {localStorage.getItem("is_admin") && (
          <>
            <li className="nav-item">
              <div
                className="nav-link h5"
                style={{ margin: 0, marginTop: 20 }}
                onClick={() => history.push(listMenuAdmin[0].pathname)}
              >
                Admin
              </div>
            </li>
            {listMenuAdmin.map((item, index) => (
              <li className="nav-item" key={index}>
                <div
                  className={`nav-link ${
                    history.location.pathname === item.pathname ? "h6" : ""
                  }`}
                  onClick={() => history.push(item.pathname)}
                >
                  {item.title}
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </Container>
  );
};

export default memo(Component);
