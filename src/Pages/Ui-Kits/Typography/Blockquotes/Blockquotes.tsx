import { Card, CardBody, Col } from "reactstrap";
import { blockQuotesData } from "../../../../Data/Ui-Kits/TypographyData";
import { P } from "../../../../AbstractElements";
import { Blockquotes } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const Blockquote = () => {
  const submenuObj = [
    {
      text: "The ",
      code: "<blockquote>",
    },
    {
      text: " tag specifies a section that is quoted from another source.",
    },
  ];
  return (
    <Col sm={12}>
      <Card className="overflow-hidden">
        <CommonHeader title={Blockquotes} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className='figure d-block dark-blockquote'>
            <blockquote className="blockquote light-card mb-2">
              <P className="mb-0 txt-dark">{'The only impossible journey is the one you never begin.'}</P>
              <figcaption className="blockquote-footer pt-3">
                {'Tony Robbins'}
              </figcaption>
            </blockquote>
          </div>
          {blockQuotesData &&
            blockQuotesData.map((item, index) => (
              <div key={index} className={item.class}>
                <blockquote className="blockquote light-card mb-2">
                  <P className="mb-0 txt-dark">{item.text}</P>
                  <figcaption className="blockquote-footer pt-3">
                    {item.footer}
                  </figcaption>
                </blockquote>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Blockquote;
