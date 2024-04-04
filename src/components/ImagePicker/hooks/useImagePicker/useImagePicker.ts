import { usePermissions } from '@hooks';
import { ImagePickerResponse, ImagePickerService, Scopes } from '@services';

export const useImagePicker = () => {
  const [cameraGranted, requestCamera] = usePermissions(Scopes.Camera);
  const [galleryGranted, requestGallery] = usePermissions(Scopes.IMAGE);

  const onCameraSelect = async (
    onCameraPressCallback: (image: ImagePickerResponse) => void,
  ) => {
    if (!cameraGranted) {
      requestCamera();
      return;
    }

    const image = await ImagePickerService.getImageFromCamera();

    onCameraPressCallback(image);
  };

  const onGallerySelect = async (
    onGalleryPressCallback: (image: ImagePickerResponse) => void,
  ) => {
    if (!galleryGranted) {
      requestGallery();
      return;
    }

    const image = await ImagePickerService.getImageFromGallery();

    onGalleryPressCallback(image);
  };

  return {
    onCameraSelect,
    onGallerySelect,
  };
};
