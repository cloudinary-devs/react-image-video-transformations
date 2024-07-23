import {Cloudinary} from "@cloudinary/url-gen";

export function getAdvancedVideoPropertiesVideo() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    },
    url: {
      analytics: false
    }
  });

  // Use the video with public ID, 'dog'.
  const myVideo = cld.video('dog');

  return myVideo;
}
