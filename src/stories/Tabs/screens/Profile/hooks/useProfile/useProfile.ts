import { FirestoreService } from '@services';
import { settingsSelector } from '@store';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type UserData = {
  email: string;
  name: string;
  profilePic: string;
};

const defaultUserData: UserData = {
  email: '',
  name: '',
  profilePic: '',
};

export const useProfile = () => {
  const { user } = useSelector(settingsSelector);
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const getUserData = useCallback(async () => {
    const response = await FirestoreService.getUser(user.uid);
    console.log('response', response.data());
    if (response.exists) {
      setUserData((response.data() as UserData) ?? defaultUserData);
    }
  }, [user.uid]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return {
    userData,
  };
};
