import { useState } from 'react'
import { Button, Card, CardBody, Col, Collapse } from 'reactstrap'
import { ButtonwithEvent, CollapseAccordions, Linkwithhref } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'

const CollapesAccordion = () => {
    const [open, setOpen] = useState(false)
    const submenuObj = [
        {
            text: 'you can change state by using',
            code: ' onClick'
        },
        {
            text: ' event and change toggle show and close and you can use this accordion without any collaps class.'
        }
    ]
    return (
        <Col md={6} sm={12}>
            <Card>
                <CommonHeader title={CollapseAccordions} subTitle={submenuObj} headClass='pb-0'/>
                <CardBody>
                    <div className='common-flex'>
                        <Button color="dark" onClick={() => setOpen(!open)} >{Linkwithhref}</Button>
                        <Button color='dark' onClick={() => setOpen(!open)} >{ButtonwithEvent}</Button>
                    </div>
                    <Collapse className={`btn-dark ${open && 'show'} mt-3`}>
                        <CardBody className="mb-0 dark-accordion text-white">{"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}</CardBody>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CollapesAccordion