const form = document.getElementById('studentForm');
function kavali(labelText, type, name,placeholder) {
  const label = document.createElement('label');
  label.textContent = labelText;

  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.required = true;
  input.placeholder="";

  form.appendChild(label);
  form.appendChild(input);
}

function createSelect(labelText, name, options) {
  const label = document.createElement('label');
  label.textContent = labelText;

  const select = document.createElement('select');
  select.name = name;
  select.required = true;

  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });

  form.appendChild(label);
  form.appendChild(select);
}


function addresssekkada(labelText, name) {
  const label = document.createElement('label');
  label.textContent = labelText;

  const textarea = document.createElement('textarea');
  textarea.name = name;
  textarea.required = true;

  form.appendChild(label);
  form.appendChild(textarea);
}

kavali("Student Name", "text", "studentName");
kavali("Phone Number", "tel", "phone");
kavali("Email ID", "email", "email");
kavali("College Name", "text", "college");

createSelect("Branch", "branch", [
  "CSE", "CSE-DS", "CSE-CS", "ECE", "EEE", "MECH", "CIVIL"
]);

kavali("Parents' Name", "text", "parentsName");
addresssekkada("Address", "address");
kavali("CGPA", "number", "cgpa");

const il = document.createElement('label');
il.textContent = "Upload Image";
const ii = document.createElement('input');
ii.type = "file";
ii.name = "studentImage";
ii.accept = "image/*";
ii.required = true;

form.appendChild(il);
form.appendChild(ii);


const bu = document.createElement('button');
bu.type = "submit";
bu.textContent = "Submit";

form.appendChild(bu);

ii.addEventListener("change", function() {
  const imgPreview = document.createElement("img");
  imgPreview.src = URL.createObjectURL(ii.files[0]);
  form.appendChild(imgPreview);
});
