
var images = document.getElementsByClassName('cmp-contentfragment__element--creditCardImage');


Array.prototype.forEach.call(images, function(image){

var img = document.createElement("img");
img.src = image.querySelector('dd').textContent;

// Create a new element
var newNode = document.createElement('div');
newNode.className = 'cmp-contentfragment_image';
newNode.append(img);

image.prepend(newNode);
});
  