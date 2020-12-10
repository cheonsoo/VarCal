const FONT_SIZE = 15;

const styles = {
  calculatorContainer: {
    flex: 1,
    width: "100%"
  },
  buttonArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonArea1: {
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10
  },
  buttonArea2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10
  },
  button: {
    operator: {
      touch: {
        width: 30,
        height: 30,
        borderColor: "#2F7CF5",
        backgroundColor: "#2F7CF5",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
      },
      text: {
        color: "#F2F4F4",
        fontSize: 20,
        fontWeight: "bold"
      }
    },
    clear: {
      touch: {
        width: 80,
        height: 30,
        borderColor: "#575757",
        backgroundColor: "#575757",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: "#F2F4F4",
        fontSize: 20,
        fontWeight: "bold"
      }
    },
    info: {
      touch: {
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        borderColor: "#736E6D",
        borderWidth: 2,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        color: "#736E6D",
        fontSize: 20,
        fontWeight: "bold"
      }
    }
  },
  contentArea: {
    flex: 15,
    flexDirection: "row"
  },
  textArea: {
    flex: 2,
    paddingTop: 20,
    paddingLeft: 20
  },
  resultArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingRight: 20
  },
  textInput: {
    width: "100%",
    height: "100%",
    fontSize: FONT_SIZE,
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "top"
  }
};

export default styles;
