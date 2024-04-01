This is the Origin Transactions mobile project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note 1**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

> **Note 2**: If you are going to run the project on iOS-based devices, make sure you have also followed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) for Mac, using iOS devices as well

## Step 1: Install Pods dependencies (iOS-only)

If you are about to run this project on a iPhone/iPad simulator, first we need to install the Pods - Native iOS dependencies for hte libraries used in this project. To to so:

```bash
# First, go to project's ios folder
cd ios

# Then, run
pod install
```

## Step 2: Configure your _.env_ file

On the project's _root_ folder, you'll find a _.env.example_. Copy the content of this file. Next, create a _.env_ file and paste it in there. Finally, fill the fields with your values

## Step 3: Start the Metro Server

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
