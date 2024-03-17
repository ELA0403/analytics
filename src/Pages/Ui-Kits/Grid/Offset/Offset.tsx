import { Card, CardBody, CardFooter, Col } from "reactstrap";
import OffsetBody from "./OffsetBody";
import OffsetDataTable from "./OffsetDataTable";
import { Offsets } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const Offset = () => {
  const submenuObj = [
    {
      text: "You can offset the grid column using ",
      code: ".offset-",
    },
    {
      text: " grid class.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Offsets} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <OffsetBody />
        </CardBody>
        <CardFooter>
          <OffsetDataTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Offset;
