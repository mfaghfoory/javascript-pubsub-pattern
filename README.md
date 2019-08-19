# javascript-pubsub-pattern
A simple implementation of publish/subscribe pattern in javascript

example:

```
const pubsub = require('./PubSub');

function eventHandler1(data){
  console.log("event-1 -> " + data);
}
function eventHandler2(data){
  console.log("event-2 -> " + data);
}
PubSub.subscribe("event-1", eventHandler1);
PubSub.subscribe("event-2", eventHandler2);
PubSub.publish("event-1", "data 1");
PubSub.publish("event-2", "data 2");
```
