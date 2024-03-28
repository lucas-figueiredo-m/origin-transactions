import { Locales } from '@locales';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SettingsState = {
  locale: Locales;
};

const initialState: SettingsState = {
  locale: 'en',
};

const SettingsStateSlice = createSlice({
  name: '@settings',
  initialState,
  reducers: {
    setLocale(settings, action: PayloadAction<Locales>) {
      settings.locale = action.payload;
    },
  },
});

export const settingsSelector = (state: RootState) => state.settings;

export const SettingsActions = { ...SettingsStateSlice.actions };

export const SettingsReducer = SettingsStateSlice.reducer;
