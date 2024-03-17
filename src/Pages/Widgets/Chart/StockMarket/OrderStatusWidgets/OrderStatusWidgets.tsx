import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../../AbstractElements";
import { OrdersStatus } from "../../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { orderStatusChart } from "../../../../../Data/Widgets/Chart/WidgetsChart";

const OrderStatusWidgets = () => {
  return (
    <Col xl="7" lg="12" className="box-col-7">
      <Card>
        <CardHeader>
          <H3>{OrdersStatus}</H3>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <ReactApexChart
              id="linechart"
              options={orderStatusChart}
              series={orderStatusChart.series}
              type="line"
              height={350}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatusWidgets;
