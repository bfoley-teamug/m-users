var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//before hooks one time, beforeEach multiple times
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done(); console.log('Good to go, mongo!') })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});



//hook - a function that runs before any test runs
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test!
    done();
  });
});
