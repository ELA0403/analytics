import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { HTMLElementsWithHoverEffect, NotificationsReceived } from "../../../../utils/Constant";
import { htmlTooltipData } from "../../../../Data/Ui-Kits/TooltipData";
import CommonHeader from "../../../../Common/CommonHeader";

const HtmlTooltip = () => {
  const [open, setOpen] = useState(false);
  const [setId, setSetId] = useState("");
  const toggle = () => {
    setOpen(!open);
  };
  const submenuObj = [
    {
      text: "Use the ",
      code: "bg-*-light",
    },
    {
      text: " to change light background color and ",
      code: "data-bs-title ",
    },
    {
      text: " to the content under the HTML tag.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={HTMLElementsWithHoverEffect} subTitle={submenuObj}/>
        <CardBody>
          <div className="common-flex">
            <Button color="primary" className="mb-0 me-0" id={"primary2"} onMouseOver={() =>setSetId("primary2")} >
                {NotificationsReceived}
            </Button>
            <Tooltip isOpen={ setId === "primary2" && true} target={"primary2"} toggle={toggle} >
                <><em>{'Thank'}</em> <u>{'you'}</u></>
            </Tooltip>
            {htmlTooltipData &&
              htmlTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} className="mb-0 me-0" id={item.class + 2} onMouseOver={() =>setSetId(item.class+2)} >
                    {item.text}
                  </Button>
                  <Tooltip isOpen={ setId === item.class+2 && true} target={item.class + 2} toggle={toggle} >
                    {item.tooltip}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlTooltip;
