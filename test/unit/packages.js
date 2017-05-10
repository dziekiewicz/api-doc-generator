import test from 'ava';
import npm from '../../package.json';

const packages = [
  npm,
];

test(`Name should be equal "${npm.name}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      let name = compareValue.name;

      if (compareValue.name.match('/')) {
        name = compareValue.name.split('/')[1];
      }

      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.name, name);
      }

      return null;
    });

    return null;
  });
});

test(`Version should be equal to "v${npm.version}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.version, compareValue.version);
      }

      return null;
    });

    return null;
  });
});

test(`Description should be equal to "${npm.description}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.description, compareValue.description);
      }

      return null;
    });

    return null;
  });
});

test(`Homepage should be equal to "${npm.homepage}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.homepage, compareValue.homepage);
      }

      return null;
    });

    return null;
  });
});

test(`Repository should be equal to "${npm.repository}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.repository, compareValue.repository);
      }

      return null;
    });

    return null;
  });
});

test(`License should be equal to "${npm.license}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.license, compareValue.license);
      }

      return null;
    });

    return null;
  });
});

test(`Author Name should be equal to "${npm.author}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.author, compareValue.author);
      }

      return null;
    });

    return null;
  });
});

test(`Main File should be equal to "${npm.main}"`, (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(referenceValue.main, compareValue.main);
      }

      return null;
    });

    return null;
  });
});

test('Ignore should be equal', (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(JSON.stringify(referenceValue.ignore), JSON.stringify(compareValue.ignore));
      }

      return null;
    });

    return null;
  });
});

test('Keywords should be equal', (context) => {
  packages.map((referenceValue, referenceIndex) => {
    packages.map((compareValue, compareIndex) => {
      if (referenceIndex !== compareIndex) {
        context.is(JSON.stringify(referenceValue.keywords), JSON.stringify(compareValue.keywords));
      }

      return null;
    });

    return null;
  });
});
