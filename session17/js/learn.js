function changeImage(id, img, name) {
   document.getElementById('default').src = img;
   document.getElementById('name_text').innerHTML = name;
   document.getElementById('conan').style.border = 'none';
   document.getElementById('souma').style.border = 'none';
   document.getElementById('donald trump').style.border = 'none';
   document.getElementById('neko').style.border = 'none';
   document.getElementById(id).style.border = '4px solid red';
}