import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Image, P } from '../../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../../Service'
import { PaymentMethodOptionPropsType } from '../../../../../../../Types/Forms/FormLayout/FormWizardTypes'
import CreditCardForm from './CreditCardForm'
import { CreditCard } from '../../../../../../../utils/Constant'

const CreditCardOption = ({paymentMethodName,getUserData,}: PaymentMethodOptionPropsType) => {
  return (
    <Col xs={12}>
      <div className="card-wrapper border rounded-3 pay-info light-card">
        <div>
          <div>
            <FormGroup check className="radio radio-primary">
              <Input id="shipping-choose6" type="radio" name="paymentMethodName" value="creditCard" checked={paymentMethodName === "creditCard"} onChange={getUserData}/> 
              <Label className="form-check-label mb-0 f-w-500" htmlFor="shipping-choose6">{CreditCard}</Label>
            </FormGroup>
            <P>{"Transferring money securely through your bank account. Mastercard, Visa, Discover, and Stripe are all accepted"}</P>
          </div>
          <div>
            <Image
              width={101}
              height={50}
              src={dynamicImage('forms/credit-card.png')}
              alt="card"
            />
          </div>
        </div>
        <CreditCardForm />
      </div>
    </Col>
  )
}

export default CreditCardOption