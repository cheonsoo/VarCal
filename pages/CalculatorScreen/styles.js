import { StyleSheet } from "react-native";

const FONT_SIZE = 15;

const styles = {
  tabArea: {
    height: 33,
    flexDirection: "row",
    borderBottomColor: "#575757",
    borderBottomWidth: 3
  },
  addTab: {
    width: 26,
    height: 26,
    borderColor: "#575757",
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5
  },
  addTabText: {
    color: "#575757",
    fontWeight: "bold"
  },
  tab: {
    width: 50,
    height: 30,
    borderColor: "#575757",
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  tabActive: {
    width: 50,
    height: 30,
    borderColor: "#575757",
    backgroundColor: "#575757",
    borderWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  tabText: {
    color: "#575757",
    fontWeight: "bold"
  },
  tabTextActive: {
    color: "#e9e9e9",
    fontWeight: "bold"
  },
  showTab: {
    width: "100%",
    height: "30%"
    // opacity: 1
  },
  hideTab: {
    width: 0,
    height: 0
    // opacity: 0
  },
  buttonInfo: {
    backgroundColor: "#fff",
    width: 26,
    height: 26,
    borderColor: "#736E6D",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#736E6D",
    fontSize: 15,
    fontWeight: "bold"
  }
};

export default StyleSheet.create(styles);
