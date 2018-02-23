const assert = require('assert');
const User = require('../src/user');


describe('deleting a user', () => {
  let john;

  beforeEach((done) => {
    john = new User({ name: 'John' });
    john.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    john.remove()
      .then(() => User.findOne({ name: 'John'} ))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    //remove a bunch of records with same criteria at the same time
    User.remove({ name: 'John' })
    .then(() => User.findOne({ name: 'John'} ))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findAndRemove', () => {

  });

  it('class method findByIdAndRemove', () => {

  })

});
