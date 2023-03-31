import LoginScreen from './LoginScreen';
import { selectors as androidSelectors } from './selectors.android';
import { selectors as iosSelectors } from './selectors.ios';
const LoginScreenSelectors = (process.env.PLATFORM === 'android') ? androidSelectors : iosSelectors;
export { LoginScreenSelectors };
export default LoginScreen;
