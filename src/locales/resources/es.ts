export default {
  hello: 'Hola',
  common: {
    noInternetConnection: 'Estás desconectado',
    noInternetConnectionMessage:
      'No te preocupes. Aún puedes usar la aplicación, pero algunas funciones pueden no funcionar correctamente.',
    error: 'Error',
    success: 'Felicidades',
    connected: '¡Estás de vuelta en línea!',
    connectedMessage:
      'Ahora puedes volver a usar todas las funciones de la aplicación',
  },
  signIn: {
    email: 'Correo electrónico',
    password: 'Contraseña',
    signIn: 'Iniciar sesión',
    validEmail: 'Por favor, introduce un correo electrónico válido',
    validPassword: 'Tu contraseña debe tener al menos 1 caracter',
    dontHaveAccount: '¿No tienes una cuenta? ',
    signUp: 'Registrarse',
    keepSigned: 'Mantener sesión iniciada',
    invalidCredentials: 'Correo electrónico o contraseña inválidos',
    unknownError: 'Ocurrió un error desconocido',
  },
  signUp: {
    email: 'Correo electrónico',
    name: 'Nombre',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    signUp: 'Registrarse',
    validEmail: 'Por favor, introduce un correo electrónico válido',
    validName: 'Tu nombre debe contener al menos 1 caracter',
    doesHaveAccount: '¿Ya tienes una cuenta? ',
    signIn: 'Iniciar sesión',
    passwordsDontMatch: 'Las contraseñas no coinciden',
    title: 'Transacciones de Origen',
    emailAlreadyInUse: 'Correo electrónico ya en uso',
    unknownError: 'Ocurrió un error desconocido',
  },
  tabNavigator: {
    transactionsList: 'Transacciones',
    profile: 'Perfil',
  },
  transactions: {
    error: 'Error al cargar las transacciones',
    empty: 'No se encontraron transacciones',
    noMorePages: 'No hay más transacciones para mostrar',
    transactionCard: {
      on: 'en',
    },
    filterActive: 'Filtrando',
    filter: 'Filtrar',
  },
  transactionStack: {
    transactionDetail: 'Detalle de la transacción',
    transactionChangeCoords: 'Cambiar ubicación',
    transactionReceipt: 'Recibo de la transacción',
    transactionMapPicker: 'Selector de mapa',
  },
  transactionDetail: {
    error: 'Error al cargar la transacción',
    amount: 'Monto',
    category: 'Categoría',
    transactionType: 'Tipo de transacción',
    attachGps: 'Cambiar la ubicación de la transacción',
    seeReceipt: 'Ver recibo',
  },
  transactionChangeCoords: {
    useGpsCoords: 'Usar coordenadas GPS actuales',
    pickFromMap: 'Seleccionar en el mapa',
  },
  permissionService: {
    unknownError: 'Ocurrió un error desconocido',
    notPossible: 'No fue posible obtener los permisos requeridos',
    unavailable: 'El permiso no está disponible en este dispositivo',
    blockedMessage:
      'Anteriormente has bloqueado este permiso. ¿Te gustaría abrir la configuración para habilitarlo?',
    requesting: 'Se está solicitando el permiso. Por favor, espera',
  },
  usePermissions: {
    attention: 'Atención',
    openSettings: 'Abrir configuración',
    cancel: 'Cancelar',
  },
  transactionMapPicker: {
    error: 'Error',
    errorMessage:
      'Ocurrió un error al intentar actualizar tus coordenadas GPS. Por favor, inténtalo de nuevo.',
  },
  profile: {
    displayName: 'Nombre',
    email: 'Correo electrónico',
    changeLanguage: 'Cambiar idioma',
    selectLanguage: 'Seleccionar idioma',
    english: 'Inglés',
    portuguese: 'Portugués',
    spanish: 'Español',
  },
};
