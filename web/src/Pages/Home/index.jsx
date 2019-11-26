import React from "react";
import { Avatar, Col, Row } from "antd";

export default function Home() {
  return (
    <>
      <Row type="flex" align="middle" justify="center">
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
          <h1>Boas vindas ao APP_NAME</h1>
          <p>Teste explicativo</p>
        </Col>
      </Row>
    </>
  );
}
