import { Button, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { AboutMe, Address, City, Company, Country, EditProfile, Emailaddress, FirstName, Lastname, PostalCode, UpdateProfile, Username } from '../../../../../utils/Constant'
import { H3 } from '../../../../../AbstractElements'

const EditProfileForm = () => {
  return (
    <Col xl={8} >
      <Form className="card">
        <CardHeader className='pb-0'>
            <H3 className="card-title mb-0">{EditProfile}</H3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label >{Company}</Label>
                <Input type="text" placeholder="Company" />
              </FormGroup>
            </Col>
            <Col sm={6} md={3} >
              <FormGroup>
                <Label>{Username}</Label>
                <Input type="text" placeholder="Username" />
              </FormGroup>
            </Col>
            <Col sm={6} md={4} >
              <FormGroup>
                <Label >{Emailaddress}</Label>
                <Input type="email" placeholder="Email" />
              </FormGroup>
            </Col>
            <Col sm={6} md={6} >
              <FormGroup>
                <Label >{FirstName}</Label>
                <Input type="text" placeholder="Company" />
              </FormGroup>
            </Col>
            <Col sm={6} md={6} >
              <FormGroup>
                <Label >{Lastname}</Label>
                <Input type="text" placeholder="Last Name" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label >{Address}</Label>
                <Input type="text" placeholder="Home Address" />
              </FormGroup>
            </Col>
            <Col sm={6} md={4} >
              <FormGroup>
                <Label >{City}</Label>
                <Input type="text" placeholder="City" />
              </FormGroup>
            </Col>
            <Col sm={6} md={3} >
              <FormGroup>
                <Label >{PostalCode}</Label>
                <Input type="number" placeholder="ZIP Code" />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label>{Country}</Label>
                <Input type='select' className="btn-square form-select">
                  <option>{'Select'}</option>
                  <option>{'Germany'}</option>
                  <option>{'Canada'}</option>
                  <option>{'Usa'}</option>
                  <option>{'Aus'}</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12}>
              <Label>{AboutMe}</Label>
              <textarea className="form-control" rows={3} placeholder="Enter About your description" />
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-end">
            <Button color="primary" type="submit">{UpdateProfile}</Button>
        </CardFooter>
      </Form>
    </Col>
  )
}

export default EditProfileForm