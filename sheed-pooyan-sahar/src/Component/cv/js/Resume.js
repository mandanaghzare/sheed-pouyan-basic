import React, { useState, useRef, useEffect } from 'react';
import Footer from '../../public/js/footer.js';
import Menu from '../../public/js/menu.js';
import { useDropzone } from 'react-dropzone';

function Resume() {
    let fileVal = useRef();
    fileVal.current = '';
    // useEffect(() => {
    //     console.log(fileVal)
    // })
    const [position, setPosition] = useState(false);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
    const files = acceptedFiles.map((file) => (
        <p ref={fileVal} id="cvfile" key={file.path}>
          {/* {file.path} \ln {file.size/1000} kb */}
        </p>,
        fileVal.current =  `${file.path} - ${file.size/1000}kb`
      ));

      const handleInputClick = () => {
        console.log('handleParentClick');
      }

      const handleLabelClick = (e) => {
        e.stopPropagation();
        console.log('handleLabelClick');
      }      

  return (
    <div className="resume subComponent">
        <Menu />
        <div id="_content">
            <div id="_header">
                <button onClick={() => setPosition(!position)} className={`${position ? 'absolute' : ''}`} id="_resume_sending">ارسال رزومه</button>
                <button onClick={() => setPosition(!position)} className={`${!position ? 'absolute' : ''}`} id="_personal_info">اطلاعات شخصی</button>
            </div>
            <div style={position ? {} : {display:'none'}} className="row" id="_information">
                <div className="col-md-6">
                    <input type="text" placeholder="نام و نام خانوادگی" />
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="شماره تماس" />
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="تحصیلات" />
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="پست الکترونیکی" />
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="جنسیت" />
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="سن" />
                </div>
                <div className="col-md-12" id="_profession">
                    <div id="_choosen">
                        <p>تخصص</p>
                        <ul className="list-unstyled">
                            <li></li>
                        </ul>
                    </div>
                    <div id="_list">
                        <ul className="list-unstyled row">
                            <li className="col-xl-2 col-lg-3 col-md-4">HTML</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">CSS</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Js</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Reactjs</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Git</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">React native</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">HTML</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">CSS</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Js</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">React native</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">HTML</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">CSS</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Js</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Js</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">React native</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">HTML</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">CSS</li>
                            <li className="col-xl-2 col-lg-3 col-md-4">Js</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div {...getRootProps({ className: "dropzone" })} id="_cv" style={position ? {display:'none'} : {}}>
                <input onClick={handleInputClick} type="file" id="_file" {...getInputProps()} />
                <label onClick={handleLabelClick} htmlFor="_file">
                    {fileVal.current == '' ? 'فایل را برای آپلود انتخاب کنید یا بکشید و رها کنید' : files}
                </label>
                <p>رزومه خودتون رو بفرستید بعد از بررسی باهاتون تماس میگیریم</p>
            </div>
            <div className="button">
                <button type="">ارسال</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Resume