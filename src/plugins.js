import {Cloudinary} from "@cloudinary/url-gen";

export function getPluginsImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'docs/colored_pencils'.
  const myImage = cld.image('docs/colored_pencils');

  return myImage;
}