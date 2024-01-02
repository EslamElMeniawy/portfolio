import type {FlatListItem} from '@eslam-elmeniawy/react-native-common-components';

interface Project extends FlatListItem {
  id?: number | string;
  title?: string;
  message?: string;
}

export default Project;
