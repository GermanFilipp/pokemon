const path = require("path");
const fs = require("fs");

const packageDirs = ["./", "./src"];

const hasPackageJsonInDirectory = directory => {
  return fs.existsSync(`${directory}/package.json`);
};

const getSubDirectoryPaths = directory => {
  return fs
    .readdirSync(path.resolve(directory))
    .map(subDirectory => path.resolve(`${directory}/${subDirectory}`));
};

const allDirectoryPaths = packageDirs.map(directory => {
  return path.resolve(__dirname, directory);
});

const allPackageDirectories = allDirectoryPaths.reduce(
  (packageDirectories, currentDirectory) => {
    if (hasPackageJsonInDirectory(currentDirectory)) {
      return packageDirectories.concat(currentDirectory);
    }

    const subDirectories = getSubDirectoryPaths(currentDirectory);

    return packageDirectories.concat(
      subDirectories.filter(hasPackageJsonInDirectory)
    );
  },
  []
);

module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "no-console": "warn",
    "import/no-named-as-default": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "import/prefer-default-export": "warn",
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "react/forbid-prop-types": "warn",
    "react/jsx-sort-props": "error",
    "react/jsx-sort-default-props": "error",
    "react/sort-prop-types": "error",
    "no-underscore-dangle": "off",
    "react/destructuring-assignment": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "packageDir": allPackageDirectories
      }
    ]
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  }
};
