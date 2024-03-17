import { Card, CardBody, Col, Row } from 'reactstrap'
import GalleryImageDescription from '../../SearchResult/SearchTabContent/PhotosTab/GalleryImageDescription'

const PhotosTab = () => {
  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CardBody className="my-gallery row gallery-with-description">
            <GalleryImageDescription />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default PhotosTab