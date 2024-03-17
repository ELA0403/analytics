import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FeatherIcon, Icons } from "../../../utils/Constant";
import { H3, H6 } from "../../../AbstractElements";
import { featherIconsData } from "../../../Data/Icons/FeatherIconData";
import { useState } from "react";
import IconBottom from "../IconBottom";
const FeathersIcons = () => {
  const featherIcons = require("feather-icons");
  const [iTag, setITag] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [data,setData] = useState<boolean>(false)
  const getItag = (item: string) => {
    setData(!data)
    setITag('<i data-feather="' + item + '"></i>');
    setIcon(item);
  };
  return (
    <>
      <Breadcrumbs mainTitle={FeatherIcon} parent={Icons} title={FeatherIcon} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H3 className="m-b-0">
                  <span className="digits">{FeatherIcon}</span> {Icons}
                </H3>
              </CardHeader>
              <CardBody>
                <Row className="icon-lists feather-icons">
                  {featherIconsData.map((singleIcon: string, i) => (
                    <Col xs="12" sm="6" xl="4" key={i} onClick={(e) => getItag(singleIcon)}>
                      <div className="d-flex">
                        <div dangerouslySetInnerHTML={{ __html:featherIcons.icons[singleIcon].toSvg(singleIcon)}}/>
                        <div className="flex-grow-1 align-self-center">
                          <H6 className="mt-0">{singleIcon}</H6>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconBottom iTag={iTag} icon={icon} data={data}/>
    </>
  );
};

export default FeathersIcons;
