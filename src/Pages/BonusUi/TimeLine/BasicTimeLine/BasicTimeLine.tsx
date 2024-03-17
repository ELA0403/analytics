import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BasicTimeline } from "../../../../utils/Constant";
import { basicTimeLineData } from "../../../../Data/BonusUi/TimeLineData";
import { H3, LI, P, UL } from "../../../../AbstractElements";

const BasicTimeLine = () => {
  const subMenu = [
    {
      text: "Use the ",
      code: ".main-basic-timeline ",
    },
    {
      text: "class through made basic timeline.",
    },
  ];
  return (
    <Col xl={6} className=" box-col-6 notification main-timeline">
      <Card className="height-equal">
        <CommonHeader title={BasicTimeline} subTitle={subMenu} headClass="pb-0" />
        <CardBody className="dark-timeline">
          <UL className="simple-list">
            {basicTimeLineData &&
              basicTimeLineData.map((item, index) => (
                <LI className="d-flex" key={index}>
                  <div className={item.class} />
                  <div className="w-100 ms-3">
                    <P className="d-flex justify-content-between mb-2">
                      <span className="date-content light-background">
                        {item.date}
                      </span>
                      <span>{item.time}</span>
                    </P>
                    <H3>
                      {item.title}
                      <span className="dot-notification" />
                    </H3>
                    <P className="f-light">{item.text}</P>
                  </div>
                </LI>
              ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTimeLine;
