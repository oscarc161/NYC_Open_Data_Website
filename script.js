let data, info;

async function init(){
  let link = "https://eldenring.fanapis.com/api/bosses?limit=100 ";
  
  info = await fetch(link);
  data = await info.json();
  console.log(data);
  
  output = document.getElementById("output");
  let build = "";
  
  for(let i = 0; i < data.data.length; i++){
	  if(data.data[i].region == "Limgrave"||data.data[i].region == "Weeping Peninsula"||data.data[i].region == "Liurnia of the Lakes"||data.data[i].region == "Caelid"||data.data[i].region == "Altus Plateau"||data.data[i].region == "Dragonbarrow"){
	build += `<div class="fitted card">`;
	build += `<h4>${data.data[i].name}</h4>`;
	build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
	build += `<h5>Location: ${data.data[i].location}`;
	build += `<h4>Drops:</h4>`;
	build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
	build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
	build += `<p>${data.data[i].description}</p>`;
	build += `</div>`;
  }
  }
  
  output.innerHTML = build;
}


function Limgrave(){
	output = document.getElementById("output");
	region = document.getElementById("Idk");
	let build = "";
	
	for(let i = 0; i < data.data.length; i++){
		if(data.data[i].region == "Limgrave"){
			build += `<div class="fitted card">`;
			build += `<h4>${data.data[i].name}</h4>`;
			build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
			build += `<h5>Location: ${data.data[i].location}`;
			build += `<h4>Drops:</h4>`;
			build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
			build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
			build += `<p>${data.data[i].description}</p>`;
			build += `</div>`;
		}
  }
  console.log(build);
  output.innerHTML = build;
}

function Weeping_Peninsula(){
	output = document.getElementById("output");
	region = document.getElementById("Idk");
	let build = "";
	
	for(let i = 0; i < data.data.length; i++){
		if(data.data[i].region == "Weeping Peninsula"){
			build += `<div class="fitted card">`;
			build += `<h4>${data.data[i].name}</h4>`;
			build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
			build += `<h5>Location: ${data.data[i].location}`;
			build += `<h4>Drops:</h4>`;
			build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
			build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
			build += `<p>${data.data[i].description}</p>`;
			build += `</div>`;
		}
  }
  console.log(build);
  output.innerHTML = build;
}

function Liurnia_of_the_Lakes(){
	output = document.getElementById("output");
	region = document.getElementById("Idk");
	let build = "";
	
	for(let i = 0; i < data.data.length; i++){
		if(data.data[i].region == "Liurnia of the Lakes"){
			build += `<div class="fitted card">`;
			build += `<h4>${data.data[i].name}</h4>`;
			build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
			build += `<h5>Location: ${data.data[i].location}`;
			build += `<h4>Drops:</h4>`;
			build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
			build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
			build += `<p>${data.data[i].description}</p>`;
			build += `</div>`;
		}
  }
  console.log(build);
  output.innerHTML = build;
}

function Caelid(){
	output = document.getElementById("output");
	region = document.getElementById("Idk");
	let build = "";
	
	for(let i = 0; i < data.data.length; i++){
		if(data.data[i].region == "Caelid"){
			build += `<div class="fitted card">`;
			build += `<h4>${data.data[i].name}</h4>`;
			build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
			build += `<h5>Location: ${data.data[i].location}`;
			build += `<h4>Drops:</h4>`;
			build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
			build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
			build += `<p>${data.data[i].description}</p>`;
			build += `</div>`;
		}
  }
  console.log(build);
  output.innerHTML = build;
}
	
	
function Altus_Plateau(){
	output = document.getElementById("output");
	region = document.getElementById("Idk");
	let build = "";
	
	for(let i = 0; i < data.data.length; i++){
		if(data.data[i].region == "Altus Plateau"){
			build += `<div class="fitted card">`;
			build += `<h4>${data.data[i].name}</h4>`;
			build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
			build += `<h5>Location: ${data.data[i].location}`;
			build += `<h4>Drops:</h4>`;
			build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
			build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
			build += `<p>${data.data[i].description}</p>`;
			build += `</div>`;
		}
  }
  console.log(build);
  output.innerHTML = build;
}

function Dragonbarrow(){
	output = document.getElementById("output");
	region = document.getElementById("Idk");
	let build = "";
	
	for(let i = 0; i < data.data.length; i++){
		if(data.data[i].region == "Dragonbarrow"){
			build += `<div class="fitted card">`;
			build += `<h4>${data.data[i].name}</h4>`;
			build += `<h4>Region:<span class="red"> ${data.data[i].region}</span></h4>`;
			build += `<h5>Location: ${data.data[i].location}`;
			build += `<h4>Drops:</h4>`;
			build += `<h5>-<span id="gold"> ${data.data[i].drops[0]}</span></h5>`;
			build += `<h5>-<span id="blue"> ${data.data[i].drops[1]}</span></h5>`;
			build += `<p>${data.data[i].description}</p>`;
			build += `</div>`;
		}
  }
  console.log(build);
  output.innerHTML = build;
}


fetch("https://eldenring.fanapis.com/api/bosses?limit=100")
  .then(res => res.json())
  .then(data => {
    const regionCount = {};
    data.data.forEach(boss => {
      if (boss.location) {
        boss.location.split(',').forEach(loc => {
          const region = loc.trim();
          if (region) regionCount[region] = (regionCount[region] || 0) + 1;
        });
      }
    });
    console.log(regionCount);
  });

	

	