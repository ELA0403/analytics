import { Col, InputGroup, Label, Row } from "reactstrap";
import { MultiplesDatesHeading } from "../../../../../utils/Constant";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from "react";

const MultiplesDates = () => {
    const [value, setValue] = useState<DateObject | DateObject[] | null>(new DateObject());
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">
          {MultiplesDatesHeading}
        </Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
            <DatePicker
              monthYearSeparator="::"
              inputClass="form-control"
              multiple
              value={value}
              onChange={setValue}
              format="DD-MM-YYYY"
            />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MultiplesDates;
