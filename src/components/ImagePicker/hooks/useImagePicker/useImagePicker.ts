import { BottomSheetRef } from '@components';
import { usePermissions } from '@hooks';
import { ImagePickerResponse, ImagePickerService, Scopes } from '@services';
import { RefObject } from 'react';

export const useImagePicker = (ref: RefObject<BottomSheetRef>) => {
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
    ref.current?.dismiss();
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
    ref.current?.dismiss();
  };

  return {
    onCameraSelect,
    onGallerySelect,
  };
};
