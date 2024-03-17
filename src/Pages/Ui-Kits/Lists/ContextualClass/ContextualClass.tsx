import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Contextualclasses, Href } from "../../../../utils/Constant";
import { contextualListsData } from "../../../../Data/Ui-Kits/ListsData";
import CommonHeader from "../../../../Common/CommonHeader";

const ContextualClass = () => {
  const submenuObj = [
    {
      text: "Use contextual classes to style list items with a stateful background and color.",
      code: ".list-light-*",
    },
    {
      text: " and ",
      code: "txt-*.",
    },
  ];
  return (
    <Col xxl={6} sm={12} className="box-col-12">
      <Card>
        <CommonHeader title={Contextualclasses} subTitle={submenuObj} headClass="pb-0" />
        <CardBody>
          <ListGroup>
            <ListGroupItem className={`list-group-item-action list-light-primary`} to={Href} >
              This is Primary bg you can use{" "}
              <em className="txt-primary fw-bold">
                .list-light-primary
              </em>{" "}
              class.
            </ListGroupItem>
            {contextualListsData &&
              contextualListsData.map((item, index) => (
                <ListGroupItem className={`list-group-item-action list-light-${item.color}`} key={index} to={Href}>
                  This is {item.title} bg you can use{" "}
                  <em className={`txt-${item.color} fw-bold`}>
                    .list-light-{item.color}
                  </em>{" "}
                  class.
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;
