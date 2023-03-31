export const selectors = {
	title: 'android=new UiSelector().text("Login")',
	emailField: 'android=new UiSelector().className("android.widget.EditText").instance(0)',
	passwordField: 'android=new UiSelector().className("android.widget.EditText").instance(1)',
	loginButton: 'android=new UiSelector().text("LOGIN")',
	errorLoginModal: 'android=new UiSelector().text("Error en Login")'
};
