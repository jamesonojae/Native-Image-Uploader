const util = require('util');
const { cloudinary } = require('../utility/cloudinary');

exports.testRoute = (req, res) => {
  res.send({ message: 'Welcome to NExtAgric Web registration.' });
};

exports.uploadImage = async (req, res) => {
  try {
    // console.log('here', req.body.data);
    const fileStr = req.body.data;
    const uploadImageResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'nxe2cmfy',
      folder: 'test-directory',
      use_filename: true
    });
    console.log(uploadImageResponse);
    console.log(fileStr);
    res.send({ message: 'Upload successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error uploading' });
  }
};

exports.getImages = async (req, res) => {
  try {
    const { resources } = await cloudinary.search
      .expression('folder: test-directory')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();
    const publicIds = resources.map((file) => file.public_id);
    console.log(publicIds);
    res.send(publicIds);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Cannot get Images' });
  }
};
