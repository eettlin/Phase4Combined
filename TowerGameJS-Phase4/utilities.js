distance(circle0, circle1){
x0 = circle0.x;
y0 = circle0.y;
x1 = circle1.x;
y1 = circle1.y;

var dx = x1 - x0;
var dy = y1 - y0;

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

circleCollision(c0, c1){
  return distance(c0, c1) <= c0.radius + c1.radius;
}

circlePointCollision(x, y, circle){
  return distanceXY(x, y, circle.x, circle.y) < circle.radius;
}

rectanglePointCollision(x, y, rect){
  return inRange(x, rect.x, rect.x + rect.width) && inRange(y, rect.y, rect.y + rect.height);
}

rectangleCollision(min0, max0, min1, max1){
  return Math.max(min0, max0) => Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
}
