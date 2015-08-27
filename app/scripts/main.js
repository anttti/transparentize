var originalImage = document.querySelector("#original");

var getPixels = function(img) {
  var c = this.getCanvas(img.width, img.height);
  var ctx = c.getContext("2d");
  ctx.drawImage(img,0,0);
  return ctx.getImageData(0,0,c.width,c.height);
};

var getCanvas = function(w,h) {
  var c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
};

var pixels = getPixels(originalImage);

var i = 0, data = pixels.data, length = data.length, threshold = 230;
for (; i < length; i += 4) {
    if (data[i] >= threshold && data[i+1] >= threshold && data[i+2] >= threshold) {
        data[i+3] = 0;
    }
}
pixels.data = data;

var c = getCanvas(originalImage.width, originalImage.height);
var ctx = c.getContext("2d");
ctx.putImageData(pixels, 0, 0);
document.body.appendChild(c);
