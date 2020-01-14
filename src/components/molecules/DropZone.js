import React, { useState, useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import uploadImg from '../../images/upload.svg'
import pdf from '../../images/icons/pdf-3.svg'

function hideandshow(){
    const dropz = document.getElementsByClassName('dropzone');
    const upz = document.getElementsByClassName('uploaded-zone');
    const lup = document.getElementsByClassName('link-upload');
    dropz[0].classList.toggle('dropzone--disabled');
    upz[0].classList.toggle('uploaded-zone--disabled');
    lup[0].classList.toggle('link-upload--disabled');
}

function Dropzone(props) {
  let titleState = "Paper Upload";
  const [myFiles, setMyFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles]);
    hideandshow();
    titleState = "Paper PDF";
  })

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf',
    maxSize: 15000000,
    multiple: false,
  })

  const removeFile = file => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    hideandshow();
    setMyFiles(newFiles);
  }

  const files = myFiles.map(file => (
    <div key={file.path}>
      <div className="uf-section-title">
        <h4 className="title title--sm2">{file.path}</h4>
        <p className="sub-title sub-title--small">{Math.round(file.size /1000000)} MB</p>
      </div>
      <button className="remove-button" onClick={removeFile(file)}></button>
   </div>
  ));

  return (
    <section className="dropzone-container">
      <h4 className="title title--sm3">{titleState}<p className="star">*</p></h4>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} id="file"/>
        <img src={uploadImg} alt=""></img>
        <p className="dropzone-text">Drag & drop or <a className='link'>browse</a> PDF to upload</p>     
      </div>
      <div className="uploaded-zone uploaded-zone--disabled">
        <div className="uploaded-file">
          {<img src={pdf} alt=""></img>}
          {files}
        </div>
      </div>
    </section>
  );
}

export default Dropzone