import { Form, FormGroup, Input, Label } from 'reactstrap'
import { Messages, Subject, To } from '../../../../utils/Constant'
import SimpleMDE from "react-simplemde-editor";
import Dropzone from 'react-dropzone-uploader';
import { useState } from 'react';

const EmailComposeForm = () => {
  const getUploadParams = () => { return { url: 'https://httpbin.org/post' } }
  const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
  const handleChange = () => {setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.");};
  return (
    <div className="email-wrapper">
      <Form className="theme-form">
        <FormGroup>
          <Label className="col-form-label pt-0">{To}</Label>
          <Input type="email" value={""}/>
        </FormGroup>
        <FormGroup>
          <Label className="col-form-label pt-0">{Subject}</Label>
          <Input type="text" value={""}/>
        </FormGroup>
        <FormGroup>
          <Label className="col-form-label pt-0">{Messages}</Label>
          <SimpleMDE
            id="editor_container"
            onChange={handleChange}
            value={text}
            options={{ autofocus: true, spellChecker: false }}
          />
        </FormGroup>
        <FormGroup>
          <Dropzone
            getUploadParams={getUploadParams}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            inputContent="Drop files here or click to upload."
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default EmailComposeForm;
