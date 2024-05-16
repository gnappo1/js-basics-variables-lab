const { chai, sinon, fs, jsdom, path, babel, html, js, babelResult, src, initialCode } = require('./helpers.js');


describe('index.js', function () {
  describe('organizationName', function () {
    it('is set as Acme Corp', function () {
      expect(organizationName).to.equal('Acme Corp');
    });

    it('is defined as a const', function () {
      expect(initialCode).to.match(/const organizationName/, "Expected organizationName to be a const");
    });
  });

  describe('mostLucrativeDistrict', function () {
    it('is initially declared as equal to Downtown', function () {
      expect(initialCode).to.match(/let mostLucrativeDistrict = ["'`]Downtown["'`]/, "Expected mostLucrativeDistrict to initially be Downtown");
    });

    it('is defined using let', function () {
      expect(initialCode).to.match(/let mostLucrativeDistrict/, "Expected mostLucrativeDistrict to be defined using let");
    });
  });

  describe('CEO', function () {
    it('is declared as equal to John Doe', function () {
      expect(CEO).to.equal('John Doe');
    });

    it('is defined using let', function () {
      expect(initialCode).to.match(/let CEO/, "Expected CEO to be defined using let");
    });
  });

  describe('Data Type Exploration', function () {
    it('stringVar is set to "Welcome"', function () {
      expect(stringVar).to.equal('Welcome');
    });

    it('numberVar is set to 100', function () {
      expect(numberVar).to.equal(100);
    });

    it('booleanVar is set to false', function () {
      expect(booleanVar).to.equal(false);
    });

    it('nullVar is set to null', function () {
      expect(nullVar).to.be.null;
    });

    it('undefinedVar is declared without assigning a value', function () {
      expect(undefinedVar).to.be.undefined;
    });
  });

  describe('Array Creation', function () {
    it('myArray is declared as an array', function () {
      expect(Array.isArray(myArray)).to.be.true;
    });

    it('myArray contains at least three elements', function () {
      expect(myArray.length).to.be.at.least(3);
    });

    it('myArray contains elements of different data types', function () {
      const uniqueTypes = new Set(myArray.map(element => typeof element));
      expect(uniqueTypes.size).to.equal(myArray.length);
    });
  });

  describe('Object Creation', function () {
    it('myObject is declared as an object', function () {
      expect(typeof myObject).to.equal('object');
    });

    it('myObject has at least three key-value pairs', function () {
      expect(Object.keys(myObject).length).to.be.at.least(3);
    });
  });

  describe('Variable Reassignment', function () {
    it('at least one variable declared with let is reassigned', function () {
      // Check if the variable declaration includes an assignment
      expect(initialCode).to.match(/mostLucrativeDistrict = ["'`]Hell["'`]s Kitchen["'`]/, "Expected mostLucrativeDistrict to be Hell's Kitchen after reassignment");
      // const reassignmentOccurred = initialCode.includes('mostLucrativeDistrict = "Hell\'s Kitchen"');
      // expect(reassignmentOccurred).to.be.true;
    });
  });
});
