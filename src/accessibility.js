import {Cloudinary} from "@cloudinary/url-gen";

export function getAccessibilityImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'docs/piechart'.
  const myImage = cld.image('docs/piechart');

  return myImage;
}