import { ScrollView, StyleSheet, View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { styles } from './style';

const FadingLoader = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FadingLoaderCard1 />
      <FadingLoaderCard2 />
      <FadingLoaderCard3 />
      <FadingLoaderCard4 />
      <FadingLoaderCard5 />
    </ScrollView>
  );
};

const FadingLoaderCard1 = () => {
  return (
    <ContentLoader
      width={400}
      height={60}
      backgroundColor="#ababab"
      foregroundColor="#fafafa"
    >
      <Rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
      <Rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
      <Rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard2 = () => {
  return (
    <ContentLoader
      width={400}
      height={60}
      backgroundColor="#bfbfbf"
      foregroundColor="#fafafa"
    >
      <Rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
      <Rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
      <Rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard3 = () => {
  return (
    <ContentLoader
      width={400}
      height={60}
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
    >
      <Rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
      <Rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
      <Rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard4 = () => {
  return (
    <ContentLoader
      width={400}
      height={60}
      backgroundColor="#ececec"
      foregroundColor="#fafafa"
    >
      <Rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
      <Rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
      <Rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard5 = () => {
  return (
    <ContentLoader
      width={400}
      height={60}
      backgroundColor="#f7f7f7"
      foregroundColor="#fafafa"
    >
      <Rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
      <Rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
      <Rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};



export default FadingLoader;
