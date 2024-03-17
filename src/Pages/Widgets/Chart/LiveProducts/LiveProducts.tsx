import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { LiveProduct } from "../../../../utils/Constant";
import Turnover from "./Turnover/Turnover";
import CryptocurrencyPrices from "./CryptocurrencyPrices/CryptocurrencyPrices";
import CryptoAnnotations from "./CryptoAnnotations/CryptoAnnotations";
import ReactApexChart from "react-apexcharts";
import { liveProductChart } from "../../../../Data/Widgets/Chart/WidgetsChart";
import Finance from "./Finance/Finance";
import SkillStatus from "./SkillStatus/SkillStatus";
import BarChartClass from '/Users/khaoula/Downloads/themeforest-dqHsE3Oe-cion-react-js-admin-dashboard-template/Template With Placeholder/src/Pages/Widgets/Chart/LiveProducts/BarChartClass/BarChartClass'
import BalanceOverview from "/Users/khaoula/Downloads/themeforest-dqHsE3Oe-cion-react-js-admin-dashboard-template/Template With Placeholder/src/Pages/Widgets/Chart/LiveProducts/BalanceOverview/BalanceOverview";
const LiveProducts = () => {
  return (
    <Row>
      <Col xl="7" lg="12" className="xl-50">
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CardHeader>
              <H3>{LiveProduct}</H3>
            </CardHeader>
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <ReactApexChart
                      id="chart-widget6"
                      options={liveProductChart}
                      series={liveProductChart.series}
                      type="area"
                      height={320}
                    />
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>

      <Finance />
      <CryptocurrencyPrices />
      <BarChartClass />
      <SkillStatus />
      <BalanceOverview />
      
    </Row>
  );
};

export default LiveProducts;
