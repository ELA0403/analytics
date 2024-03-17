import { useState } from "react";
import { H5, P } from "../../../../AbstractElements";
import { Href, InlineTooltipContent, Toolstip } from "../../../../utils/Constant";
import { Button, Tooltip } from "reactstrap";
import { Link } from "react-router-dom";

const InlineTooltip = () => {
  const [open, setOpen] = useState(false);
  const [showId, setShowId] = useState<string>("");
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <H5 className="mb-1 py-4 pb-0">{InlineTooltipContent}</H5>
      <P className="mb-3">
        {" "}
        {"Here, is some content about tooltips that you can set the"}
        <Link to={Href} className="txt-primary fw-bold" id="Tooltip1" onMouseEnter={() =>  setShowId("Tooltip1")}>
          {" "}
          {Toolstip}
        </Link>{" "}
        {" .Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
        <Button color="success" id="Tooltip2" onMouseEnter={() => setShowId("Tooltip2")} className="text-white border-0 ms-1 px-3 py-1 me-0 mb-0">
          {"button"}
        </Button>
        {" .Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
      </P>
      <Tooltip isOpen={open === true && showId === "Tooltip1" && true} target="Tooltip1" toggle={toggle} >
        {"Popover text"}
      </Tooltip>
      <Tooltip isOpen={open === true && showId === "Tooltip2" && true} target="Tooltip2" toggle={toggle}>
        {"button"}
      </Tooltip>
    </div>
  );
};

export default InlineTooltip;
