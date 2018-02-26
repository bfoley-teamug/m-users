const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let john;

  //to check that a john is in the database
  beforeEach((done) => {
    john = new User({ name: 'John' })
    john.save()
    .then(() => done());
  });

  //.find() returns an array of records, .findOne() returns one specific record
  it('finds all users with a name of john', (done) => {
     User.find({ name: 'John' })
      .then((users) => {
        assert(users[0]._id.toString() === john._id.toString())
        done();
      });
  });

  it('find a user with a particular id', (done) => {
    User.findOne({ _id: john._id })
      .then((user) => {
        assert(user.name === 'John');
        done();
      });
  });

});
