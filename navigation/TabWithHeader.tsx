import React, { ReactElement } from "react";
import { ImageBackground, ImageURISource, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TabWithHeader = ({
  children,
  img,
}: {
  children: ReactElement;
  img: ImageURISource;
}): JSX.Element => {
  const style = StyleSheet.create({
    navBar: {
      backgroundColor: "transparent",
    },
    backgroundImage: {
      resizeMode: "cover",
      backgroundColor: "transparent",
      flex: 1,
      flexDirection: "column",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
    headerStyle: {
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 0, // removes the border on the bottom
    },
  });

  const header = ({ scene, previous, navigation }: any) => {
    const { options } = scene.descriptor;
    const title = scene.route?.params?.name || options.headerTitle;

    return (
      <Appbar.Header theme={{ colors: { primary: "transparent" } }}>
        {previous ? (
          <Appbar.BackAction color={"white"} onPress={navigation.goBack} />
        ) : null}
        <Appbar.Content title={title} titleStyle={style.text} />
      </Appbar.Header>
    );
  };

  return (
    <ImageBackground source={img} style={style.backgroundImage}>
      {React.cloneElement(children, { style, header })}
    </ImageBackground>
  );
};

export default TabWithHeader;
