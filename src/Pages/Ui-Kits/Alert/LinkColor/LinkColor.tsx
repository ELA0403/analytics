import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import { alertColorData } from "../../../../Data/Ui-Kits/AlertData";
import {
  Href,
  LinkColorInDarkTheme,
  PrimaryAlert,
} from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import LinkColorRight from "./LinkColorRight";
import { P } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const LinkColor = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".alert-link",
    },
    {
      text: " utility class to quickly provide matching colored links within any alert",
    },
  ];
  return (
    <Col xl={12}>
      <Card>
        <CommonHeader title={LinkColorInDarkTheme} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Row>
            <Col xl={6}>
              <P className="mb-0">{PrimaryAlert}</P>
              <Alert color="primary" className="dark">
                <P>
                  This is a
                  <Link className="alert-link  text-white" to={Href}>
                    primary alert{" "}
                  </Link>{" "}
                  with an example link.Check it out.
                </P>
              </Alert>
              {alertColorData &&
                alertColorData.slice(0,3).map((item, index) => (
                  <Fragment key={index}>
                    <P className="mb-0">{item.title} Alert</P>
                    <Alert color={item.color} className="dark">
                      <P>
                        This is a
                        <Link className="alert-link text-white" to={Href}>
                          {item.color} alert{" "}
                        </Link>{" "}
                        with an example link.Check it out.
                      </P>
                    </Alert>
                  </Fragment>
                ))}
            </Col>
            <LinkColorRight />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkColor;
