This is the Origin Transactions mobile project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note 1**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

> **Note 2**: If you are going to run the project on iOS-based devices, make sure you have also followed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) for Mac, using iOS devices as well

## Step 0: Include build files

This project uses some Firebase APIs and contains some secrets. In order to work properly, you need to add these files to the project.

First, create a `.env` file at the root of the project. Next, copy all secret from `.env.example` and paste them on the new file.

For setting up a Firebase project, follow these instructions for for [Android](https://rnfirebase.io/#generating-android-credentials) and [iOS](https://rnfirebase.io/#generating-android-credentials)

Now, as the project uses Google Maps on Android, we need to [Generate a Google Maps API key for Android](https://developers.google.com/maps/documentation/android-sdk/signup). This key should be pasted on your `.env` file.

## Step 1: Install Pods dependencies (iOS-only)

If you are about to run this project on a iPhone/iPad simulator, first we need to install the Pods - Native iOS dependencies for hte libraries used in this project. To to so:

```bash
# First, go to project's ios folder
cd ios

# Then, run
pod install
```

## Step 2: Start the Metro Server

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn run android
```

### For iOS

```bash
# using npm
npm run iphone

# OR using Yarn
yarn run iphone
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Assumptions

- The offline mode should only work for listing data, not for updating anything like receipt or transaction GPS coordinates
- Persisting user's session is basically storing some of their info. Ideally, it should be way more complex then that, depending on the app target industry.
- Some additional features have been included on the app, such as a simple profile screen and multilanguage support
