import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import IconList from "./IconList";
import { PaginationWithIcons } from "../../../../utils/Constant";

const IconPagination = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader
          title={PaginationWithIcons}
          subTitle={[
            {
              text: "Use an icon or symbol in place of text for some pagination links.",
            },
          ]}
          headClass="pb-0"
        />
        <CardBody>
          <IconList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconPagination;
