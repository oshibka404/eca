V = {
	BG_COLOR: '#fff',
	FILL_COLOR: '#000',
	drawLine: function (lineNumber, state) {
		if (!this.ctx) { 
			var canvas = document.getElementById("canvas");
			canvas.width = window.innerWidth-2;
			canvas.height = window.innerHeight-2;
			var ctx = this.ctx = canvas.getContext("2d");
			ctx.moveTo(0,0);
		}

		for(var i = 0; i < state.length; i++) {
			if (state[i]) {
				this.ctx.fillStyle = this.randomColor ? this.getRandomColor() : this.FILL_COLOR;
				this.ctx.fillRect(i, lineNumber, 1, 1);
			} else {
				this.ctx.fillStyle = this.BG_COLOR;
				this.ctx.clearRect(i, lineNumber, 1, 1)
			}
		}
	}
};