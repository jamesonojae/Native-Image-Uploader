import React, {useState} from 'react';
import '../../base.css'
import axios from '../utilities/axios';
import Home from '../Home';


const Upload = () => {
  const [fileInputState, setFileInputState] = useState('');
  // const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const previewFile = (file) => {
    let fileReader = new FileReader();
    // fileReader = fileReader.result as string;
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setPreviewSource(fileReader.result);
    }
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);


  }

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if(!previewSource) return;
   await uploadImage(previewSource);
  }

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await axios.post('/users/uploadImage', {data: base64EncodedImage});
    } catch (e) {
      console.error(e);
    }
  }
  return (
      <div>
        <h1>Upload</h1>
        <form onSubmit={handleSubmitFile} className="form">
          <input type="file" name="image" className="form-input"
          onChange={handleFileInputChange} value={fileInputState}/>
          <button type="submit">Upload</button>
        </form>
        <div>
          <Home />
        </div>
        <div>
          {
            previewSource && (
                <img src={previewSource} alt="image" style={{height: '300px'}}/>
            )
          }
        </div>
      </div>
  );
};

export default Upload;
