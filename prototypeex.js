function Stopwatch() {
  let start,
    end,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "end", {
    get: function () {
      return end;
    },
  });
  Object.defineProperty(this, "start", {
    get: function () {
      return start;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error("already start");
  }
  this.running = true;
  this.start = new Date();
};
Stopwatch.prototype.end = function () {
  if (!this.running) {
    throw new Error(`stopwatch isn't started yet`);
  }
  this.running = false;
  this.end = new Date();

  const seconds = (end.getTime() - start.getTime()) / 1000;

  return (this.duration += seconds);
};
Stopwatch.prototype.reset = function () {
  this.start = null;
  this.end = null;
  this.running = false;
  this.duration = 0;
};
