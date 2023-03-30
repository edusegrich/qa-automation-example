import SettingsScreen from './SettingsScreen';
import { selectors as androidSelectors } from './selectors.android';
import { selectors as iosSelectors } from './selectors.ios';
const SettingsScreenSelectors = (process.env.PLATFORM === 'android') ? androidSelectors : iosSelectors;
export { SettingsScreenSelectors };
export default SettingsScreen;
