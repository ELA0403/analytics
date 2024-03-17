import { Accordion, Alert, Animations, Avatar, BonusUi, Dropdowns, Grid, Order_list, Tabs, Tagpills, Typography, UiKits } from "../../../../utils/Constant";
import { Col } from "reactstrap";
import { H6, LI } from "../../../../AbstractElements";

const OrderList = () => {
  return (
    <Col md={6} xxl={4}>
      <div className="card-wrapper border rounded-3 h-100">
        <H6 className="sub-title fw-bold">{Order_list}</H6>
        <ol>
          <LI>{UiKits}</LI>
          <LI>{BonusUi}</LI>
          <LI>{Animations}</LI>
          <LI>
            <ol>
              <LI>{Typography}</LI>
              <LI>{Avatar}</LI>
              <LI>{Grid}</LI>
              <LI>{Tagpills}</LI>
              <LI>{Alert}</LI>
            </ol>
          </LI>
          <LI>{Dropdowns}</LI>
          <LI>{Tabs}</LI>
          <LI>{Accordion}</LI>
        </ol>
      </div>
    </Col>
  );
};

export default OrderList;
