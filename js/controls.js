controls = {
	init: function(ruleString) {
		this.bin = document.getElementById('binary');
		this.dec = document.getElementById('decimal');
		this.form = document.getElementById('controls');

		var decValue = parseInt(ruleString, 2);

		this.bin.value = ruleString;
		this.dec.value = decValue;

		this.initEvents();
	},

	initEvents: function() {
		this.bin.addEventListener('input', this.onBinChange.bind(this));
		this.dec.addEventListener('input', this.onDecChange.bind(this));
		this.form.addEventListener('submit', this.onSubmit.bind(this));
	},

	onBinChange: function() {
		var binString = this.bin.value;
		this.dec.value = parseInt(binString, 2);
	},

	onDecChange: function() {
		var decString = this.dec.value;
		if (!parseInt(decString)
			|| parseInt(decString) > 255
			|| parseInt(decString) < 0
			) {
			decString = '0';
		}
		var ruleString = parseInt(decString).toString(2);
		var prefix = Array(8 - ruleString.length).fill(0).join('');
		this.bin.value = prefix + ruleString;
	},

	onSubmit: function() {
		M.setRule(this.bin.value);
		C.draw();
		return false;
	}
};
