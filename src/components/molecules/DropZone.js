import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import uploadImg from '../../images/upload.svg'

function Dropzone(props) {
const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    accept: '.pdf'
  });
  
  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <img src={uploadImg} alt=""></img>
        <p className="dropzone-text">Drag & drop or <a className='link'>browse</a> PDF to upload</p>
        
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4>Rejected files</h4>
        <ul>
          {rejectedFilesItems}
        </ul>
      </aside>
    </section>
  );
}

export default Dropzone