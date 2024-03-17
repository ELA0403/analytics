import { Badge, Card, CardBody, Col } from "reactstrap";
import { BadgeHeadings, BadgeHeadingsExample, Checkout, Inbox, Latest, Login, Logout, Trending} from "../../../utils/Constant";
import { H1, H2, H3, H4, H5, H6 } from "../../../AbstractElements";
import CommonHeader from "../../../Common/CommonHeader";

const BadgeHeading = () => {
  const submenuObj = [
    {
      text: "All html headings,",
      code: "<h1>",
    },
    {
      text: "through ",
      code: "<h6>",
    },
    {
      text: ", are available in ",
      code: ".badge ",
    },
    {
      text: "tags.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BadgeHeadingsExample} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <H1 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 1
            <Badge color="primary">{Latest}</Badge>
          </H1>
          <H2 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 2
            <Badge color="secondary">{Trending}</Badge>
          </H2>
          <H3 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 3
            <Badge color="success">{Checkout}</Badge>
          </H3>
          <H4 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 4
            <Badge color="warning">{Inbox}</Badge>
          </H4>
          <H5 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 5
            <Badge color="danger">{Login}</Badge>
          </H5>
          <H6 className="pb-2 d-flex gap-2 flex-wrap">
            {BadgeHeadings} 6
            <Badge color="dark">{Logout}</Badge>
          </H6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeHeading;
