import { Row, Col } from "antd";

export const QrCodes = () => {
  return (
    <Row justify="center" gutter={18}>
      <Col xs={24} sm={12} md={12} lg={8}>
        <img
          alt="qr-code contact information"
          width={"100%"}
          src="https://app-viji.s3.eu-west-2.amazonaws.com/qr-code-vcard.svg"
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={8}>
        <a
          href="https://www.linkedin.com/in/vijiw/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            alt="qr-code linkedin"
            width={"100%"}
            src="https://app-viji.s3.eu-west-2.amazonaws.com/qr-code-linkedin.svg"
          />
        </a>
      </Col>
    </Row>
  );
};
