import { Badge, Card, CardBody, Col } from "reactstrap";
import { NumberofPills } from "../../../utils/Constant";
import { numberPillsData } from "../../../Data/Ui-Kits/TagPillsData";
import CommonHeader from "../../../Common/CommonHeader";

const NumberPills = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".rounded-circle",
    },
    {
      text: " utility class to make badges more rounded with a larger ",
      code: "border-radius",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={NumberofPills} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="badge-spacing">
            <Badge className='rounded-circle badge-p-space' color="primary">1</Badge>
            {numberPillsData &&
              numberPillsData.map((item, index) => (
                <Badge
                  className='rounded-circle badge-p-space' color={item.class}
                  key={index}
                >
                  {item.text}
                </Badge>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NumberPills;
