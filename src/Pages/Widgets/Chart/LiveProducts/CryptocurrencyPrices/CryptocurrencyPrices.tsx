import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { CryptocurrencyPrice } from "../../../../../utils/Constant";
import { H3 } from "../../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { cryptoCurrencyPrice } from "../../../../../Data/Widgets/Chart/WidgetsChart";

const CryptocurrencyPrices = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <CardHeader className="card-header">
          <H3>{CryptocurrencyPrice}</H3>
        </CardHeader>
        <CardBody>
          <div className="chart-container crypto-chart">
            <Row>
              <Col xs="12">
                <ReactApexChart
                  id="chart-crypto"
                  options={cryptoCurrencyPrice}
                  series={cryptoCurrencyPrice.series}
                  type="area"
                  height={375}
                />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptocurrencyPrices;
