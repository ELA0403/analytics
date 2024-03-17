import { useState } from 'react'
import FeatherIcons from '../../../../utils/CommonSvgIcon/FeatherIcons';
import { Alert } from 'reactstrap';
import { P } from '../../../../AbstractElements';

const LightOutline = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false); 
    return (
        <Alert color="light" isOpen={visible} toggle={onDismiss} className={`txt-primary border-primary fade show`}>
            <FeatherIcons iconName='Clock' />
            <P>{"One of "}<strong>{"YouTube's"}</strong>{"most crucial ranking factors is Watch Time."}</P>
        </Alert>
    )
}

export default LightOutline