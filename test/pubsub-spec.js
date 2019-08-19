let assert = require('assert');

const pubsub = require('../PubSub');

describe('basics', () => {
  it('register subscriber', () => {
    let preVal = 0;
    pubsub.subscribe('event1', val => {
      preVal = val;
    });
    pubsub.publish('event1', 3);
    assert.notEqual(preVal, 0);
  });
  it('register and unregister subscriber', () => {
    let preVal = 0;
    const eventHandler = val => {
      preVal = val;
    };
    pubsub.subscribe('event1', eventHandler);
    pubsub.unsubscribe('event1', eventHandler);
    pubsub.publish('event1', 3);
    assert.equal(preVal, 0);
  });
  it('change a value by subscriber', () => {
    let preVal = 0;
    pubsub.subscribe('valueChange', val => {
      preVal = val;
    });
    pubsub.publish('valueChange', 3);
    assert.equal(preVal, 3);
  });
  it('register a subscriber two times', () => {
    let preVal = 0;
    const eventHandler = val => {
      preVal += val;
    };
    pubsub.subscribe('valueChange', eventHandler);
    pubsub.subscribe('valueChange', eventHandler);
    pubsub.publish('valueChange', 3);
    assert.equal(preVal, 6);
  });
});
