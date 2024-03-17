import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { FilledTooltip, TooltipPrimary } from "../../../../utils/Constant";
import { flippedtooltipData } from "../../../../Data/Ui-Kits/TooltipData";
import CommonHeader from "../../../../Common/CommonHeader";

const Filledtooltip = () => {
  const [open, setOpen] = useState(false);
  const [setId, setSetId] = useState("");
  const toggle = () => {
    setOpen(!open);
  };
  const submenuObj = [
    {
      text: "Tooltip in hover effect through fill dark color.",
      code: "[.btn-outline-*]",
    },
    {
      text: ". and",
      code: "data-bs-title ",
    },
    {
      text: "to the content under the HTML Tag.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={FilledTooltip} subTitle={submenuObj} />
        <CardBody className="fill-tooltip">
          <div className="common-flex">
            <Button color="outline" className="mb-0 me-0 btn-outline-primary" id="btn-outline-primary" onMouseOver={() => setSetId("btn-outline-primary")} >
                {TooltipPrimary}
            </Button>
            <Tooltip isOpen={ setId === "btn-outline-primary" && true} target="btn-outline-primary" toggle={toggle} >
              {TooltipPrimary}
            </Tooltip>
            {flippedtooltipData &&
              flippedtooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color="outline" className={`mb-0 me-0 ${item.class}`} id={item.class} onMouseOver={() => setSetId(item.class)} >
                    {item.text}
                  </Button>
                  <Tooltip isOpen={ setId === item.class && true} target={item.class} toggle={toggle} >
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

export default Filledtooltip;
