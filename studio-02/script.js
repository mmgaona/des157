var backpackButton = document.getElementById('backpackButton');
var backpack = document.getElementById('backpack');
var notebook = document.getElementById('notebook');
var backpackButton = document.getElementById('backpackButton');
var backpack = document.getElementById('backpack');
var title = document.getElementById('title');
var close = document.getElementById('close');
var footer = document.getElementById('footer');
var closeButton = document.getElementById('closeButton');

iphoneButton.addEventListener('mouseover', function() {
  iphoneButton.style.opacity="0.4";
  if (iphoneButton.style.width > "100px") {
    iphoneButton.style.opacity="1";
  }
});

iphoneButton.addEventListener('mouseout', function() {
  iphoneButton.style.opacity="1";
});

notebookButton.addEventListener('mouseover', function() {
  notebookButton.style.opacity="0.4";
  if (notebookButton.style.width > "250px") {
    notebookButton.style.opacity="1";
  }
});

notebookButton.addEventListener('mouseout', function() {
  notebookButton.style.opacity="1";
});

backpackButton.addEventListener('mouseover', function() {
  backpackButton.style.opacity="0.4";
  if (backpackButton.style.width > "200px") {
    backpackButton.style.opacity="1";
  }
});

backpackButton.addEventListener('mouseout', function() {
  backpackButton.style.opacity="1";
});


backpackButton.addEventListener('click', function() {
  backpack.style.display="inline";
  iphone.style.display="none"
  notebook.style.display="none"
  backpack.style.marginTop="-58%";
  iphoneButton.style.display="none";
  notebookButton.style.display="none";
  backpackButton.style.width="450px";
  backpackButton.style.marginLeft="-34%";
  close.style.backgroundColor="#f4e52a";
  title.style.display="none";
  close.style.display="inline";
  footer.style.display="none";
});

notebookButton.addEventListener('click', function() {
  notebook.style.display="inline";
  backpack.style.display="none";
  iphone.style.display="none";
  notebook.style.marginTop="-58%";
  backpackButton.style.display="none";
  iphoneButton.style.display="none";
  notebookButton.style.width="500px";
  notebookButton.style.marginLeft="-40%";
  notebookButton.style.marginTop="9%";
  close.style.backgroundColor="#003840";
  title.style.display="none";
  close.style.display="inline";
  footer.style.display="none";
});

iphoneButton.addEventListener('click', function() {
  notebook.style.display="none";
  backpack.style.display="none";
  iphone.style.display="inline";
  iphone.style.marginTop="-58%";
  backpackButton.style.display="none";
  notebookButton.style.display="none";
  iphoneButton.style.width="250px";
  iphoneButton.style.marginLeft="-25%";
  iphoneButton.style.paddingRight="10%";
  close.style.backgroundColor="#e31985";
  title.style.display="none";
  close.style.display="inline";
  footer.style.display="none";

  if (window.screen > "751px") {
    close.style.marginLeft="-70%";
    iphoneButton.style.marginLeft="-10%";
  }
});


closeButton.addEventListener('mouseover', function() {
closeButton.style.cursor="pointer";
});

closeButton.addEventListener('click', function() {
  close.style.display="none";
  title.style.display="grid";
  backpackButton.style.display="inline";
  notebookButton.style.display="inline";
  iphoneButton.style.display="inline";
  iphoneButton.style.paddingRight="0%";
  iphoneButton.style.marginLeft="0.1%";
  notebookButton.style.marginLeft="0.1%";
  backpackButton.style.marginLeft="0.1%";
  backpackButton.style.paddingLeft="3%";
  backpackButton.style.width="200px";
  notebookButton.style.width="250px";
  iphoneButton.style.width="100px";
  footer.style.display="block";
});
