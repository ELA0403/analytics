import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { SkillStatuss } from "../../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { skillChart } from "../../../../../Data/Widgets/Chart/WidgetsChart";
import { H3 } from "../../../../../AbstractElements";

const SkillStatus = () => {
  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <CardHeader>
          <H3>{SkillStatuss}</H3>
        </CardHeader>
        <CardBody>
          <div className="chart-container skill-chart">
            <ReactApexChart
              id="circlechart"
              options={skillChart}
              series={skillChart.series}
              type="radialBar"
              height={375}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SkillStatus;
