import {Cloudinary} from "@cloudinary/url-gen";

export function getPlaceholderImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'docs/grizzly'.
  const myImage = cld.image('docs/grizzly');

  return myImage;
}