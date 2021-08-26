import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TabWithHeader = ({
  children,
}: {
  children: ReactElement;
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
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content
          title={title}
          titleStyle={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        />
      </Appbar.Header>
    );
  };

  return React.cloneElement(children, { style, header });
};

export default TabWithHeader;
