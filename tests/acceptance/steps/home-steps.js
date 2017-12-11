import steps from './steps';

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function(assert) {
  return steps(assert)
    .given('I visit the page "/home"', function(next){
      visit("/home")
      andThen(() => next());
    })
    .when('I stay on the "/home"', function(next){
      assert.ok(true,this.step);
    })
    .then('I should like to see a list of friends', function(next) {
      assert.ok(true, this.step);
      next();
    });
}
