import React from "react";
import { Col, Row, Avatar } from "antd";
// import { Container } from './styles';
import "./styles.css";

export default function MentorsCard() {
  return (
    <>
      <Row
        type="flex"
        align="middle"
        justify="center"
        className={"mentors-card"}
      >
        <Col span={4}>
          <Avatar shape="square" size={64} icon="play-square" />
        </Col>
        <Col span={20}>
          <p className={"mentors-info"}>PROGRAMAÇÃO P/ INICIANTES</p>
        </Col>
      </Row>
    </>
  );
}
