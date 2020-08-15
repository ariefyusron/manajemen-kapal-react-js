import React, { memo } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { Container } from "..";
import { ICONS } from "../../configs";

const Component = () => {
  const history = useHistory();

  const listMenu = [
    {
      title: "Standar tarif",
      pathname: "/dashboard/standar-tarif",
      icon: ICONS.standarTarif,
    },
    {
      title: "Identitas Kapal",
      pathname: "/dashboard/identitas-kapal",
      icon: ICONS.ship,
    },
    {
      title: "Rencana Anggaran Biaya Reparasi Kapal",
      pathname: "/dashboard/rab-reparasi-kapal",
      icon: ICONS.rab,
    },
    {
      title: "Persetujuan RAB",
      pathname: "/dashboard/persetujuan-rab",
      icon: ICONS.persetujuan,
    },
  ];

  const listMenuAdmin = [
    {
      title: "User",
      pathname: "/dashboard/admin/user",
      icon: ICONS.users,
    },
    {
      title: "Type Kapal",
      pathname: "/dashboard/admin/kapal",
      icon: ICONS.typeShip,
    },
    {
      title: "Type Survey",
      pathname: "/dashboard/admin/survey",
      icon: ICONS.survey,
    },
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
              <img src={ICONS.dashboard} alt="dashboard" />
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
                className="nav-link item"
                onClick={() => history.push(item.pathname)}
              >
                <img src={item.icon} alt={item.title} />
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
                  className="nav-link item"
                  onClick={() => history.push(item.pathname)}
                >
                  <img src={item.icon} alt={item.title} />
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
