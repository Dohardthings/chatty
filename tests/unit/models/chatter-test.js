import { moduleForModel, test } from 'ember-qunit';

moduleForModel('chatter', 'Unit | Model | chatter', {
  // Specify the other units that are required for this test.
  needs: ['model:message']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
