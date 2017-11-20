AccountsTemplates.configure({
  defaultLayout: 'Appbody',
  defaultLayoutRegions: {
      top: 'Menu',
    },
  postSignUpHook: mysignUpFlow,
  defaultContentRegion: 'main',
  confirmPassword: true,
  enablePasswordChange: true,
  showForgotPasswordLink: true,
  enablePasswordChange: true,
 sendVerificationEmail: true,
 confirmPassword: true,
 forbidClientAccountCreation: false,
 showPlaceholders: true,
 continuousValidation: true,
 negativeValidation: true
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');

/*
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
 layoutType: 'blaze',
defaultLayoutRegions: {},
 contentRegion: 'main',
 layoutTemplate: 'Appbody'
});
AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
  defaultLayoutRegions: {},
 layoutType: 'blaze',
 contentRegion: 'main',
 layoutTemplate: 'Appbody'
});
AccountsTemplates.configureRoute('forgotPwd', {
  name: 'forgotPwd',
  path: '/forgot-password',
  defaultLayoutRegions: {},
  layoutType: 'blaze',
  contentRegion: 'main',
  layoutTemplate: 'AppBody'
});
AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
  defaultLayoutRegions: {},
 layoutType: 'blaze',
 contentRegion: 'main',
 layoutTemplate: 'AppBody'
});
*/
