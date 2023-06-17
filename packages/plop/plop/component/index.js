/**
 * Functional component generator.
 */

module.exports = {
  description: "Add a Functional React component",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "What is the name of your component? (Don't include 'Component')",
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }

        return "The name is required";
      },
    },
    {
      type: "directory",
      name: "location",
      message: "Where should your component folder be placed?",
      basePath: `./`,
    },
  ],
  actions: (answers) => {
    const location = `${__dirname}/../../../../${answers.location}/{{camelCase name}}/`;

    const basicComponentActions = [
      {
        type: "add",
        path: `${location}index.ts`,
        templateFile: `${__dirname}/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${location}{{properCase name}}.tsx`,
        templateFile: `${__dirname}/index.functional-component.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${location}{{properCase name}}.stories.tsx`,
        templateFile: `${__dirname}/index.stories.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${location}I{{properCase name}}Props.ts`,
        templateFile: `${__dirname}/index.props.ts.hbs`,
        abortOnFail: true,
      },
      // {
      //   type: "add",
      //   path: `${location}{{properCase name}}.test.tsx`,
      //   templateFile: `${__dirname}/index.test.tsx.hbs`,
      //   abortOnFail: true,
      // },
    ];

    const styleFile = {
      type: "add",
      path: `${location}{{properCase name}}.module.scss`,
      templateFile: `${__dirname}/index.module.scss.hbs`,
      abortOnFail: true,
    };

    return answers.hasStyles
      ? [...basicComponentActions, styleFile]
      : basicComponentActions;
  },
};
