import { Col, Row, Space } from "antd";
import { Link } from "react-router-dom";

export const Homepage = ({ text }) => {
  const socialMediaLinks = [
    {
      type: "Linkedin",
      url: "https://www.linkedin.com/company/east-west-properties-plc/",
    },
    // { type: "GitHub", url: "https://github.com/viji9898" },
    // { type: "Instagram", url: "https://www.instagram.com/viji9898/" },
    // { type: "Twitter", url: "https://twitter.com/VijiNotes" },
    // { type: "Medium", url: "https://medium.com/@vijiw" },
  ];

  const listSocialMediaLinks = socialMediaLinks.map((socialMedia, index) => {
    if (index === 0) {
      return (
        <a href={socialMedia.url} target={"_blank"} rel={"noreferrer"}>
          {socialMedia.type}
        </a>
      );
    } else {
      return (
        <a href={socialMedia.url} target={"_blank"} rel={"noreferrer"}>
          {socialMedia.type} |
        </a>
      );
    }
  });

  return (
    <div style={{ margin: "10px" }}>
      <Row justify="center" style={{ marginBottom: "10px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Link to={"/"}>
            <img
              src={
                "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-ew-lk/logo/East+West+Properties+PLC.svg"
              }
              width={"350px"}
              alt="East West Properties anchor Logo in blue with text east west properties"
            />
          </Link>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Space>{listSocialMediaLinks}</Space>
        </Col>
      </Row>
      <br></br>
      <Row justify="center">
        <Col style={{ textAlign: "center" }}></Col>
      </Row>
    </div>
  );
};
