const printResult = parsed => {
  console.log(parsed);

  console.log('//////////////////////////////');
  console.log('// VARIABLES');
  console.log('//////////////////////////////');
  Object.keys(parsed.variables).forEach(key => {
    const variable = parsed.variables[key];
    console.log(`${variable.name} = ${variable.value}`);
  });

  console.log('');
  console.log('//////////////////////////////');
  console.log('// EQUATIONS');
  console.log('//////////////////////////////');
  Object.keys(parsed.equations).forEach(key => {
    const equation = parsed.equations[key];
    console.log(`${equation.name} = ${equation.value}`);
  });
};

module.exports = {
  printResult
};
