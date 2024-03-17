import { Button, Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import StoragePlan from "./StoragePlan";
import PricingPlans from "./PricingPlans";
import { FileFilter } from "../../../../utils/Constant";
import { sideButtons } from "../../../../Data/Apps/FileManager/FileManagerData";
import { useState } from "react";

const FileSideBar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Col xl={3} className="box-col-30 pe-0">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={OnHandelClick}>
          {FileFilter}
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${IsOpen ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <UL className="simple-list">
                  {sideButtons.map((item, index) => (
                    <LI key={index} className="border-0">
                      <div className={item.className}>
                        {item.icon}
                        {item.title}
                      </div>
                    </LI>
                  ))}
                </UL>
                <hr style={{ opacity: 0.25 }} />
                <StoragePlan />
                <hr style={{ opacity: 0.25 }} />
                <PricingPlans />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FileSideBar;
