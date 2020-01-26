varports = [80, 443, 445, 554, 3306, 3690, 1234];
for (var i = 0; i < ports.length; i++) {
  var s = new WebSocket("ws://192.168.1.1:" + ports[i]);
  s.start = performance.now();
  s.port = ports[i];
  s.onerror = function() {
    console.log(
      "Port " + this.port + ": " + (performance.now() - this.start) + " ms"
    );
  };
  s.onopen = function() {
    console.log(
      "Port " + this.port + ": " + (performance.now() - this.start) + " ms"
    );
  };
}
