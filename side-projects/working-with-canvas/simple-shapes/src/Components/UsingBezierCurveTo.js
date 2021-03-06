import React, { Component } from 'react';

class UsingBezierCurveTo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    window.onload = function () {
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(50,50);
        ctx.bezierCurveTo(300, 400, 400, 400, 400,300);
        ctx.lineTo(50, 50);
       ctx.fill();

        ctx.stroke();
        
    
    }
  }
  render() {
    return (
      <div className="simpleBarChart">
        <canvas id="myCanvas" width="600" height="600" />
      </div>
    );
  }
}

export default UsingBezierCurveTo;


