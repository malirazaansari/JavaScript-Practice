function Stopwatch() {
  let start,
    end,
    running,
    duration = 0;
  this.start = function () {
    if (running) {
      throw new Error("already start");
    }
    running = true;
    start = new Date();
  };
  this.end = function () {
    if (!running) {
      throw new Error(`stopwatch isn't started yet`);
    }
    running = false;
    end = new Date();

    const seconds = (end.getTime() - start.getTime()) / 1000;

    return (duration += seconds);
  };
  this.reset = function () {
    start = null;
    end = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
