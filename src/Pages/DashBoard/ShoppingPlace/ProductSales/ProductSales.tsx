import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { ProductSale } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { productSalesChart } from "../../../../Data/Dashboard/ShoppingPlace/ChartData";

const ProductSales = () => {
  return (
    <Col xl="4" md="6" sm="12" className="box-col-4 order-xl-1">
      <Card className="product-chart">
        <CardHeader className="pb-0">
          <div className="header-top">
            <H3 className="m-0">{ProductSale}</H3>
          </div>
        </CardHeader>
        <CardBody className="pb-0">
          <div className="d-flex">
            <H3 className="me-2">$12,000</H3>
            <span>(15,080 To Goal)</span>
          </div>
          <ReactApexChart
            id="product-sales"
            options={productSalesChart}
            series={productSalesChart.series}
            height={295}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductSales;
