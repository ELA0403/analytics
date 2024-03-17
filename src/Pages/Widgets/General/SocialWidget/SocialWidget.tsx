import { socialWidgetsData } from "../../../../Data/Widgets/General/General";
import { Card, CardBody, Col } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import ReactApexChart from "react-apexcharts";

const SocialWidget = () => {
  return (
    <>
      {socialWidgetsData.map((data,index) => (
        <Col xl="3" sm="6" key={index}>
          <Card className="social-widget">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div className="social-icons">
                    <Image
                      src={dynamicImage(`dashboard-2/social/${data.img}.png`)}
                      alt={data.alt}
                    />
                  </div>
                  <span>{data.title}</span>
                </div>
                <span className="font-success f-14 d-xxl-block d-xl-none">
                  {data.count}
                </span>
              </div>
              <div className="social-content">
                <div>
                  <h5 className="mb-1">{data.followers}</h5>
                  <span className="f-light">{data.content}</span>
                </div>
                <div className="social-chart">
                  <ReactApexChart id={data.id} options={data.chart} series={data.chart.series} type="radialBar" height="130" />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SocialWidget;
