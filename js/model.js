M = {
	defaultRule: (161).toString(2),

	setRule: function(ruleString) {
		this.rule = {
			'111': ruleString[0] | 0,
			'110': ruleString[1] | 0,
			'101': ruleString[2] | 0,
			'100': ruleString[3] | 0,
			'011': ruleString[4] | 0,
			'010': ruleString[5] | 0,
			'001': ruleString[6] | 0,
			'000': ruleString[7] | 0
		};
	},

	getNewState: function () {
		if (!this.state) {
			this.state = this.getInititalState()
		} else {
			this.state = this.calculateState(this.state);
		}

		return this.state;
	},

	getInititalState: function() {
		var state = Array(this.size);
		for (var i = 0; i < state.length; i++) {
			state[i] = Math.round(Math.random()); // {0, 1}
		}
		return state;
	},

	calculateState: function(previousState) {
		var newState = Array(previousState.length);
		
		for (var i = 0; i < previousState.length; i++) {
			newState[i] = this.getCellValue(
				previousState[i-1] | 0, 
				previousState[i], 
				previousState[i+1] | 0
			);
		}

		return newState;
	},

	getCellValue: function(left, current, right) {
		if (!this.rule) {
			this.setRule(this.defaultRule);
		}

		var key = [left, current, right].join('');
		return this.rule[key];
	}
};