import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { StockMarkets } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { stockMarketChart } from "../../../../Data/Widgets/Chart/WidgetsChart";

import OrderStatusWidgets from "./OrderStatusWidgets/OrderStatusWidgets";
import MonthlySales from "./MonthlySales/MonthlySales";
import UsesWidgets from "./UsesWidgets/UsesWidgets";

const StockMarket = () => {
  return (
    <Row>
      
      
      <MonthlySales/>
      <UsesWidgets/>
      
    </Row>
  );
};

export default StockMarket;
