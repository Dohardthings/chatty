import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  init() {
  this._super(...arguments);
  this.get(`waitAFewSeconds`).perform();
},

waitAFewSeconds: task(function * () {
  while(true) {
    yield timeout(2000);
    console.log(`polling`);
    this.store.findAll(`message`, { include: `chatter` });
  }
}),
  newContent: ``,

  postMessage(newContent) {
    const message = this.store.createRecord(`message`, { content: newContent });

    message.save().then(() => {
      this.set(`newContent`, ``);
    });
  },
});
