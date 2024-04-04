import { Locales } from '@locales';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SettingsState = {
  locale: Locales;
  keepSignedIn: boolean;
  user: {
    displayName: string;
    email: string;
    uid: string;
  };
};

const initialState: SettingsState = {
  locale: 'en',
  keepSignedIn: false,
  user: {
    displayName: '',
    email: '',
    uid: '',
  },
};

const SettingsStateSlice = createSlice({
  name: '@settings',
  initialState,
  reducers: {
    setLocale(settings, action: PayloadAction<Locales>) {
      settings.locale = action.payload;
    },
    setKeepSignedIn(settings, action: PayloadAction<boolean>) {
      settings.keepSignedIn = action.payload;
    },
    setUserData(settings, action: PayloadAction<SettingsState['user']>) {
      settings.user = action.payload;
    },
    resetStore(settings) {
      settings.user = initialState.user;
      settings.keepSignedIn = initialState.keepSignedIn;
    },
  },
});

export const settingsSelector = (state: RootState) => state.settings;

export const SettingsActions = { ...SettingsStateSlice.actions };

export const SettingsReducer = SettingsStateSlice.reducer;
