import React, { Dispatch, SetStateAction } from 'react';
import { BottomSheet } from '../BottomSheet';
import { Camera, File } from '@assets/icons';
import { ImagePickerOption } from './components';
import { styles } from './styles';
import { useImagePicker } from './hooks';
import { ImagePickerResponse } from '@services';

type ImagePickerProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onCameraPress: (image: ImagePickerResponse) => void;
  onGalleryPress: (image: ImagePickerResponse) => void;
  onDismissPicker?: () => void;
};

export const ImagePicker: React.FC<ImagePickerProps> = ({
  visible,
  setVisible,
  onCameraPress,
  onGalleryPress,
  onDismissPicker,
}) => {
  const { onCameraSelect, onGallerySelect } = useImagePicker();
  return (
    <BottomSheet
      isVisible={visible}
      setVisible={setVisible}
      onDismiss={onDismissPicker}
      title="Upload Method"
      contentStyle={styles.bottomSheetContent}
    >
      <ImagePickerOption
        Icon={Camera}
        label="Camera"
        onPress={() => onCameraSelect(onCameraPress)}
      />
      <ImagePickerOption
        Icon={File}
        label="Gallery"
        onPress={() => onGallerySelect(onGalleryPress)}
      />
    </BottomSheet>
  );
};
