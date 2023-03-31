import HomeScreen from './HomeScreen';
import { selectors as androidSelectors } from './selectors.android';
import { selectors as iosSelectors } from './selectors.ios';
const HomeScreenSelectors = (process.env.PLATFORM === 'android') ? androidSelectors : iosSelectors;
export { HomeScreenSelectors };
export default HomeScreen;
