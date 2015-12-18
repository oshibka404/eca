V = {
	drawLine: function (lineNumber, state) {
		if (!this.ctx) { 
			var canvas = document.getElementById("canvas");
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			var ctx = this.ctx = canvas.getContext("2d");
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.moveTo(0,0);
		}

		for(var i = 0; i < state.length; i++) {
			if (state[i]) {
				this.ctx.fillRect(i, lineNumber, 1, 1);
			} else {
				this.ctx.clearRect(i, lineNumber, 1, 1)
			}
		}
	}
};