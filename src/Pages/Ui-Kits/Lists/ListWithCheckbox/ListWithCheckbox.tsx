import {Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem} from "reactstrap";
import { AutoStart, Listswithcheckboxs } from "../../../../utils/Constant";
import { listCheckboxData } from "../../../../Data/Ui-Kits/ListsData";
import CommonHeader from "../../../../Common/CommonHeader";

const ListWithCheckbox = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".form-check-input ",
    },
    {
      text: "to check your checkbox.",
    },
  ];
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Listswithcheckboxs} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="dark-list">
          <ListGroup>
            <ListGroupItem >
              <Input className={`form-check-input me-2 checkbox-primary`} id="firstCheckbox1" type="checkbox"/>
              <Label className={`form-check-label mb-0 txt-primary`} htmlFor="firstCheckbox1"> {AutoStart}</Label>
            </ListGroupItem>
            {listCheckboxData &&
              listCheckboxData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`form-check-input me-2 ${item.class}`} id={item.labelClass} type="checkbox" />
                  <Label className={`form-check-label mb-0 ${item.labelClass}`} htmlFor={item.labelClass} >{item.text} </Label>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListWithCheckbox;
