import { useState } from 'react'
import { Alert } from 'reactstrap';
import FeatherIcons from '../../../../utils/CommonSvgIcon/FeatherIcons';
import { P } from '../../../../AbstractElements';
const DarkOutline = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false); 
    return (
        <Alert color="light" isOpen={visible} toggle={onDismiss} className={`txt-success alert-icons border-success outline-2x fade show`}>
            <FeatherIcons iconName='ThumbsUp' />
            <P><strong>{"Well done! "}</strong>{"You successfully read this important message."}</P>
        </Alert>
    )
}

export default DarkOutline