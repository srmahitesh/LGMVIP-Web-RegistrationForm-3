let list = [];

function updateData() {
  let name_input = document.querySelector('#name input').value;
  let email_input = document.querySelector('#mail input').value;
  let web_input = document.querySelector('#web input').value;
  let image_input = document.querySelector('#photo').files[0] ? URL.createObjectURL(document.querySelector('#photo').files[0]) : "";
  let gender_input = document.querySelector('#gender select').value;
  
  // Initialize skills array
  let skills = [];

  // Add all the checked skills to the skills array
  let html_status = document.getElementById('html');
  let css_status = document.getElementById('css');
  let cpp_status = document.getElementById('cpp');
  if (html_status.checked) {
    skills.push('HTML');
  }
  if (css_status.checked) {
    skills.push('CSS');
  }
  if (cpp_status.checked) {
    skills.push('C++');
  }
  if(name_input.length==0 || email_input.length==0 || web_input.length==0 || gender_input.length==0){
    alert(`All Input Fields are Required`)
  }
  else{
  list.push({ name: name_input, email: email_input, website: web_input, photo: image_input, gender: gender_input, skills: skills });
  showData();
  clear();
  }
  }

document.querySelector('#submit-btn').addEventListener("click", () => {
  updateData();
});

function showData() {
  let mainHTML = document.querySelector('#rightbox');
  let newHTML = `
    <h2>Enrolled Students</h2>
  `;

  for (let i = 0; i < list.length; i++) {
    let { name, email, website, photo, gender, skills } = list[i];
    newHTML += `
      <div>
        <img src="${photo}" alt="image" width="100">
        <div>Name: ${name}</div>
        <div>Email: ${email}</div>
        <div>Website: <a href="${website}" target="_blank">${website}</a></div>
        <div>Gender: ${gender}</div>
        <div>Skills: ${skills.join(', ')}</div>
      </div>
      <hr>
    `;
  }

  mainHTML.innerHTML = newHTML;
}

document.querySelector('#clear-btn').addEventListener("click", () => {
  clear();
});

function clear(){
  document.querySelector('#name input').value = ``;
  document.querySelector('#mail input').value = ``;
  document.querySelector('#web input').value = ``;
  document.querySelector('#photo').value = ``;
  document.querySelector('#gender').value = ``;
  document.getElementById('html').checked = false;
  document.getElementById('css').checked = false;
  document.getElementById('cpp').checked = false;
}
