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
    // Remove a bunch of records with some given criteria
    User.remove({ name: 'John' })
      .then(() => User.findOne({ name: 'John' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findOneAndRemove', (done) => {
    User.findOneAndRemove({ name: 'John' })
      .then(() => User.findOne({ name: 'John' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove(john._id)
    .then(() => User.findOne({ name: 'John' } ))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

});
