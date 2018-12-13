// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFdAcIwFFUwXJuJGAK7Jw6vF0x-Ccvj6g",
    authDomain: "train-schedule-hw-47d62.firebaseapp.com",
    databaseURL: "https://train-schedule-hw-47d62.firebaseio.com",
    projectId: "train-schedule-hw-47d62",
    storageBucket: "train-schedule-hw-47d62.appspot.com",
    messagingSenderId: "639103143052"
  };
  firebase.initializeApp(config);


  database = firebase.database();
  var TrainName = "";
  var Destination = "";
  var Arrival = "";
  var Frequency = "";
 // var dateFormat = "YYYY-MM-DD";

 
 $("#submitbutton").on("click", function(event) {
    event.preventDefault();
    TrainName = $("#Train").val().trim();
    Destination = $("#Destination").val().trim();
    Arrival = $("#Arrival").val().trim();
    Frequency = $("#Frequency").val().trim();
    console.log("working");
    database.ref().push({
        Train: TrainName, 
        FinalDestination: Destination, 
        Arrive: Arrival,
        Often: Frequency,
       // dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    console.log("working");


  });


    
  database.ref().push({
    test:"hello",
    Train : TrainName, 
    working: "did it send?"



   });

  // database.ref().on("value", function(snapshot) {
   // console.log(snapshot.val());
  
  // });
  


  database.ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function(snapshot) {
    var dataTrain;
    var dataDestinaion;
    var dataArrival;
    var dataFrequency;
    
    var TrainName = $("<tr>");
    var nameCol = $("<td>");
    dataName = snapshot.val().name;
    nameCol.text(dataName);
    var roleCol = $("<td>");
    dataRole = snapshot.val().role;
    roleCol.text(dataRole);
    var startDateCol = $("<td>");
    dataDate = snapshot.val().hired;
    startDateCol.text(dataDate);
    var monthsCol = $("<td>");
   // var convertedDate = moment(dataDate, "YYYY-MM-DD");
   // months = moment().diff(convertedDate,"months");
   // monthsCol.text(months);
    var rateCol = $("<td>");
    dataRate = snapshot.val().rate;
    rateCol.text(dataRate);
    var totalCol = $("<td>");
   // total = months * dataRate;
   // totalCol.text(total);
   // employeeRow.append(nameCol);
    //employeeRow.append(roleCol);
   // employeeRow.append(startDateCol);
   // employeeRow.append(monthsCol);
   // employeeRow.append(rateCol);
   // employeeRow.append(totalCol);
    // $("#employee-info").append(employeeRow);
});









//