import {Cloudinary} from "@cloudinary/url-gen";

export function getLazyloadPlaceholderImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'brown_sheep'.
  const myImage = cld.image('brown_sheep');

  return myImage;
}