import { Col, Row } from "antd";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Row justify="left">
      <Col span={24} style={{ margin: "10px" }}>
        <Link to="/">
          <img
            src="https://app-viji.s3.eu-west-2.amazonaws.com/viji-navbar-logo.svg"
            alt="viji logo for navbar"
            height={"25px"}
          />
        </Link>
      </Col>
    </Row>
  );
};
