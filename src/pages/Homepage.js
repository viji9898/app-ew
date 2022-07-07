import { Button, Col, Row, Space } from "antd";
import { Link } from "react-router-dom";

export const Homepage = ({ text }) => {
  const socialMediaLinks = [
    { type: "Linkedin", url: "https://www.linkedin.com/in/vijiw/" },
    { type: "GitHub", url: "https://github.com/viji9898" },
    { type: "Instagram", url: "https://www.instagram.com/viji9898/" },
    { type: "Twitter", url: "https://twitter.com/VijiNotes" },
    { type: "Medium", url: "https://medium.com/@vijiw" },
  ];

  const listSocialMediaLinks = socialMediaLinks.map((socialMedia, index) => {
    if (index === 4) {
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
          <Link to={"/qr-codes"}>
            <img
              src={
                "https://app-viji.s3.eu-west-2.amazonaws.com/profile-pictures/profile-pic+(8).png"
              }
              width={"350px"}
              alt="ninja dressed in black holding a laptop and coding"
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
        <Col style={{ textAlign: "center" }}>
          <p>
            <strong>My Work:</strong>
          </p>
          <p>💡 upward mobility through coding 💡</p>
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <ul style={{ listStyle: "none", padding: "0px" }}>
            <li>'08 🎓 Graduated Imperial College & moved to 🇱🇰 Sri Lanka</li>
            <li>'09 🎧 Setup a radio station 🎶</li>
            <li>'12-18 🏨 Built 🏗 a Marriott Hotel 👷🏾</li>
            <li>'15 I 🥰 met Chantal ♡ + ♡</li>
            <li>
              '19 💲 Hotel Sold 🥳 and we moved to 🇺🇸 Boston - Go Patriots!!{" "}
              <Link to="/projects">🏈</Link>
            </li>
            <br></br>
            <li>⏸️ time to reflect on the next move</li>
            <li>▶️ next adventure 💡 Tech 💡</li>
            <br></br>
            <li>'20 - Learned to Code - thanks folks at Launch Academy</li>
            <li>
              '21 - Having an IMPACT teaching and building products at{" "}
              {`<code>YourFuture`}
            </li>
            <li>
              '22 - Building out{" "}
              <Button
                style={{ margin: "0px", padding: "0px" }}
                target={"_blank"}
                rel={"noreferer"}
                href="https://techhq.lk"
                type="link"
              >
                TechHQ.lk
              </Button>{" "}
              - a tech focused recruitment platform in Sri Lanka
            </li>
            <li>{text}</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
