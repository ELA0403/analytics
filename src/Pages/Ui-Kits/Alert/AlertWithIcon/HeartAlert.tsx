import { useState } from 'react'
import { Alert, Button } from 'reactstrap'
import { Alerts } from '../../../../utils/Constant'
import { P } from '../../../../AbstractElements'

const HeartAlert = () => {
    const [active, setActive] = useState(true)
    return (
        <Alert color='light' className={`border-danger alert-dismissible fade p-0 mb-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-danger">
                <i className="icon-heart" />
            </div>
            <P>{"Oh snap! Change a few things up "}<strong className="txt-dark">{" Notification check"}</strong></P>
            <Button className="p-0 border-0 me-2 ms-auto" onClick={() => { setActive(false) }} >
                <span className="bg-danger text-white px-3 py-1">{Alerts}</span>
            </Button>
        </Alert>
    )
}

export default HeartAlert