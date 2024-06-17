var jcontent = {
    "firstName": "John",
    "lastName": "Smith"
  }
  
  var output = document.getElementById('output');
  output.innerHTML = 'COUNTY  STATUS  DEM  REP  CON  WOR  OTH  BLANK  TOTAL'
  
  var active = document.getElementById('active');
  active.innerHTML = 'Albany  Active  98146  34869  3436  892  8393  48655  194391'
  
  var inactive = document.getElementById('inactive');
  inactive.innerHTML = 'Albany  Inactive  8816  3007  267  94  1025  4809  18018'
  
  var total = document.getElementById('total');
  total.innerHTML = 'Albany  Total  106962  37876  3703  986  9418  53464  212409'
  
  
  /*
   [{"COUNTY": "Albany ", "STATUS": "Active", "DEM": 98146, "REP": 34869, "CON": 3436, "WOR": 892, "OTH": 8393, "BLANK": 48655, "TOTAL": 194391}, {"COUNTY": "Albany ", "STATUS": "Inactive", "DEM": 8816, "REP": 3007, "CON": 267, "WOR": 94, "OTH": 1025, "BLANK": 4809, "TOTAL": 18018}, {"COUNTY": "Albany ", "STATUS": "Total", "DEM": 106962, "REP": 37876, "CON": 3703, "WOR": 986, "OTH": 9418, "BLANK": 53464, "TOTAL": 212409}]
  */
 