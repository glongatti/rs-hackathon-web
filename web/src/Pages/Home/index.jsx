import React from "react";
import { Avatar, Col, Row, Button } from "antd";
import "./styles.css";

import { withRouter } from "react-router-dom";
function Home(props) {
  return (
    <>
      <Row
        type="flex"
        align="middle"
        justify="center"
        style={{
          maxWidth: `65%`,
          /* margin: auto, */
          marginLeft: `auto`,
          marginRight: `auto`
        }}
      >
        <Col
          span={24}
          style={{
            textAlign: "center"
          }}
        >
          <Avatar size={120} icon="user" />
        </Col>
        <Col
          span={24}
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#ffffff"
          }}
          className={"col-home"}
        >
          <h1>Descubra agora qual será o seu futuro</h1>
          <p>
            Já pensou como o Uber, WhatsApp e o TikTok funcionam? Você também
            pode fazer aplicativos e muito mais com programação. Faça nosso
            teste para descobrir em qual área você se daria bem!
          </p>
        </Col>
        <Col
          span={24}
          style={{
            textAlign: "center"
          }}
        >
          <button
            className={"button-home"}
            onClick={() => props.history.push("/teste")}
          >
            Comece agora!
          </button>
        </Col>
      </Row>
    </>
  );
}

export default withRouter(Home);
