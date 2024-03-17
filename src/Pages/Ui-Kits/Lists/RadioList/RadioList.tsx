import { Card, CardBody,Col,Input, Label, ListGroup, ListGroupItem} from "reactstrap";
import { Listswithradios, Meditations } from "../../../../utils/Constant";
import { listRadioData } from "../../../../Data/Ui-Kits/ListsData";
import CommonHeader from "../../../../Common/CommonHeader";

const RadioList = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "to check your radio buttons.",
    },
  ];
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Listswithradios} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <ListGroup>
            <ListGroupItem >
              <Input className="form-check-input me-2 checkbox-danger active" id="firstRadio" type="radio" name="listGroupRadio" />
              <Label className="form-check-label mb-0" htmlFor="firstRadio">{Meditations}</Label>
            </ListGroupItem>
            {listRadioData &&
              listRadioData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`form-check-input me-2 ${item.class}`} id={`firstRadio${index}`} type="radio" name="listGroupRadio"/>
                  <Label className="form-check-label mb-0" htmlFor={`firstRadio${index}`} >{item.text} </Label>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioList;
