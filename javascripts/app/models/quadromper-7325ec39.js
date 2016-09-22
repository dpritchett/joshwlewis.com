Quad=function(e,t,n,r){this.container=e,this.color=t,this.opacity=0,this.growth=.005,this.setPoints=function(){var e=[[0,0],[1,0],[1,1],[0,1]],t=Math.floor(Math.random()*4),n=t+1;n===4&&(n=0);var r=n%2===0?0:1;e[t][r]=Math.random(),e[n][r]=Math.random(),this.points=e},this.createCanvas=function(e,t){this.canvas=$("<canvas>").prop({height:e,width:t}).css({opacity:this.opacity}).addClass("quad"),this.container.prepend(this.canvas)},this.getX=function(e){return Math.round(this.points[e][0]*this.canvas[0].width)},this.getY=function(e){return Math.round(this.points[e][1]*this.canvas[0].height)},this.draw=function(){var e=this.canvas[0].getContext("2d");e.fillStyle=this.color,e.beginPath(),e.moveTo(this.getX(0),this.getY(0));for(i=3;i>=0;i--)e.lineTo(this.getX(i),this.getY(i));e.closePath(),e.fill()},this.increment=function(){this.opacity=this.opacity+this.growth,this.canvas.css({opacity:this.opacity}),this.opacity>=1&&(this.growth=-this.growth)},this.setDims=function(e,t){if(e!==this.canvas[0].height||t!==this.canvas[0].width)this.canvas[0].width=t,this.canvas[0].height=e,this.draw()},this.destroy=function(){this.canvas.remove()},this.setPoints(),this.createCanvas(n,r),this.draw()},Quadromper=function(e,t){this.container=e,this.colors=t,this.quads=[],this.step=0,this.pixelRatio=window.devicePixelRatio||1,this.getHeight=function(){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return e*this.pixelRatio},this.getWidth=function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return e*this.pixelRatio},this.randomColor=function(){return this.colors[Math.floor(Math.random()*this.colors.length)]},this.buildQuad=function(){var e=new Quad(this.container,this.randomColor(),this.getHeight(),this.getWidth());return this.quads.push(e),e},this.animate=function(){this.step%60===0&&this.buildQuad();if(this.step%120===0){var e=this.getHeight(),t=this.getWidth();this.quads.forEach(function(n){n.setDims(e,t)})}this.step%2===0&&this.quads.forEach(function(e){e.increment()}),this.quads[0].opacity<=0&&(this.quads[0].destroy(),this.quads.shift()),window.requestAnimationFrame(this.animate.bind(this)),this.step=this.step+1}};