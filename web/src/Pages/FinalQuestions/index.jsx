import React from "react";
import { Avatar, Col, Row, Steps, Popover } from "antd";
import "./styles.css";
// import { Container } from './styles';
import MentorsCard from "../../Components/MentorsCard";
import CoursesCard from "../../Components/CoursesCard";
import UsefulLinkCard from "../../Components/UsefulLinkCard";

export default function FinalQuestions() {
  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Col
          span={20}
          // style={{
          //   backgroundColor: "linear-gradient(##222831,#222831)",
          //   padding: "20px",
          //   borderRadius: "20px"
          // }}
          className="col-linear"
        >
          {" "}
          <Row type="flex" align="middle" justify="center">
            <Col span={24}>
              <span className={"tag-area"}>Area Recomendada</span>
              <h1 style={{ marginTop: "20px" }}>FRONT-END</h1>
            </Col>
            <Col span={24}>
              <p>
                O programador frontend é aquele que cuida de toda a parte de
                interação com o usuário, já o programador backend é o
                profissional que desenvolve o sistema que vai ser utilizado para
                gestão dos dados, sistema esse que terá interatividade com o
                usuário e utilizará a interface que foi desenvolvida pelo
                programador frontend.
              </p>

              <p>
                O programador frontend é aquele que cuida de toda a parte de
                interação com o usuário, já o programador backend é o
                profissional que desenvolve o sistema que vai ser utilizado para
                gestão dos dados, sistema esse que terá interatividade com o
                usuário e utilizará a interface que foi desenvolvida pelo
                programador frontend.
              </p>
            </Col>
          </Row>
          <Row type="flex" align="middle" justify="center">
            <Col span={8}>
              <h3>MENTORES</h3>
            </Col>
            <Col span={8}>
              <h3>CURSOS</h3>
            </Col>
            <Col span={8}>
              <h3>LINKS ÚTEIS</h3>
            </Col>
          </Row>
          <Row type="flex" align="middle" justify="center">
            <Col span={8}>
              <MentorsCard />
              <MentorsCard />
              <MentorsCard />
            </Col>
            <Col span={8}>
              <CoursesCard />
              <CoursesCard />
              <CoursesCard />
            </Col>
            <Col span={8}>
              <UsefulLinkCard />
              <UsefulLinkCard />
              <UsefulLinkCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
