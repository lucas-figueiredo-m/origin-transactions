export default {
  hello: 'Olá',
  common: {
    noInternetConnection: 'Você está offline',
    noInternetConnectionMessage:
      'Não se preocupe. Você ainda pode usar o aplicativo, mas algumas funcionalidades podem não funcionar corretamente.',
    error: 'Erro',
    success: 'Parabéns',
    connected: 'Você está de volta online!',
    connectedMessage:
      'Agora você pode usar todas as funcionalidades do aplicativo novamente',
  },
  signIn: {
    email: 'E-mail',
    password: 'Senha',
    signIn: 'Entrar',
    validEmail: 'Por favor, insira um e-mail válido',
    validPassword: 'Sua senha deve ter pelo menos 1 caractere',
    dontHaveAccount: 'Não tem uma conta? ',
    signUp: 'Cadastre-se',
    keepSigned: 'Mantenha-me conectado',
    invalidCredentials: 'E-mail ou senha inválidos',
    unknownError: 'Ocorreu um erro desconhecido',
  },
  signUp: {
    email: 'E-mail',
    name: 'Nome',
    password: 'Senha',
    confirmPassword: 'Confirmar Senha',
    signUp: 'Cadastrar',
    validEmail: 'Por favor, insira um e-mail válido',
    validName: 'Seu nome deve conter pelo menos 1 caractere',
    doesHaveAccount: 'Já tem uma conta? ',
    signIn: 'Entrar',
    passwordsDontMatch: 'As senhas não coincidem',
    title: 'Transações de Origem',
    emailAlreadyInUse: 'E-mail já está em uso',
    unknownError: 'Ocorreu um erro desconhecido',
  },
  tabNavigator: {
    transactionsList: 'Transações',
    profile: 'Perfil',
  },
  transactions: {
    error: 'Falha ao carregar as transações',
    empty: 'Nenhuma transação encontrada',
    noMorePages: 'Não há mais transações para mostrar',
    transactionCard: {
      on: 'em',
    },
    filterActive: 'Filtrando',
    filter: 'Filtrar',
  },
  transactionStack: {
    transactionDetail: 'Detalhes da Transação',
    transactionChangeCoords: 'Alterar Localização',
    transactionReceipt: 'Recibo da Transação',
    transactionMapPicker: 'Seletor de Mapa',
  },
  transactionDetail: {
    error: 'Falha ao carregar a transação',
    amount: 'Valor',
    category: 'Categoria',
    transactionType: 'Tipo de Transação',
    attachGps: 'Alterar localização da transação',
    seeReceipt: 'Ver Recibo',
  },
  transactionChangeCoords: {
    useGpsCoords: 'Usar coordenadas GPS atuais',
    pickFromMap: 'Escolher no mapa',
  },
  permissionService: {
    unknownError: 'Ocorreu um erro desconhecido',
    notPossible: 'Não foi possível obter as permissões necessárias',
    unavailable: 'A permissão não está disponível neste dispositivo',
    blockedMessage:
      'Você bloqueou anteriormente esta permissão. Gostaria de abrir as configurações para habilitá-la?',
    requesting: 'A permissão está sendo solicitada. Por favor, aguarde',
  },
  usePermissions: {
    attention: 'Atenção',
    openSettings: 'Abrir Configurações',
    cancel: 'Cancelar',
  },
  transactionMapPicker: {
    error: 'Erro',
    errorMessage:
      'Ocorreu um erro ao tentar atualizar suas coordenadas GPS. Por favor, tente novamente.',
    success: 'Coordenadas atualizadas com sucesso',
  },
  profile: {
    displayName: 'Nome',
    email: 'E-mail',
    changeLanguage: 'Trocar idioma',
    selectLanguage: 'Selecione o idioma',
    english: 'Inglês',
    portuguese: 'Português',
    spanish: 'Espanhol',
  },
  transactionReceipt: {
    receiptUploaded: 'Recibo enviado com sucesso',
    uploadReceipt: 'Enviar Recibo',
  },
};
