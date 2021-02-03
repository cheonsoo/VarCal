const math = require("mathjs");
const VALIDATOR = require("./validator");
const CONST = require("./const");

const parse = (lines) => {
  let parsed = [];

  try {
    lines.forEach((line, idx) => {
      // variables
      if (line === "") {
        let blank = {
          idx,
          type: "blank",
          value: ""
        };
        parsed.push(blank);
      } else if (line.trim().startsWith("#")) {
        let comments = {
          idx,
          type: "comments",
          value: line.trim()
        };
        parsed.push(comments);
      } else {
        if (line.indexOf("=") > -1) {
          let variable = {};
          const s = line.split("=");
          variable = {
            idx,
            type: "variable",
            name: s[0].trim(),
            value: s[1].trim()
          };
          parsed.push(variable);
        } else {
          // equations
          const equation = {
            idx,
            type: "equation",
            name: line,
            converted: "",
            value: ""
          };
          parsed.push(equation);
        }
      }
    });

    // Calculate value with variables
    parsed
      .filter((item) => item.type === "variable")
      .forEach((variable) => {
        if (!VALIDATOR.isNumber(variable.value)) {
          variable.original = variable.value;
          variable.value = getValueFromVars(
            getVariables(parsed),
            variable.value
          );
        }
      });
  } catch (e) {
    console.log(e);
  }

  return parsed;
};

const getVariables = (parsed) => {
  const variables = {};
  try {
    parsed
      .filter((item) => item.type === "variable")
      .forEach((item) => {
        variables[item.name] = item;
      });
  } catch (e) {
    console.log(e);
  }
  return variables;
};

const getValueFromVars = (variables, line) => {
  let result = "";
  const equation = getEquation(variables, line);
  if (!equation) return result;

  try {
    result = math.evaluate(equation);
  } catch (e) {
    console.log(e);
  }
  return result;
};

const getEquation = (variables, line) => {
  if (Object.keys(variables).length === 0 || line === "") return "";

  let result;
  try {
    const regex = new RegExp(CONST.REG_EXP);
    result = line.split(regex);
    result = result.map((item) => item.trim()).filter((item) => item !== "");

    result = result.map((item) => {
      if (variables[item]) return variables[item].value;
      return item;
    });
    result = result.join(" ");
  } catch (e) {
    console.log(e);
    result = "";
  }

  return result;
};

const getResultText = (parsed) => {
  let result = [];
  try {
    parsed.forEach((item) => {
      result.push(item.value);
    });
    result = result.join("\n");
  } catch (e) {
    console.log(e);
  }
  return result;
};

module.exports = {
  parse,
  getEquation,
  getVariables,
  getResultText
};
