import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { MonthlyHistorys } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { monthlyHistoryChart } from "../../../../Data/Widgets/Chart/WidgetsChart";

import OrderStatus from "./OrderStatus/OrderStatus";
import { H3 } from "../../../../AbstractElements";

const MonthlyHistory = () => {
  return (
    <Row>
      <Col md="12" className="box-col-12">
        <Card className="o-hidden">
          <CardHeader>
            <H3>{MonthlyHistorys}</H3>
          </CardHeader>
          <div className="bar-chart-widget">
            <CardBody className="bottom-content">
              <Row>
                <Col xs="12">
                  <ReactApexChart
                    id="chart-widget4"
                    options={monthlyHistoryChart}
                    series={monthlyHistoryChart.series}
                    type="bar"
                    height={380}
                  />
                </Col>
              </Row>
            </CardBody>
          </div>
        </Card>
      </Col>
     
      
    </Row>
  );
};

export default MonthlyHistory;
