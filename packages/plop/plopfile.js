const componentGenerator = require("./plop/component");
const promptDirectory = require("inquirer-directory");

module.exports = function (plop) {
  plop.setActionType("printData", function (answers, config, plop) {
    console.log(config.data);
  });

  plop.setPrompt("directory", promptDirectory);
  plop.setGenerator("component", componentGenerator);
};
