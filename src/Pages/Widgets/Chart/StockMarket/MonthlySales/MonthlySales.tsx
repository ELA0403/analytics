import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { MonthlySale } from "../../../../../utils/Constant";
import { H3 } from "../../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { monthlySalesChart } from "../../../../../Data/Widgets/Chart/WidgetsChart";

const MonthlySales = () => {
  return (
    <Col xl="5" lg="12" className="xl-50 box-col-5">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H3>{MonthlySale}</H3>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart
                    id="chart-widget8"
                    options={monthlySalesChart}
                    series={monthlySalesChart.series}
                    type="radar"
                    height={300}
                  />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default MonthlySales;
