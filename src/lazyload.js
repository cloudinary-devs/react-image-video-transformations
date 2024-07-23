import {Cloudinary} from "@cloudinary/url-gen";

export function getLazyloadImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'flowers'.
  const myImage = cld.image('flowers');

  return myImage;
}