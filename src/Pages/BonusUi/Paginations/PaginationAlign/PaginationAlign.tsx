import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { PaginationAlignment } from "../../../../utils/Constant";
import DefaultPagination from "./DefaultPagination";
import AlignCenter from "./AlignCenter";
import AlignBottom from "./AlignBottom";

const PaginationAlign = () => {
  const subMenu = [
    {
      text: "Change the alignment of pagination components with flexbox utilities. For example, with ",
      code: ".justify-content-center:",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={PaginationAlignment} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <DefaultPagination />
          <AlignCenter />
          <AlignBottom />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlign;
