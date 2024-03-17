import { Card, CardBody, Col } from 'reactstrap'
import ColoredHeadingsBody from './ColoredHeadingsBody'
import { ColoredHeading } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'

const ColoredHeadings = () => {
    const submenuObj = [
        {
            text: "All HTML headings, ",
            code: '<h1>'
        },
        {
            text: ' through',
            code: '<h6>'
        },
        {
            text: ', are available.'
        }
    ]
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonHeader title={ColoredHeading} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <ColoredHeadingsBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColoredHeadings