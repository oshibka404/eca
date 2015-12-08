C = {
	init: function () {
		M.size = window.innerWidth;
		this.steps = window.innerHeight;
		console.log(this.draw());
	},

	draw: function() {
		var t0 = performance.now();
		for (var i = 0; i < this.steps; i++) {
			var state = M.getNewState();
			V.drawLine(i, state);
		}
		return performance.now() - t0;
	},

	setDecimalRule: function(decRule) {
		M.setRule(parseInt(decRule, 10).toString(2));
	},

	setBinaryRule: function(binRule) {
		M.setRule(parseInt(binRule, 2).toString(2));
	}
};