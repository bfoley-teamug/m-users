const assert = require('assert');
const User = require('../src/user');

describe('Update records', () => {
  let john;

  beforeEach((done) => {
    john = new User({ name: 'john' });
    john.save()
    .then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Yoko');
        done();
      });
  }

//set is piecemeal updates over time
  it('instance type using set n save', (done) => {
    john.set('name', 'Yoko');
    assertName(john.save(), done);
  });

//update is one big update
  it('A model instance can update', (done) => {
    assertName(john.update({ name: 'Yoko' }),
    done);
  });

// class based updates

  it('A model class can update', (done) => {
    assertName(
      User.update({ name: 'John' }, { name: 'Yoko' }),
      done
    );
  });

  it('A model class can update one record', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'John' }, { name: 'Yoko' }),
      done
    );
  });

  it('A model class can find a record with an Id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(john._id, { name: 'Yoko' }),
      done
    );
  })

});
