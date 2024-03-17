import { Card, CardBody, Col } from "reactstrap";
import { H5, H6, P } from "../../../../AbstractElements";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { averagePerDayData } from "../../../../Data/Widgets/General/General";
import ReactApexChart from "react-apexcharts";

const AverageSales = () => {
  return (
    <>
      {averagePerDayData.map((data,index) => (
        <Col xxl="3" sm="6" key={index}>
          <Card>
            <CardBody className="radial-progress-card">
              <div>
                <H6 className="mb-0">{data.header}</H6>
                <div className="sale-details">
                  <H5 className={`font-primary mb-0`}>{data.count}</H5>
                  <span className="f-14 f-light f-w-600">
                    <FeatherIcons iconName="ArrowUp" />
                    {data.per}
                  </span>
                </div>
                <P className="f-light"> {data.description}</P>
              </div>
              <div className="radial-chart-wrap">
                <ReactApexChart
                  id={data.id}
                  options={data.chart}
                  series={data.chart.series}
                  type="radialBar"
                  height="130"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default AverageSales;
