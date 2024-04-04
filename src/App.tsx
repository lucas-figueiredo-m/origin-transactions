import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { MainStack } from '@navigators';
import '@locales';
import { Provider } from 'react-redux';
import { persistor, store } from '@store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@components';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default App;
