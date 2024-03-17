import { Alert, Card, CardBody, Col } from "reactstrap";
import { AdditionalContent } from "../../../../utils/Constant";
import { H3, P } from "../../../../AbstractElements";
import { additionalAlertData } from "../../../../Data/Ui-Kits/AlertData";
import CommonHeader from "../../../../Common/CommonHeader";

const AdditionalAlert = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".alert",
    },
    {
      text: " utility class to quickly provide additional content within any alerts.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={AdditionalContent} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="dark-alert">
          {additionalAlertData &&
            additionalAlertData.map((item, index) => (
              <Alert className={`${item.class}`} key={index} color="">
                <H3 className={`alert-heading pb-2 ${item.headclass}`}>
                  {item.head}
                </H3>
                <P className="txt-dark">{item.text}</P>
                <hr />
                <P className="mb-0 txt-dark">{item.subtext}</P>
              </Alert>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalAlert;
