import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MultipleCollapseAccordion } from '../../../../utils/Constant'
import CollapesButton from './CollapesButton'
import CollapesBody from './CollapesBody'
import CommonHeader from '../../../../Common/CommonHeader'

const MultipleCollapes = () => {
    const [collapesId, setCollapesId] = useState({
        collapes1: false,
        collapes2: false
    })
    const submenuObj = [
        {
            text: 'A ',
            code: '<button/>'
        },
        {
            text: ' can show and hide multiple elements by update state object true or false'
        }
    ]
    return (
        <Col sm={12}>
            <Card>
                <CommonHeader title={MultipleCollapseAccordion} subTitle={submenuObj}  headClass='pb-0'/>
                <CardBody>
                    <CollapesButton setCollapesId={setCollapesId} collapesId={collapesId} />
                    <CollapesBody collapesId={collapesId} />
                </CardBody>
            </Card >
        </Col >
    )
}

export default MultipleCollapes