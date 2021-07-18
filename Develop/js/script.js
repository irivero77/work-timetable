// modal was triggered
// $("#task-form-modal").on("show.bs.modal", function() {
//     // clear values
//     $("#modalTaskDescription, #modalDueDate").val("");
//   });
  
//   // modal is fully visible
//   $("#task-form-modal").on("shown.bs.modal", function() {
//     // highlight textarea
//     $("#modalTaskDescription").trigger("focus");
//   });
//   // jquery version
// $( "button.continue" ).html( "Next Step..." );
window.onload = function()
{
  //var title = document.getElementById("myid");
  var timenow = document.getElementById("real time");
  
  //var timestamp = 1382086394000;
  
  //var time = moment(timestamp).format("DD-MM-YYYY h:mm:ss");
  
  //title.textContent = "Format example: " + time;
  
  window.setInterval(function() {
    timenow.textContent = "" + moment().format("MMM Do YY");
  }, 1000);
  
}

