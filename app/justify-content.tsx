import { View } from "react-native";

const JustifyContent = () => {
  return (
    // Try setting `justifyContent` to 'flex-start'/'flex-end'/'center'/'space-between'/'space-around'
    <View
      style={[{ justifyContent: "space-between" }, styles.elementsContainer]}
    >
      <View style={{ width: 50, height: 50, backgroundColor: "#EE2C38" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "#FAA030" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "#32B76C" }} />
    </View>
  );
};

const styles = {
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};

export default JustifyContent;