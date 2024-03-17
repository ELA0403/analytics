import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { CryptoAnnotation } from "../../../../../utils/Constant";
import { H3 } from "../../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { cryptoAnnotationChart } from "../../../../../Data/Widgets/Chart/WidgetsChart";

const CryptoAnnotations = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <CardHeader>
          <H3>{CryptoAnnotation}</H3>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs="12">
                <ReactApexChart
                  id="crypto-annotation"
                  options={cryptoAnnotationChart}
                  series={cryptoAnnotationChart.series}
                  type="line"
                  height={400}
                />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptoAnnotations;
