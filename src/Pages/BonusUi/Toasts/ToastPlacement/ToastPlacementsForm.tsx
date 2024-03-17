import { Form, FormGroup, Input } from "reactstrap";
import ToastPlacementsBody from "./ToastPlacementsBody";
import { toastPlacementData } from "../../../../Data/BonusUi/ToastData";
import { useState } from "react";
import { Selectposition } from "../../../../utils/Constant";

const ToastPlacementsForm = () => {
    const [data,setData] = useState("")
  return (
    <>
      <Form>
        <FormGroup>
            <Input name="select" type="select" className="form-select mt-2"  onChange={(e)=>setData(e.target.value)}>
                <option>{Selectposition}</option>
                {toastPlacementData.map((data,index)=>(
                    <option value={data.class} key={index}>{data.title}</option>
                ))}
            </Input>
        </FormGroup>
      </Form>
      <ToastPlacementsBody data={data} />
    </>
  );
};

export default ToastPlacementsForm;
