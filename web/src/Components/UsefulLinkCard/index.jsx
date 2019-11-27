import React from "react";
import { Col, Row, Avatar } from "antd";
// import { Container } from './styles';
import "./styles.css";

export default function UsefulLinkCard() {
  return (
    <>
      <Row type="flex" align="middle" justify="center" className={"links-card"}>
        <Col span={4}>
          <Avatar size={64} icon="link" />
        </Col>
        <Col span={20}>
          <span className={"mentors-info"}>INICIANDO EM PROGRAMACAO</span>
        </Col>
      </Row>
    </>
  );
}
