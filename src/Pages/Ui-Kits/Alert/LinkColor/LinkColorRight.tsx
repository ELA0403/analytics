import  { Fragment } from "react";
import { Alert, Col } from "reactstrap";
import { alertColorData } from "../../../../Data/Ui-Kits/AlertData";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";

const LinkColorRight = () => {
  return (
    <Col xl={6}>
      {alertColorData &&
        alertColorData.slice(3).map((item, index) => (
          <Fragment key={index}>
            <P className="mb-0">{item.title} Alert</P>
            <Alert color={item.color} className="dark">
              <P>
                This is a 
                <Link className={`alert-link ${item.color === "light" ? "text-dark" : "text-white"}`} to={Href}>
                   {item.color} alert{" "}
                </Link>{" "}
                with an example link.Check it out.
              </P>
            </Alert>
          </Fragment>
        ))}
    </Col>
  );
};

export default LinkColorRight;
