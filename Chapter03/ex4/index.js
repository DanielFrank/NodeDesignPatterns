import { EventEmitter } from 'events';

function dateCheck() {
  if (Date.now() % 5 === 0) {
    throw new Error('Divisible by 5');
  }
}

function tickEventStart(number, callback) {
  const emitter = new EventEmitter();
  const handleError = err => {
    emitter.emit('error', err);
    callback(err);
  };
  const EVENT_INTERVAL = 50;
  let tickCount = 1;
  try {
    dateCheck();
    emitter.emit('tick', tickCount);
  } catch(err) {
    handleError(err);
  }
  let millisecondsCount = 0;
  const tickEvent = () => {
    try {
      dateCheck();
      tickCount += 1;
      emitter.emit('tick', tickCount);
      millisecondsCount += EVENT_INTERVAL;
      if (millisecondsCount >= number) {
        callback(null, tickCount);
      } else {
        setTimeout(tickEvent, EVENT_INTERVAL);
      }
    } catch(err) {
      handleError(err);
    }
  };
  setTimeout(tickEvent, EVENT_INTERVAL);
  return emitter
}

tickEventStart(737, (err, tickCount) => {
  if (err) {
    return console.error(`Callback error ${err.message}`);
  }
  console.log(`${tickCount} ticks were done`);
})
  .on('tick', tickCount => console.log(`Tick #${tickCount}`))
  .on('error', err => console.error(`Error emitted ${err.message}`))
