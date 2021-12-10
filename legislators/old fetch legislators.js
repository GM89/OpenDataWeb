//jurisdiction & jurisdiction_id & people
//jurisdiction
/*
curl -X 'GET' \

  'https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52' \
  -H 'accept: application/json' \
  -H 'x-api-key: 28ac7a38-086e-4631-b4fc-14541a976021'

https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52






//jurisdiction_id
curl -X 'GET' \
  'https://v3.openstates.org/jurisdictions/North%20Dakota' \
  -H 'accept: application/json' \
  -H 'x-api-key: 28ac7a38-086e-4631-b4fc-14541a976021'
Request URL
https://v3.openstates.org/jurisdictions/North%20Dakota


//people


curl -X 'GET' \
  'https://v3.openstates.org/people?page=1&per_page=10' \
  -H 'accept: application/json' \
  -H 'x-api-key: 28ac7a38-086e-4631-b4fc-14541a976021'
Request URL
https://v3.openstates.org/people?page=1&per_page=10 */







let members_array
let people
fetch('https://v3.openstates.org/people?jurisdiction=California&=1&per_page=10',{
  headers:{
    'X-API-Key': '28ac7a38-086e-4631-b4fc-14541a976021',
  }
})
.then((response)=>{
  console.log("funciona", response);
  return response.json();
}).then(json =>{
  console.log(json);
  people = json;
  members_array = json.results



//todo el código de la página aquí







let jurisdictions = {
    "results": [
      {
        "id": "ocd-jurisdiction/country:us/state:al/government",
        "name": "Alabama",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:al",
        "url": "http://www.legislature.state.al.us/",
        "latest_bill_update": "2021-10-25T06:03:08.496839+00:00",
        "latest_people_update": "2021-10-08T18:17:44.339815+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ak/government",
        "name": "Alaska",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ak",
        "url": "http://w3.legis.state.ak.us/",
        "latest_bill_update": "2021-10-25T06:33:41.837542+00:00",
        "latest_people_update": "2021-10-12T15:45:08.792786+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:az/government",
        "name": "Arizona",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:az",
        "url": "http://www.azleg.gov/",
        "latest_bill_update": "2021-10-25T09:07:02.232299+00:00",
        "latest_people_update": "2021-10-08T18:19:34.333767+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ar/government",
        "name": "Arkansas",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ar",
        "url": "http://www.arkleg.state.ar.us",
        "latest_bill_update": "2021-10-25T07:21:08.172918+00:00",
        "latest_people_update": "2021-10-08T18:18:47.232425+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ca/government",
        "name": "California",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ca",
        "url": "http://www.legislature.ca.gov/",
        "latest_bill_update": "2021-10-25T01:29:50.404309+00:00",
        "latest_people_update": "2021-10-19T18:56:41.893325+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:co/government",
        "name": "Colorado",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:co",
        "url": "http://leg.colorado.gov/",
        "latest_bill_update": "2021-10-25T08:13:36.832112+00:00",
        "latest_people_update": "2021-10-08T18:22:14.444127+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ct/government",
        "name": "Connecticut",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ct",
        "url": "http://www.cga.ct.gov/",
        "latest_bill_update": "2021-10-25T09:00:04.615213+00:00",
        "latest_people_update": "2021-10-08T18:23:40.381382+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:de/government",
        "name": "Delaware",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:de",
        "url": "http://legis.delaware.gov/",
        "latest_bill_update": "2021-10-25T07:04:33.705131+00:00",
        "latest_people_update": "2021-10-08T18:24:04.628229+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/district:dc/government",
        "name": "District of Columbia",
        "classification": "state",
        "division_id": "ocd-division/country:us/district:dc",
        "url": "https://dc.gov",
        "latest_bill_update": "2021-10-25T08:19:50.293355+00:00",
        "latest_people_update": "2021-10-08T18:23:45.153092+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:fl/government",
        "name": "Florida",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:fl",
        "url": "http://myflorida.com",
        "latest_bill_update": "2021-10-23T09:47:30.248252+00:00",
        "latest_people_update": "2021-10-08T18:25:59.759204+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ga/government",
        "name": "Georgia",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ga",
        "url": "http://www.legis.ga.gov/",
        "latest_bill_update": "2021-10-25T08:22:42.370331+00:00",
        "latest_people_update": "2021-10-08T18:27:35.274938+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:hi/government",
        "name": "Hawaii",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:hi",
        "url": "http://capitol.hawaii.gov",
        "latest_bill_update": "2021-10-25T07:20:35.248340+00:00",
        "latest_people_update": "2021-10-08T18:27:59.695133+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:id/government",
        "name": "Idaho",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:id",
        "url": "http://www.legislature.idaho.gov",
        "latest_bill_update": "2021-10-25T06:14:45.470423+00:00",
        "latest_people_update": "2021-10-08T18:29:49.501116+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:il/government",
        "name": "Illinois",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:il",
        "url": "http://www.ilga.gov/",
        "latest_bill_update": "2021-10-25T08:03:15.503374+00:00",
        "latest_people_update": "2021-10-08T18:31:42.183047+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:in/government",
        "name": "Indiana",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:in",
        "url": "http://www.in.gov/",
        "latest_bill_update": "2021-10-25T02:10:58.530602+00:00",
        "latest_people_update": "2021-10-08T18:32:38.564526+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ia/government",
        "name": "Iowa",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ia",
        "url": "https://www.legis.iowa.gov/",
        "latest_bill_update": "2021-10-25T04:48:23.244301+00:00",
        "latest_people_update": "2021-10-08T18:28:55.926960+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ks/government",
        "name": "Kansas",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ks",
        "url": "http://www.kslegislature.org/",
        "latest_bill_update": "2021-10-25T08:16:55.169089+00:00",
        "latest_people_update": "2021-10-08T18:33:58.581902+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ky/government",
        "name": "Kentucky",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ky",
        "url": "http://www.lrc.ky.gov/",
        "latest_bill_update": "2021-10-25T06:30:51.614396+00:00",
        "latest_people_update": "2021-10-08T18:34:56.889692+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:la/government",
        "name": "Louisiana",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:la",
        "url": "http://www.legis.la.gov/",
        "latest_bill_update": "2021-10-25T08:58:02.601874+00:00",
        "latest_people_update": "2021-10-08T18:36:05.668917+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:me/government",
        "name": "Maine",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:me",
        "url": "http://legislature.maine.gov",
        "latest_bill_update": "2021-10-25T09:29:54.416458+00:00",
        "latest_people_update": "2021-10-08T18:39:58.275309+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:md/government",
        "name": "Maryland",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:md",
        "url": "http://mgaleg.maryland.gov/",
        "latest_bill_update": "2021-10-25T07:39:00.884989+00:00",
        "latest_people_update": "2021-10-08T18:38:33.718601+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ma/government",
        "name": "Massachusetts",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ma",
        "url": "http://mass.gov",
        "latest_bill_update": "2021-10-25T02:32:24.844340+00:00",
        "latest_people_update": "2021-10-08T18:37:24.843311+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:mi/government",
        "name": "Michigan",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:mi",
        "url": "http://www.legislature.mi.gov",
        "latest_bill_update": "2021-10-25T07:00:27.940784+00:00",
        "latest_people_update": "2021-10-08T18:41:08.326279+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:mn/government",
        "name": "Minnesota",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:mn",
        "url": "http://state.mn.us/",
        "latest_bill_update": "2021-10-25T08:22:35.259360+00:00",
        "latest_people_update": "2021-10-08T18:42:32.066269+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ms/government",
        "name": "Mississippi",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ms",
        "url": "http://www.legislature.ms.gov/",
        "latest_bill_update": "2021-10-25T07:27:11.144403+00:00",
        "latest_people_update": "2021-10-08T18:45:20.201068+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:mo/government",
        "name": "Missouri",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:mo",
        "url": "http://www.moga.mo.gov/",
        "latest_bill_update": "2021-10-25T06:02:46.379666+00:00",
        "latest_people_update": "2021-10-08T18:44:09.313426+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:mt/government",
        "name": "Montana",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:mt",
        "url": "http://leg.mt.gov/",
        "latest_bill_update": "2021-10-25T01:58:48.026691+00:00",
        "latest_people_update": "2021-10-08T18:46:30.981640+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ne/government",
        "name": "Nebraska",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ne",
        "url": "http://nebraskalegislature.gov/",
        "latest_bill_update": "2021-10-25T06:03:16.479034+00:00",
        "latest_people_update": "2021-10-08T18:49:13.717349+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:nv/government",
        "name": "Nevada",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:nv",
        "url": "http://www.leg.state.nv.us/",
        "latest_bill_update": "2021-10-25T06:52:25.943132+00:00",
        "latest_people_update": "2021-10-08T18:55:02.514799+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:nh/government",
        "name": "New Hampshire",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:nh",
        "url": "http://gencourt.state.nh.us",
        "latest_bill_update": "2021-10-25T08:08:50.253572+00:00",
        "latest_people_update": "2021-10-08T18:52:56.153247+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:nj/government",
        "name": "New Jersey",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:nj",
        "url": "http://www.njleg.state.nj.us/",
        "latest_bill_update": "2021-10-25T06:48:05.841102+00:00",
        "latest_people_update": "2021-10-08T18:12:02.843820+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:nm/government",
        "name": "New Mexico",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:nm",
        "url": "https://www.nmlegis.gov",
        "latest_bill_update": "2021-10-25T08:04:00.882500+00:00",
        "latest_people_update": "2021-10-08T18:54:31.618602+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ny/government",
        "name": "New York",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ny",
        "url": "http://public.leginfo.state.ny.us/",
        "latest_bill_update": "2021-10-25T06:25:06.936010+00:00",
        "latest_people_update": "2021-10-08T18:56:26.216468+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:nc/government",
        "name": "North Carolina",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:nc",
        "url": "http://www.ncleg.net/",
        "latest_bill_update": "2021-10-25T08:45:33.351739+00:00",
        "latest_people_update": "2021-10-08T18:48:02.797804+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:nd/government",
        "name": "North Dakota",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:nd",
        "url": "http://www.legis.nd.gov/",
        "latest_bill_update": "2021-10-25T06:40:02.355041+00:00",
        "latest_people_update": "2021-10-08T18:48:52.580198+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:oh/government",
        "name": "Ohio",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:oh",
        "url": "http://www.legislature.state.oh.us/",
        "latest_bill_update": "2021-10-25T07:57:46.977525+00:00",
        "latest_people_update": "2021-10-08T18:57:20.689007+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ok/government",
        "name": "Oklahoma",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ok",
        "url": "http://www.oklegislature.gov/",
        "latest_bill_update": "2021-10-25T06:04:45.353553+00:00",
        "latest_people_update": "2021-10-08T18:58:13.858107+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:or/government",
        "name": "Oregon",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:or",
        "url": "https://olis.leg.state.or.us",
        "latest_bill_update": "2021-10-25T08:02:40.104047+00:00",
        "latest_people_update": "2021-10-08T18:58:46.263870+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:pa/government",
        "name": "Pennsylvania",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:pa",
        "url": "http://www.legis.state.pa.us/",
        "latest_bill_update": "2021-10-25T02:14:13.295173+00:00",
        "latest_people_update": "2021-10-08T19:00:29.933746+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/territory:pr/government",
        "name": "Puerto Rico",
        "classification": "state",
        "division_id": "ocd-division/country:us/territory:pr",
        "url": "http://www.oslpr.org/",
        "latest_bill_update": "2021-10-25T08:24:43.258449+00:00",
        "latest_people_update": "2021-10-08T19:01:05.357676+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ri/government",
        "name": "Rhode Island",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ri",
        "url": "http://www.ri.gov/",
        "latest_bill_update": "2021-10-25T06:44:02.994231+00:00",
        "latest_people_update": "2021-10-08T19:01:45.190077+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:sc/government",
        "name": "South Carolina",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:sc",
        "url": "http://www.scstatehouse.gov/",
        "latest_bill_update": "2021-10-25T08:37:14.467804+00:00",
        "latest_people_update": "2021-10-08T19:02:49.940218+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:sd/government",
        "name": "South Dakota",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:sd",
        "url": "http://www.sdlegislature.gov/",
        "latest_bill_update": "2021-10-25T07:51:24.946368+00:00",
        "latest_people_update": "2021-10-08T19:03:45.018160+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:tn/government",
        "name": "Tennessee",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:tn",
        "url": "http://www.capitol.tn.gov/",
        "latest_bill_update": "2021-10-25T07:39:23.872480+00:00",
        "latest_people_update": "2021-10-08T19:04:29.388551+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:tx/government",
        "name": "Texas",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:tx",
        "url": "https://capitol.texas.gov/",
        "latest_bill_update": "2021-10-25T08:23:14.965465+00:00",
        "latest_people_update": "2021-10-08T19:05:58.996418+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:ut/government",
        "name": "Utah",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:ut",
        "url": "http://le.utah.gov/",
        "latest_bill_update": "2021-10-25T06:02:25.418737+00:00",
        "latest_people_update": "2021-10-08T19:09:46.121356+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:vt/government",
        "name": "Vermont",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:vt",
        "url": "http://legislature.vermont.gov/",
        "latest_bill_update": "2021-10-25T08:37:52.077544+00:00",
        "latest_people_update": "2021-10-08T19:11:52.537234+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:va/government",
        "name": "Virginia",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:va",
        "url": "http://virginiageneralassembly.gov/",
        "latest_bill_update": "2021-10-25T09:02:07.405075+00:00",
        "latest_people_update": "2021-10-08T19:10:41.257070+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:wa/government",
        "name": "Washington",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:wa",
        "url": "http://www.leg.wa.gov",
        "latest_bill_update": "2021-10-25T08:08:53.645598+00:00",
        "latest_people_update": "2021-10-08T19:12:42.478134+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:wv/government",
        "name": "West Virginia",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:wv",
        "url": "http://www.legis.state.wv.us/",
        "latest_bill_update": "2021-10-25T06:07:26.051140+00:00",
        "latest_people_update": "2021-10-08T19:14:39.573370+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:wi/government",
        "name": "Wisconsin",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:wi",
        "url": "http://legis.wisconsin.gov/",
        "latest_bill_update": "2021-10-25T06:50:27.714006+00:00",
        "latest_people_update": "2021-10-08T19:13:32.346916+00:00"
      },
      {
        "id": "ocd-jurisdiction/country:us/state:wy/government",
        "name": "Wyoming",
        "classification": "state",
        "division_id": "ocd-division/country:us/state:wy",
        "url": "http://legisweb.state.wy.us/",
        "latest_bill_update": "2021-10-25T08:12:12.267335+00:00",
        "latest_people_update": "2021-10-08T19:15:20.388294+00:00"
      }
    ],
    "pagination": {
      "per_page": 52,
      "page": 1,
      "max_page": 1,
      "total_items": 52
    }
  }

let jurisdiction_id = {
    "id": "ocd-jurisdiction/country:us/state:nd/government",
    "name": "North Dakota",
    "classification": "state",
    "division_id": "ocd-division/country:us/state:nd",
    "url": "http://www.legis.nd.gov/",
    "latest_bill_update": "2021-10-25T06:40:02.355041+00:00",
    "latest_people_update": "2021-10-08T18:48:52.580198+00:00"
  }
/*
let people =   {
    "results": [
      {
        "id": "ocd-person/a8291a51-b9d9-44de-bc87-c5cccef6d95e",
        "name": "Aaron McWilliams",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "20",
          "division_id": "ocd-division/country:us/state:nd/sldl:20"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Aaron",
        "family_name": "McWilliams",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/amcwilliams.jpg?itok=gaIfoIZx",
        "email": "amcwilliams@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:53:17.111589+00:00",
        "updated_at": "2021-10-08T14:48:19.867663+00:00",
        "openstates_url": "https://openstates.org/person/aaron-mcwilliams-57JUgfGHkDZcNNqDiVoNKA/"
      },
      {
        "id": "ocd-person/9c0f35c1-03de-443e-97bd-5cdf77581897",
        "name": "Alisa Mitskog",
        "party": "Democratic",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "25",
          "division_id": "ocd-division/country:us/state:nd/sldl:25"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Alisa",
        "family_name": "Mitskog",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/amitskog.jpg?itok=f5Y8bmv_",
        "email": "amitskog@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:53:02.294869+00:00",
        "updated_at": "2021-10-08T14:48:12.635136+00:00",
        "openstates_url": "https://openstates.org/person/alisa-mitskog-4kTkkKaWhkLlchhJfyGwsx/"
      },
      {
        "id": "ocd-person/542b66f0-b940-40bb-b348-4537ec477c54",
        "name": "Alvin Jaeger",
        "party": "Republican",
        "current_role": {
          "title": "Secretary Of State",
          "org_classification": "executive",
          "district": "",
          "division_id": ""
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Alvin",
        "family_name": "Jaeger",
        "image": "",
        "email": "sos@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2020-10-27T22:32:02.588180+00:00",
        "updated_at": "2021-10-08T14:48:33.974760+00:00",
        "openstates_url": "https://openstates.org/person/alvin-jaeger-2YpBnSgwteZRWAEMhVoQIG/"
      },
      {
        "id": "ocd-person/6fbb2691-956f-4427-8927-66309b08ed68",
        "name": "Andrew Marschall",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "16",
          "division_id": "ocd-division/country:us/state:nd/sldl:16"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Andrew",
        "family_name": "Marschall",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/amarschall.jpg?itok=R0Srf1A1",
        "email": "amarschall@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:52:56.970470+00:00",
        "updated_at": "2021-10-08T14:48:16.213123+00:00",
        "openstates_url": "https://openstates.org/person/andrew-marschall-3Opfw1eL495VfDCIz9vsSW/"
      },
      {
        "id": "ocd-person/860892bd-92d1-4a30-a5e6-3b5f2359e9df",
        "name": "Austen Schauer",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "13",
          "division_id": "ocd-division/country:us/state:nd/sldl:13"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Austen",
        "family_name": "Schauer",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/aschauer.jpg?itok=alVrk7GN",
        "email": "aschauer@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2019-01-04T06:33:20.274516+00:00",
        "updated_at": "2021-10-08T14:48:21.519655+00:00",
        "openstates_url": "https://openstates.org/person/austen-schauer-44utAJwfLVL58nADPnbvrT/"
      },
      {
        "id": "ocd-person/9335be7e-11ff-4577-af89-e61195143354",
        "name": "Ben Koppelman",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "16",
          "division_id": "ocd-division/country:us/state:nd/sldl:16"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Ben",
        "family_name": "Koppelman",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/bkoppelman.jpg?itok=Vo9eUxbE",
        "email": "bkoppelman@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:53:09.008812+00:00",
        "updated_at": "2021-10-08T14:48:18.139840+00:00",
        "openstates_url": "https://openstates.org/person/ben-koppelman-4TmQrCNR7fxwb4LHWqvqgW/"
      },
      {
        "id": "ocd-person/3f885f7e-14b0-4ee7-b1fd-71ddbd72c539",
        "name": "Bernie Satrom",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "12",
          "division_id": "ocd-division/country:us/state:nd/sldl:12"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Bernie",
        "family_name": "Satrom",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/blsatrom.jpg?itok=mYaCmf1w",
        "email": "blsatrom@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:52:58.074686+00:00",
        "updated_at": "2021-10-08T14:48:19.020799+00:00",
        "openstates_url": "https://openstates.org/person/bernie-satrom-1vsq23CH5NEvAiuMvp8o4f/"
      },
      {
        "id": "ocd-person/7ba931d2-cba2-4913-92fa-f5b0c3a8baf0",
        "name": "Bert Anderson",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "2",
          "division_id": "ocd-division/country:us/state:nd/sldl:2"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Bert",
        "family_name": "Anderson",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/bertanderson.jpg?itok=lvbNifGi",
        "email": "bertanderson@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:52:56.493081+00:00",
        "updated_at": "2021-10-08T14:48:06.172742+00:00",
        "openstates_url": "https://openstates.org/person/bert-anderson-3lLNSU5M3RD6etZhoVcp1c/"
      },
      {
        "id": "ocd-person/4deb8a5c-cd4c-4f1b-9fce-5b886a389cd3",
        "name": "Bill Devlin",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "23",
          "division_id": "ocd-division/country:us/state:nd/sldl:23"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Bill",
        "family_name": "Devlin",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/bdevlin.jpg?itok=_8npxfnp",
        "email": "bdevlin@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2018-10-18T14:53:17.427110+00:00",
        "updated_at": "2021-10-08T14:48:21.319760+00:00",
        "openstates_url": "https://openstates.org/person/bill-devlin-2N23BsXAfQTJ0hJLoJLYgN/"
      },
      {
        "id": "ocd-person/50e4864c-095a-43a6-9486-3b071e02ca09",
        "name": "Bill Tveit",
        "party": "Republican",
        "current_role": {
          "title": "Representative",
          "org_classification": "lower",
          "district": "33",
          "division_id": "ocd-division/country:us/state:nd/sldl:33"
        },
        "jurisdiction": {
          "id": "ocd-jurisdiction/country:us/state:nd/government",
          "name": "North Dakota",
          "classification": "state"
        },
        "given_name": "Bill",
        "family_name": "Tveit",
        "image": "https://www.legis.nd.gov/files/styles/medium/public/person/photo/btveit.jpg?itok=CIYTYFFx",
        "email": "btveit@nd.gov",
        "gender": "",
        "birth_date": "",
        "death_date": "",
        "extras": {},
        "created_at": "2019-01-04T06:33:01.447195+00:00",
        "updated_at": "2021-10-08T14:48:32.232632+00:00",
        "openstates_url": "https://openstates.org/person/bill-tveit-2SdoyVN3EQw8B04bvak4Kn/"
      }
    ],
    "pagination": {
      "per_page": 10,
      "page": 1,
      "max_page": 15,
      "total_items": 143
    }
  }*/

  

 //HTML  46 filas fila por cada miembro, columna por cada propiedad
//---------------------variables-----------------------------
/* var selected_state = document.getElementById("state_list").value;
 */

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










//-----------------------table -------------------------------------------------------------------


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






function filterMemberState(array){


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
        console.log(array[i].party,'party');
        console.log(array[i].current_role.org_classification,'current_role');


        // adding text
        //   newCell0.textContent = (list_highest_tenth[i].first_name + " " + (list_highest_tenth[i].middle_name || "")  +" "+ list_highest_tenth[i].last_name) 
        newCell1.textContent =array[i].party ;
        newCell2.textContent= (array[i].current_role.org_classification  === 'lower'||'upper')?   array[i].current_role.title: array[i].current_role.org_classification;
        newCell3.textContent= array[i].jurisdiction.name
        /* newCell2.textContent= getChamberTitle(array[i].current_role.org_classification); */

        }
        document.getElementById('state').textContent =  people.results[0].jurisdiction.name 
     
}
filterMemberState(members_array);   

console.log( people.results.jurisdiction)










   
/* function setDropDown(states) {
  for (i = 1; i < states.length; i++) {
      string = states[i];
      locationState = string.indexOf("/state:") + 7;
      stateAcronym = string.substring(locationState, locationState + 2);
      dropDownMenu = document.getElementById("state-selection");

      dropDownElement = document.createElement("a");
      dropDownElement.className = "dropdown-item";
      dropDownElement.href = "?state=" + stateAcronym;
      dropDownElement.innerText = states[i];

      dropDownMenu.append(dropDownElement);
  }
} */



}).catch((error)=>{
  console.log("no funciona", error);
});
