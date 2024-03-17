import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import { P } from "../../../../AbstractElements";
import { Href, LinkColorInLightTheme, PrimaryLightAlert } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import { alertColorData } from "../../../../Data/Ui-Kits/AlertData";
import LightColorRight from "./LightColorRight";
import CommonHeader from "../../../../Common/CommonHeader";

const LightColorAlert = () => {
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
        <CommonHeader title={LinkColorInLightTheme} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Row>
          <Col xl={6}>
              <P className="mb-0">{PrimaryLightAlert}</P>
              <Alert color="primary" className="alert-light-primary border-0">
                <P className="txt-primary">
                  This is a
                  <Link className="alert-link  txt-primary" to={Href}>
                    primary alert{" "}
                  </Link>{" "}
                  with an example link.Check it out.
                </P>
              </Alert>
              {alertColorData &&
                alertColorData.slice(0,3).map((item, index) => (
                  <Fragment key={index}>
                    <P className="mb-0">{item.title} Alert</P>
                    <Alert color={item.color} className={`alert-light-${item.color} border-0`}>
                      <P className={`txt-${item.color}`}>
                        This is a
                        <Link className={`alert-link txt-${item.color}`} to={Href}>
                          {item.color} alert{" "}
                        </Link>{" "}
                        with an example link.Check it out.
                      </P>
                    </Alert>
                  </Fragment>
                ))}
            </Col>
            <LightColorRight />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightColorAlert;
