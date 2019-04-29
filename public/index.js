const url = 'http://localhost:3000/api/info';
fetch(url)
.then(function(response) {
return response.json();
})
.then(function(data){
  console.log(data);
  let output = '<h3>Here is Your Info<hr />';
  for(i in data){
    output += `<div class="container info"><ul><li>Name: ${data[i].name},</li><li>Age:${data[i].age},</li><li>Location: ${data[i].location}<hr /></li></ul></div>`;
  }
  document.getElementById('div1').innerHTML = output;
})
