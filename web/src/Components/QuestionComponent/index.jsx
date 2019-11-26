import React from "react";

// import { Container } from './styles';
import { Avatar, Col, Row } from "antd";
import {} from "antd";
import "./styles.css";

export default function QuestionComponent({
  questionName,
  responses,
  questionsNumber
}) {
  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Col
          span={24}
          style={{
            textAlign: "center"
          }}
        >
          <Avatar
            size={120}
            style={{
              backgroundColor: "#00adb5",
              fontSize: "80px"
            }}
          >
            1
          </Avatar>
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
          <h1>{questionName}</h1>
        </Col>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <Col span={16}>
          {responses.map(item => (
            <Col span={6} style={{ textAlign: "center" }}>
              <button className={"button-response"}>{item.name}</button>
            </Col>
          ))}
        </Col>
      </Row>
    </>
  );
}
