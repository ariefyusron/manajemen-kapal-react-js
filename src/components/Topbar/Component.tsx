import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

import "./styles.scss";
import { Col, Row } from "..";
import { handleLogout } from "../../redux/actions";
import { ICONS, IMAGES } from "../../configs";

const token = localStorage.getItem("token");
let decoded: any = "";
if (token) {
  decoded = jwt.verify(token!, process.env.REACT_APP_JWT_SECRET_KEY!);
}

interface Props {
  show: boolean;
  setShow: (e: boolean) => void;
}

const Component = ({ show, setShow }: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="component-topbar sticky-top" onClick={() => setShow(false)}>
      <div className="container-fluid">
        <Row style={{ height: 70 }} className="align-items-center">
          <Col
            size={2}
            className="left"
            style={{ height: "100%" }}
            onClick={() => history.push("/dashboard")}
          >
            <span className="navbar-brand mb-0 h1">Home</span>
          </Col>
          <Col size={10}>
            <Row justifyContent="end">
              <div
                style={{ paddingLeft: 20, paddingRight: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(!show);
                }}
              >
                <img src={IMAGES.avatar} alt="avatar" />
                <div
                  className="btn btn-link my-2 my-sm-0"
                  style={{ color: "white" }}
                >
                  {decoded.showUser.username}
                </div>
              </div>
            </Row>
          </Col>
        </Row>

        {show && (
          <div className="wrap-modal">
            <img src={ICONS.logout} alt="logout" className="img" />
            <button
              className="btn btn-link my-2 my-sm-0"
              type="button"
              onClick={() => dispatch(handleLogout())}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Component);
