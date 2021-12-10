


let url = 'https://api.propublica.org/congress/v1/113/senate/members.json'; 
/*fetch(url, 
  { 
  method: "GET", headers: {"X-API-Key": "2K0CRlaQh1NOPgDCsDMXqa1DQXEhkVPCrrDWCVvK",} 
  }) 
  .then(response => response.json()) 
  .then(function(data) 
  {}*/

  /*response.json() is a method on the Response object that lets you extract a JSON object from the response.
   The method returns a promise, so you have to wait for the JSON: await response.json().*/

async function fetch_function(){ 
const response = await fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
  // method: 'Get'
              headers: {
                'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
              
              } 
        })

    
      const data = await response.json();
      
      return data;


  response.then(function(data) {
  members_array = data.results[0].members;
  console.log('FETCH FUNCIONA');
  console.log(members_array)
  });

 
}

fetch_function()

////
/* fetch_function().then(data => {
  let members_array = data.results[0].members;
  console.log('FETCH FUNCIONA');
  console.log(members_array); // fetched movies
});
 */
// /////////////////////////////////////////////// fetch ///////
/* var xhr = new XMLHttpRequest();

xhr.onload = function(){
  if(xhr.status === 200) {
   responseObject = JSON.parse(xhr.responseText);
   let members_array= data.results[0].members;
   document.getElementById('here').innerHTML= members_array;
}


data.open('GET', 'https://api.propublica.org/congress/v1/113/senate/members.json', true);
data.send(null);
 */





/*fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
  // method: 'Get'
  headers: {
    "X-API-Key": 'nIOJ5TasiAgDOn2oHi10bimLFstNcL0TbUWWYJmt'
  } 
})
.then((response) => {
  return response.json()
}) //respone is the promise
  .then((json) => { //here we indicate the action if the promise was a
    members_array = JSON.parse(data.results[0].members);;
    
   

});*/

//!!  feth link debe ser final_url
let members_array = []
function call_fetch() {    
  console.log('Fetch starts');
    fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
    headers:{
      'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
      }
  })
    .then((response)=>{
      
      return response.json();
    }).then(json =>{
      
     
      members_array = json.results[0].members;

   
 




//-----------------------------------------------------------NOTES------------------------------------------------------------//
/*I've used same JS for 2 html. The following formula allows JS to execute only the code that belongs to specific html page */

if(window.location.href.includes('senate_house-party-loyalty-starter-page.html')){  }




//------------------------------------------------------------------------------------------------------------------------//


 //HTML  46 filas fila por cada miembro, columna por cada propiedad
//---------------------variables-----------------------------
/* var selected_state = document.getElementById("state_list").value;
 */
/* let members_array = data.results[0].members; */
let states = [
  "All",
"AK",
"AL",
"AR",
"AS",
"AZ",
"CA",
"CO",
"CT",
"DC",
"DE",
"FL",
"GA",
"GU",
"HI",
"IA",
"ID",
"IL",
"IN",
"KS",
"KY",
"LA",
"MA",
"MD",
"ME",
"MI",
"MN",
"MO",
"MS",
"MT",
"NC",
"ND",
"NE",
"NH",
"NJ",
"NM",
"NV",
"NY",
"OH",
"OK",
"OR",
"PA",
"PR",
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VA",
"VI",
"VT",
"WA",
"WI",
"WV",
"WY"]
//file:///C:/Users/genis/Documents/ESTUDIS/UBIQUM/projects/ubiqum-bootcamp/staff/genis-mestres/course-2/task_IV/house-party-loyalty-starter-page.html
/*--------------Number of Reps &  Voted with Prty-------------------------------------*/
 
//calculate total number of senators by party

let total_Rep = [];
let total_Dem =[];
let total_Ind = [];

for (i=0; i<members_array.length; i++){
  if(members_array[i].party ==='R'){
    total_Rep.push(members_array[i])
  }
  if(members_array[i].party ==='D'){
    total_Dem.push(members_array[i])
  }
  if(members_array[i].party ==='ID'){
    total_Ind.push(members_array[i])
  }
}
/* console.log('total de R, D y Ind');

console.log(total_Rep.length)
console.log(total_Dem.length)
console.log(total_Ind.length)
 */

/* 

let party = ""
function num_reps_function(x) {
  return x === 'D';
}

  party = 'D'
  let Dmembers = members_array.filter(num_reps_function);
  console.log(Dmembers.length)

  party = 'R'
  let Rmembers = members_array.filter(num_reps_function);
  console.log(Rmembers.length)

  party = 'ID'
  let IDmembers = members_array.filter(num_reps_function);
  console.log(IDmembers.length)
 */
//--------------- calculate  average votes with party ----------------
let voted_with_party_total_R = 0;
let voted_with_party_average_R = 0;

let voted_with_party_total_D = 0;
let voted_with_party_average_D = 0;

let voted_with_party_total_ID = 0;
let voted_with_party_average_ID = 0;
//	Voted with Prty
for (i=0; i < members_array.length;i++){
  if(members_array[i].party === "R"){
  voted_with_party_total_R += members_array[i].votes_with_party_pct;
  }

  if(members_array[i].party === "D"){
    voted_with_party_total_D += members_array[i].votes_with_party_pct;
    }

  if(members_array[i].party === "ID"){
    voted_with_party_total_ID += members_array[i].votes_with_party_pct;
    }

}


 voted_with_party_average_R = (voted_with_party_total_R / total_Rep.length).toFixed(2);
 voted_with_party_average_D = (voted_with_party_total_D / total_Dem.length).toFixed(2);
 voted_with_party_average_ID = (voted_with_party_total_ID / total_Ind.length|0).toFixed(2);


/* console.log("voted_with_party_average  REP" + voted_with_party_average_R);
console.log("voted_with_party_average  DEM" + voted_with_party_average_D);
console.log("voted_with_party_average  IND" + voted_with_party_average_ID); */



//	% Voted with Prty




//-----------------------------Adding results to table 1------------------------------------------------------


console.log("statistics!!");



document.getElementById("rep_nreps").textContent = total_Rep.length;
document.getElementById("dem_nreps").textContent = total_Dem.length;
document.getElementById("ind_nreps").textContent = total_Ind.length;
document.getElementById("total_nreps").textContent = members_array.length;

document.getElementById("rep_with_party").textContent = voted_with_party_average_R;
document.getElementById("dem_with_party").textContent = voted_with_party_average_D;
document.getElementById("ind_with_party").textContent = voted_with_party_average_ID;




//------------Calculate percentile ---------------------------------------------------------
/* "votes_with_party_pct": 96.96,
"votes_against_party_pct": 3.04 */

// Here we create a new array of objects, sorted by votes_with_party_pct in an ascending order.

/* console.log('how many senators?' + members_array.length); */
let lowest_tenth = Math.ceil(members_array.length * 0.10);
let highest_tenth= members_array.length - lowest_tenth; //debería ser 94
/* console.log(' total number of senators' + members_array.length);
console.log('lowest tenth ' + lowest_tenth + '/ highest tenth ' + highest_tenth); */

let lowest_tenth_index = lowest_tenth -1;
let highest_tenth_index = highest_tenth-1;


const senators_sort_ascending = members_array.sort(function(a,b) {
  const lastPerson = a.votes_with_party_pct;
  const nextPerson = b.votes_with_party_pct;
  if (lastPerson < nextPerson) {
    return -1;
  } else {
    return 1;
  }
});

//--
let lowest_tenth_value = senators_sort_ascending[lowest_tenth_index].votes_with_party_pct;
/* console.log('lowest_tenth_value: ');
console.log(lowest_tenth_value); */

let highest_tenth_value = senators_sort_ascending[highest_tenth_index].votes_with_party_pct;
/* console.log('highest_tenth_value: ');
console.log(highest_tenth_value);
 */
//--


let list_lowest_tenth = senators_sort_ascending.slice(0, lowest_tenth_index +1);
let list_highest_tenth =senators_sort_ascending.slice(highest_tenth_index, ).reverse();
/* console.log('list_lowest_tenth')
console.log(list_lowest_tenth);
console.log('list_highest_tenth')
console.log(list_highest_tenth); */


let list_lowest_tenth_B = senators_sort_ascending.slice(0, lowest_tenth_value);

//
for (i=0; i<senators_sort_ascending.length ; i++){
console.table(senators_sort_ascending[i].votes_with_party_pct);
}


//-----------------------table 2------------------------------------
//table 2 works with the tenth least loyal array, and list name, num party votes and % of party novtes

// name = (list_lowest_tenth[i].first_name + " " + (list_lowest_tenth[i].middle_name || "")  +" "+ list_lowest_tenth[i].last_name)
// num party votes  = (list_lowest_tenth[i].votes_with_party_pct/100) * list_lowest_tenth[i].total_votes
// % party votes   = list_lowest_tenth[i].votes_with_party_pct



    
/* let tbody_tle = document.getElementById('least_loyal').getElementsByTagName('tbody')[0]; */




    let table_least_loyal = document.getElementById("least_loyal");

    let tbody_table_lowest = document.getElementById('least_loyal').getElementsByTagName('tbody')[0];

    let tbody = tbody_table_lowest 
  
      function loyalty_table(array){
            
         //console.log(tbody);
            for (i=0; i < array.length;i++){
                  // Create row
                
                  let newRow = tbody.insertRow(i);
                  //Create cells
                  let newCell0 = newRow.insertCell(0);
                  let newCell1 = newRow.insertCell(1);
                  let newCell2 = newRow.insertCell(2);
                
                // link, create add link and text on cell0
                let link0 = document.createElement("a");
                link0.setAttribute("href", array[i].url)

                var linkText = document.createTextNode((array[i].first_name + " " + (array[i].middle_name || "")  +" "+ array[i].last_name));
                link0.appendChild(linkText);
                newCell0.appendChild(link0);

                // adding text
                // newCell0.textContent = (list_lowest_tenth[i].first_name + " " + (list_lowest_tenth[i].middle_name || "")  +" "+ list_lowest_tenth[i].last_name) 
                  newCell1.textContent = Math.ceil((array[i].votes_with_party_pct / 100) * array[i].total_votes);
                  newCell2.textContent = array[i].votes_with_party_pct;
                }

      }
      
    loyalty_table(list_lowest_tenth);
    

//-----------------------table 3--------------------------------------------------------------------

//table 2 works with the tenth most loyal array, and list name, num party votes and % of party novtes

// name = (list_highest_tenth[i].first_name + " " + (list_highest_tenth[i].middle_name || "")  +" "+ list_highest_tenth[i].last_name)
// num party votes  = (list_highest_tenth[i].votes_with_party_pct/100) * list_highest_tenth[i].total_votes
// % party votes   = list_highest_tenth[i].votes_with_party_pct


          
          let table_most_loyal = document.getElementById("most_loyal");
          let tbody_mly = document.getElementById('most_loyal').getElementsByTagName('tbody')[0];

          tbody = tbody_mly
          loyalty_table(list_highest_tenth);
//*************************************
        
          for (i=0; i < list_highest_tenth.length;i++){
          // Create row

          let newRow = tbody_mly.insertRow(i);
          //Create cells
          let newCell0 = newRow.insertCell(0);
          let newCell1 = newRow.insertCell(1);
          let newCell2 = newRow.insertCell(2);



          // link, create add link and text on cell0
          let link0 = document.createElement("a");
          link0.setAttribute("href", list_highest_tenth[i].url)

          var linkText = document.createTextNode((list_highest_tenth[i].first_name + " " + (list_highest_tenth[i].middle_name || "")  +" "+ list_highest_tenth[i].last_name));
          link0.appendChild(linkText);
          newCell0.appendChild(link0);


          // adding text
          //   newCell0.textContent = (list_highest_tenth[i].first_name + " " + (list_highest_tenth[i].middle_name || "")  +" "+ list_highest_tenth[i].last_name) 
          newCell1.textContent = Math.ceil((list_highest_tenth[i].votes_with_party_pct / 100) * list_highest_tenth[i].total_votes);
          newCell2.textContent = list_highest_tenth[i].votes_with_party_pct;

          }
          
    
          

//cerramos la fetch
        }).catch((error)=>{
          console.log("no funciona", error);
        });
      }
    call_fetch()      

