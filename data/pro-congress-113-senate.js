

let members_array=[];


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



//--------------------------------------

var  first_senate_table = new Vue(
  {
  el: '#data',


  data: {
    membersArrVue: [],
    checkedParties: [],
    filteredArrVue:[],
    state: 'All',
    filter_name: "",
    /* no_results: "There are no results", */
    
    },


  methods: {
        getData:function (){
          showSpinner();
          fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
        // method: 'Get'
              headers: {
                /* "X-API-Key": 'nIOJ5TasiAgDOn2oHi10bimLFstNcL0TbUWWYJmt' */
                /* 'X-API-Key': 'X-API-Key: PROPUBLICA_API_KEY'; */
                'X-API-Key':'zVc5hB9SJPb7D3LskxNmV0TEicAghQQ4KOETtdFB'
              } 
        })
        // if the request succeeds:
        .then((response) => {
          console.log(response, "response seems to be working!");


            return response.json();
        }) 
        //response is the promise


        .then((json) => { //here we indicate the action if the promise was a success
          hideSpinner();
          this.membersArrVue = json.results[0].members;
          
          return this.membersArrVue;
          })

        .catch((error)=>{
          console.log("fetch no funciona");
        })     
        }, 

       
        
        
        // filter function is called:
        
      },
    computed: {


      applyFilters: function(){
              this.filteredArrVue= [...this.membersArrVue]

              if (this.checkedParties.length !== 0){
                  this.filteredArrVue= [...this.membersArrVue].filter(x => this.checkedParties.includes(x.party));
                }
                
              if (this.state !='All') {
                console.log('!=All');
                
                  this.filteredArrVue = [...this.filteredArrVue].filter(x => x.state === this.state);
                
              
                  }
                          
  

                    return this.filteredArrVue
            
              
            },
            
                   
    },
 
    });


   first_senate_table.getData();



 


//------------------------------------------------------------------------------------------------------------------------//





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
