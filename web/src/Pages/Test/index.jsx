import React from "react";
import { Avatar, Col, Row, Steps, Popover } from "antd";
// import { Container } from './styles';
import QuestionComponent from "./../../Components/QuestionComponent";
const { Step } = Steps;
const MOCK_DATA = {
  questions: [
    {
      id: 1,
      name: "Qual a sua matéria preferida na escola?",
      responses: [
        {
          id: 1,
          name: "Matemática"
        },
        {
          id: 2,
          name: "Portugues"
        },
        {
          id: 3,
          name: "Fisica"
        },
        {
          id: 4,
          name: "Ingles"
        }
      ]
    }
  ]
};
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
export default function Test() {
  return (
    <>
      {MOCK_DATA.questions.map(question => (
        <QuestionComponent
          questionName={question.name}
          responses={question.responses}
          questionsNumber={MOCK_DATA.questions.length}
        />
      ))}
      <Row type="flex" align="middle" justify="center">
        <Col
          span={18}
          style={{
            marginTop: "30px",
            // marginBottom: "25px",
            textAlign: "center"
          }}
        >
          <progress
            value={"2"}
            max={"10"}
            style={{ width: "100%", backgroundColor: "red" }}
          />
        </Col>
      </Row>
    </>
  );
}
