import {Cloudinary} from "@cloudinary/url-gen";

export function getResponsiveImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'sample'.
  const myImage = cld.image('sample');

  return myImage;
}