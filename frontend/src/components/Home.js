import React, {useEffect, useState} from 'react';
import axios from './utilities/axios';
import {Image} from 'cloudinary-react';

const Home = () => {
  const [images, setImages] = useState('');
  const [imageIds, setImagesIds] = useState('');

  const loadImages = async () => {
    try {
    const res = await axios.get('/users/getImages');
    // const data = await  res.json();
      console.log(res)
    setImagesIds(res.data);
      console.log(imageIds);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(async () => {
    await loadImages()
  }, [])
  return (
      <>
       <h1 className="title">Home</h1>
        {
          imageIds && imageIds.map((imageId, index) => (
              <Image
                  key={index}
                  cloudName="nextagric-com"
                  publicId={imageId}
                  width="300"
                  crop="scale"
              />
          ))
        }
      </>
  );
};

export default Home;
