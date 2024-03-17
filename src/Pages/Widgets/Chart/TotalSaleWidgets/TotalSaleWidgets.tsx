import { Card, Col, Row } from "reactstrap";
import { saleChartData } from "../../../../Data/Widgets/Chart/Chart";
import { H3, H4, H6 } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {saleChartData.map((data, index) => (
        <Col xl="3" md="12" className="box-col-4" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <Row className="card-body pb-0 m-0">
                <Col xl="9" lg="8" xs="9" className="p-0">
                  <H3 className="mb-2">{data.title}</H3>
                  <H4>{data.amount}</H4>
                  <span>{data.description}</span>
                </Col>
                <Col xl="3" lg="4" xs="3" className="text-end p-0">
                  <H6 className="txt-success">{data.per}</H6>
                </Col>
              </Row>
              
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;
