import { Fragment } from "react";
import { Alert, Col } from "reactstrap";
import { alertColorData } from "../../../../Data/Ui-Kits/AlertData";
import { P } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const LightColorRight = () => {
  return (
    <Col xl={6}>
      {alertColorData &&
        alertColorData.slice(3).map((item, index) => (
          <Fragment key={index}>
            <P className="mb-0">{item.title} Alert</P>
            <Alert
              color={item.color}
              className={`alert-light-${item.color} border-0`}
            >
              <P className={`txt-${item.color === "light" ? "dark" : item.color}`}>
                This is a
                <Link className={`alert-link txt-${item.color === "light" ? "dark" : item.color}`} to={Href}>
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

export default LightColorRight;
