import Ember from 'ember';

export default Ember.Controller.extend({

  registerChatter(attr) {
    const chatter = this.store.createRecord(`chatter`, attr);

    chatter.save();
  },
});
