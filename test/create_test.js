const assert = require('assert');
const User = require('../src/user');

//use a boolean to see if test passes
//john is an 'instance' to be saved to the database
describe('Creating records', () => {
  it('saves a user', (done) => {
    const john = new User ({
      name: 'John'
    });

    john.save()
      .then(() => {
        //has John been saved successfully?
        assert(!john.isNew);
        done();
      });
  });
});
