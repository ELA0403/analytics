import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { CenterSlides } from '../../../../utils/Constant'
import CenterMode from './CenterMode'

const CenterSlide = () => {
    const subMenu = [
        {
            text: 'Carousels support swiping left/right on touchscreen devices to move between slides. This can be Center using the ',
            code: 'data-bs-touch '
        },
        {
            text: ' attribute.'
        }
    ]
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={CenterSlides} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <CenterMode />
        </CardBody>
      </Card>
    </Col>
  )
}

export default CenterSlide