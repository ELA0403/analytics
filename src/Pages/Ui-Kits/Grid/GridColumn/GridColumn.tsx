import { Card, CardBody, Col, Row } from "reactstrap";
import { gridColumnData } from "../../../../Data/Ui-Kits/GridData";
import { GridForColumn } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const GridColumn = () => {
  const submenuObj = [
    {
      text: "You may use predefined grid classes. Using ",
      code: ".col-md-*",
    },
    {
      text: "you can set the grid system.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={GridForColumn} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <Row>
            {gridColumnData &&
              gridColumnData.map((item, index) => (
                <div className={`text-center ${item.class}`} key={index}>
                  <span>{item.text}</span>
                </div>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumn;
