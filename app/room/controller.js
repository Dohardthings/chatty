import Ember from 'ember';

export default Ember.Controller.extend({
  newContent: ``,

  postMessage(newContent) {
    const message = this.store.createRecord(`message`, { content: newContent });

    message.save().then(() => {
      this.set(`newContent`, ``);
    });
  },
});
