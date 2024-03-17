import { FiPlusSquare, FiUpload } from 'react-icons/fi'
import { Button, CardHeader, Form, Input } from 'reactstrap'
import { AddNew, Upload } from '../../../../utils/Constant'
import SearchBar from './SearchBar'
import { ChangeEvent, useState } from 'react'
import { filesData } from '../../../../Data/Apps/FileManager/FileManagerData'
import msToTime from '../../../../utils/helper/msToTime'
import convertSize from 'convert-size'
import FileContentBody from './FileContentBody'

const FileContent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [myFile, setMyFile] = useState(filesData);
  const fileList = myFile.filter((data) => {
    if (searchTerm == null) return data;
    if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data;
    }
  });
  const getFile = () => {
    document.getElementById('upfile')?.click();
  };
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
  const onFileUpload = () => {
    const date = new Date();
    const time = msToTime(date.getMilliseconds(), 'ago', 'long');
    let myFiles = [...myFile];
    if (selectedFile !== null) {
      myFiles.push({
        icons:"file-excel-o",
        title: `${selectedFile.name}`,
        details: `${convertSize(selectedFile.size)}`,
        color:"success"
      });
      setMyFile(myFiles);
    }
  };
  return (
    <>
      <CardHeader>
        <div className='d-md-flex d-sm-block'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className='flex-grow-1  text-end'>
            <Form className='d-inline-flex'>
              <Button color='primary' className='d-flex align-items-center' onClick={getFile}>
                <FiPlusSquare className='me-1' />
                {AddNew}
              </Button>
              <div style={{ height: '0px', width: '0px', overflow: 'hidden' }}>
                <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
              </div>
            </Form>
            <div color='' className='btn btn-outline-primary ms-2' onClick={onFileUpload}>
              <FiUpload className='me-1' />
              {Upload}
            </div>
          </div>
        </div>
      </CardHeader>
      <FileContentBody myFile={fileList} />
    </>
  )
}

export default FileContent