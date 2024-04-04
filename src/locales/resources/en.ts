export default {
  hello: 'Hello',
  signIn: {
    email: 'E-mail',
    password: 'Password',
    signIn: 'Sign In',
    validEmail: 'Please, enter a valid e-mail',
    validPassword: 'Your password must have at least 1 character',
    dontHaveAccount: "Don't have an account? ",
    signUp: 'Sign up',
    keepSigned: 'Keep me signed in',
  },
  signUp: {
    email: 'E-mail',
    name: 'Name',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signUp: 'Sign Up',
    validEmail: 'Please, enter a valid e-mail',
    validName: 'Your name must contain at least 1 character',
    validPassword: 'Your password must have at least 1 character',
    doesHaveAccount: 'Already have an account? ',
    signIn: 'Sign In',
    passwordsDontMatch: 'Passwords do not match',
    title: 'Origin Transactions',
  },
  tabNavigator: {
    transactionsList: 'Transactions',
    profile: 'Profile',
  },
  transactions: {
    error: 'Failed to load transactions',
    empty: 'No transactions found',
    noMorePages: 'No more transactions to show',
    transactionCard: {
      on: 'on',
    },
    filterActive: 'Filtering',
    filter: 'Filter',
  },
  transactionStack: {
    transactionDetail: 'Transaction Detail',
    transactionChangeCoords: 'Change Location',
    transactionReceipt: 'Transaction Receipt',
    transactionMapPicker: 'Map Picker',
  },
  transactionDetail: {
    error: 'Failed to load transaction',
    amount: 'Amount',
    category: 'Category',
    transactionType: 'Transaction Type',
    attachGps: "Change transaction's location",
    seeReceipt: 'See Receipt',
  },
  transactionChangeCoords: {
    useGpsCoords: 'Use current GPS coordinates',
    pickFromMap: 'Pick from map',
  },
  permissionService: {
    unknownError: 'An unknown error occurred',
    notPossible: 'It was not possible to get required permissions',
    unavailable: 'Permission is unavailable on this device',
    blockedMessage:
      'You have previously blocked this permission. Would you like to open settings to enable it?',
    requesting: 'Permission is being requested. Please, wait',
  },
  usePermissions: {
    attention: 'Attention',
    openSettings: 'Open Settings',
    cancel: 'Cancel',
  },
  transactionMapPicker: {
    error: 'Error',
    errorMessage:
      'An error happened trying to update your GPS coords. Please try again.',
  },
};
