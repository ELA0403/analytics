import Scrollbars from "react-custom-scrollbars-2";
import { Card, CardBody, Col } from "reactstrap";
import { CustomScrollbar } from "../../../../utils/Constant";
import { H5, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import CommonHeader from "../../../../Common/CommonHeader";

const CustomScroll = () => {
  const submenuObj = [
    {
      text: "Used ",
      code: ".vertical-scroll ",
    },
    {
      text: "and ",
      code: ".scroll-demo ",
    },
    {
      text: "through design scrollbar.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={CustomScrollbar} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo" style={{ width: "100%", height: 300 }} >
            <H5 className="pb-2">{CustomScrollbar}</H5>
            <P>I'm quite interested in learning more about <em className='txt-danger'>custom scrollbars</em> because they are becomingmore and more common.</P>
            <div className="scrollbar-images">
              <Image className="img-fluid" src={dynamicImage("banner/1.jpg")} alt="banner" width={699} height={464}/>
            </div>
            <P>{"There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful."}</P>
            <P>{"I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay."}</P>
            <P>One crucial point to remember is that, depending on the design, a scrollbar
    may operate either{" "}
    <em className="txt-danger">horizontally or vertically</em> . Additionally,
    it might alter when you work on a website that is global and operates in
    both left-to-right and right-to-left orientations.</P>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomScroll;
