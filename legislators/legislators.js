//jurisdiction & jurisdiction_id & people



//----------- State array--------------------


let stateDictionary = { "AK" : "Alaska",
  "AL" : "Alabama",
  "AR" : "Arkansas",
  "AZ" : "Arizona",
  "CA" : "California",
  "CO" : "Colorado",
  "CT" : "Connecticut",
  "DC" : "District of Columbia",
  "DE" : "Delaware",
  "FL" : "Florida",
  "GA" : "Georgia",
  "GU" : "Guam",
  "HI" : "Hawaii",
  "IA" : "Iowa",
  "ID" : "Idaho",
  "IL" : "Illinois",
  "IN" : "Indiana",
  "KS" : "Kansas",
  "KY" : "Kentucky",
  "LA" : "Louisiana",
  "MA" : "Massachusetts",
  "MD" : "Maryland",
  "ME" : "Maine",
  "MI" : "Michigan",
  "MN" : "Minnesota",
  "MO" : "Missouri",
  "MS" : "Mississippi",
  "MT" : "Montana",
  "NC" : "North Carolina",
  "ND" : "North Dakota",
  "NE" : "Nebraska",
  "NH" : "New Hampshire",
  "NJ" : "New Jersey",
  "NM" : "New Mexico",
  "NV" : "Nevada",
  "NY" : "New York",
  "OH" : "Ohio",
  "OK" : "Oklahoma",
  "OR" : "Oregon",
  "PA" : "Pennsylvania",
  "PR" : "Puerto Rico",
  "RI" : "Rhode Island",
  "SC" : "South Carolina",
  "SD" : "South Dakota",
  "TN" : "Tennessee",
  "TX" : "Texas",
  "UT" : "Utah",
  "VA" : "Virginia",
  "VI" : "Virgin Islands",
  "VT" : "Vermont",
  "WA" : "Washington",
  "WI" : "Wisconsin",
  "WV" : "West Virginia",
  "WY" : "Wyoming"}

  const states_abb = Object.keys(stateDictionary);
  //(states_abb, 'keys')
  const stateInLink = Object.values(stateDictionary);
  //stateInLink, 'values')





/* let stateInLink = ['Alabama','Alaska','American%20samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware', 'District&20columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New%20Hampshire','New%20Jersey','New%20Mexico','New%20York','North%20Carolina','North%20Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode%20Island','South%20Carolina','South%20Dakota','Tennessee','Texas','Utah','Vermont','Virgin%20Island','Virginia','Washington','West%20Virginia','Wisconsin','Wyoming']
 */



///-------- buiilding the selecting state form-------------------
function states_form_function(){

  let select = document.getElementById("select_state_legislators");
  
// the loop should start here
      for (i=0; i < states_abb.length; i++){
        
          let option =document.createElement('option');
          option.setAttribute('value', states_abb[i]);

          /* option2.setAttribute('selected'); */
          let text_form_states =   document.createTextNode(stateInLink[i]);
          option.appendChild(text_form_states);

          select.appendChild(option);

      }
       return document.getElementById("select_state_legislators").value
      
}



states_form_function()









//--------------obtainUrl-------------------------------------------------------------------

function obtainUrl(state){
  let first_part_url = new URL('https://v3.openstates.org/people?jurisdiction')

    //jurisdiction=North%20Dakota&page=1&per_page=10
      
      let searchParam = new URLSearchParams()

      searchParam.append('', state)
      searchParam.append('page',1)  
      searchParam.append('per_page', 10)
      
      return first_part_url + searchParam;
   
}
let final_url = obtainUrl();

console.log(final_url, typeof final_url, 'final_url');



//------------spinner-------------------


const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 3000);
}



function hideSpinner() {
   spinner.className = spinner.className.replace("show", "");
 } 




 


//--------------THE FETCH---------------------------------------------------------------------------------------------


//   'https://v3.openstates.org/people?jurisdiction=AK&page=1&per_page=10' 

//!!  feth link debe ser final_url
function call_fetch(url) {    
  console.log('Fetch starts');
  showSpinner();

  let members_array = []  

 
    fetch(url, {
      headers:{
        //'X-API-Key': 'ba8aa145-cb0e-4c40-b460-42a242e4aa90',
        'X-API-Key': '28ac7a38-086e-4631-b4fc-14541a976021',
      }
    })
    .then((response)=>{
       showSpinner();
      return response.json();
    }).then(json =>{
      hideSpinner();
      people = json;
      members_array = json.results

      filterMemberState(members_array)
     
    }).catch((error)=>{
      console.log("no funciona", error);
    });
  }

 //---------------------------------------------------------------------------------------------------
let first_url = 'https://v3.openstates.org/people?jurisdiction=AK&page=1&per_page=10'


  call_fetch(first_url)



    //-----------------------functions secondary -------------------------------------------------------------------


    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }



    function getChamberTitle(congress_house) {
          if (congress_house == 'lower'){
            return 'House of Representatives';
          
          } 
        if (congress_house == 'upper'){
            return 'Senate';
          }

        else {
          
            return capitalizeFirstLetter(congress_house)
        }
          
      }



    //------------filterMemberState-----------------------------------------------------------


    function filterMemberState(array){

        
      document.getElementById('most_loyal').getElementsByTagName('tbody')[0].innerHTML = "";
        let table_most_loyal = document.getElementById("most_loyal");
        let tbody_mly = document.getElementById('most_loyal').getElementsByTagName('tbody')[0];


        //*************************************

        for (i=0; i < array.length; i++){
        // Create row

            let newRow = tbody_mly.insertRow(i);
            //Create cells
            let newCell0 = newRow.insertCell(0);
            let newCell1 = newRow.insertCell(1);
            let newCell2 = newRow.insertCell(2);
            let newCell3 = newRow.insertCell(3);

            // link, create add link and text on cell0
            let link0 = document.createElement("a");
            link0.setAttribute("href", array[i].openstates_url)

            let linkText = document.createTextNode(array[i].name);
            link0.appendChild(linkText);
            newCell0.appendChild(link0);
 


            // adding text
            //   newCell0.textContent = (list_highest_tenth[i].first_name + " " + (list_highest_tenth[i].middle_name || "")  +" "+ list_highest_tenth[i].last_name) 
            newCell1.textContent =array[i].party ;
            newCell2.textContent= (array[i].current_role.org_classification  === 'lower'||'upper'? array[i].current_role.title: array[i].current_role.org_classification)
            newCell3.textContent= array[i].jurisdiction.name
  

            }

            // Here we in a paragraph which state we're working on
            document.getElementById('state').textContent =  people.results[0].jurisdiction.name 
        
    }
    

    
          //------------------Listener--------------------------


       
  document.getElementById("select_state_legislators").addEventListener("change", function () {
    let dropdown_selected_state = document.getElementById("select_state_legislators").value;
   

   

  final_url = obtainUrl(dropdown_selected_state);
  console.log(final_url, 'final url')
  call_fetch(final_url)
  });