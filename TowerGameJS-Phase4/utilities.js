distance(c0, c1){
    this.x0 = c0.x;
    this.y0 = c0.y;
    this.x1 = c1.x;
    this.y1 = c1.y;

    var dx = this.x1 - this.x0;
    var dy = this.y1 - this.y0;

    return Math.sqrt(dx * dx + dy * dy);

  }

  distanceXY(x0, y0, x1, y1){
    var dx = x1 - x0;
    var dy = y1 - y0;

    return Math.sqrt(dx * dx + dy * dy);
  }

  inRange(value, min, max){
    return value >= Math.min(min, max) && Math.max(min, max) <= Math.max(min, max);
  }

//parameters:
//loc1 = location vector of first circle
//loc2 = location vector of second circle
//rad1 = radius of first circle
//rad2 = radius of second circle
  circleCollision(loc1, loc2, rad1, rad2){
    if(this.distance(loc1, loc2) <= rad1 + rad2){
      return true;
    }
  }

  //parameters:
  //x, y = locations of point
  //circx, circy = locations of circle
  //radius = radius of circle
  circlePointCollision(x, y, circx, circy, radius){
    if(this.distanceXY(x, y, circx, circy) < radius){
      return true;
    }
  }

  //parameters:
  //x, y = locations of point
  //loc = location vector of rectangle
  //rect width, height = width and height of rectangle
  rectanglePointCollision(x, y, loc, rectWidth, rectHeight){
    if(this.inRange(x, loc.x, loc.x + rectWidth) && inRange(y, loc.y, loc.y + rectHeight)){
      return true;
    }
  }


  range(min0, max0, min1, max1){
    return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
  }


  //parameters:
  //loc1 = location vector of first rectangle
  //loc2 = location vector of second rectangle
  rectangleCollision(loc1, rectWidth1, rectHeight1, loc2, rectWidth2, rectHeight2){
    if(this.range(loc1.x, loc1.x + rectWidth1, loc2.x, loc2.x + rectWidth2) &&
    this.range(loc1.y, loc1.y + rectHeight1, loc2.y, loc2.y + rectHeight2)){
  return true;
}
  }
