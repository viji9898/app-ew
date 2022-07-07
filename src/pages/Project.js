// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
import { Avatar, Card, Row, Col } from "antd";
const { Meta } = Card;

export const Projects = () => {
  const stealthModeImage =
    "https://app-viji.s3.eu-west-2.amazonaws.com/sleathMode-01.png";

  return (
    <div style={{ margin: "25px" }}>
      <Row justify="center" gutter={[18, 16]}>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            bordered={true}
            cover={
              <img
                alt="example"
                src="https://jdevs-app.s3.eu-west-2.amazonaws.com/02-og-images/techJobs-og-image-01.png"
              />
            }
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/male/random" />}
              title={
                <a target={"_blank"} rel="noreferrer" href="https://techhq.lk">
                  techHQ.lk
                </a>
              }
              description="tech recruitment platform"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://app-viji.s3.eu-west-2.amazonaws.com/sleathMode-01.png"
              />
            }
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="techTalent.lk"
              description="Under Developement"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={stealthModeImage} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="daas.lk"
              description="Under Developement"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={stealthModeImage} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="founders.lk"
              description="Under Developement"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={stealthModeImage} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Marriott Weligama Bay Case Study"
              description="Under Developement"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={stealthModeImage} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="cyberSunil"
              description="Under Developement"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 300,
            }}
            cover={<img alt="example" src={stealthModeImage} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="techforgood.lk"
              description="Under Developement"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
