import { Card, CardBody, Col, Table } from "reactstrap";
import GridTableHead from "./GridTableHead";
import GridTableBody from "./GridTableBody";
import { GridOption } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const GridOptions = () => {
  const submenuObj = [
    {
      text: "Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={GridOption} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="table-responsive">
            <Table bordered striped>
              <GridTableHead />
              <GridTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptions;
