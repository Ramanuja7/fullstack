let form = document.getElementById('studentForm');
function kavali(labelText, type, name) {
  let label = document.createElement('label');
  label.textContent = labelText;
  let input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.required = true;
  input.placeholder="type here";
  form.appendChild(label);
  form.appendChild(input);
}
function addresssekkada(labelText, name) {
  const label = document.createElement('label');
  label.textContent = labelText;

  const areas= document.createElement('textarea');
  areas.name = name;
  areas.required = true;
  

  form.appendChild(label);
  form.appendChild(areas);
}
kavali("Student Name", "text", "studentName");
kavali("Phone Number", "tel", "phone");
kavali("Email ID", "email", "email");
kavali("College Name", "text", "college");
kavali("Parents' Name", "text", "parentsName");
addresssekkada("Address", "address");
kavali("CGPA", "number", "cgpa");
const il = document.createElement('label');
il.textContent = "Upload a nice photo";
const ii = document.createElement('input');
ii.type = "file";
ii.accept = "image/*";
ii.required = true;
form.appendChild(ii);
form.appendChild(il);
const bu = document.createElement('button');
bu.type = "submit";
bu.textContent = "Submit";
form.appendChild(bu);
let b=document.getElementById('i')
const img=document.createElement("img");
img.src='img.jpg';
b.appendChild(img);

