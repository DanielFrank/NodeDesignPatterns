# Exercise 3.4
Modify function from exercise 3.3 so that it produces an error if the timestamp at the moment of a tick (including the initial one added to exercise 3.3) is divisible by 5. Propagate the error using both the callback and the event emitter.

## Notes
Gets error which is generally handled. Exception is that similar to not seeing Tick 1, if the error occurs before the event-handlers are set-up, the program crashes.

We should probably set this up as a class and set up the event-handlers before we call the processing. (Not doing that since that wasn't the exercise. Were this a real project, I would discuss with the team that we have this problem (Or just fix it if I have tha authority and it won't break things for other folks using this.))

## Run

To run the example launch:

```bash
node index.js
```
