document.addEventListener('DOMContentLoaded', function() {
  var header1=document.getElementById("Name");
  console.log(header1)
    header1.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target);

    event.target.style.background="white";
    })
  

    var header2=document.getElementById("email");
    header2.addEventListener("click", function(event){
        event.target.style.background="white";
    } )


    var header3=document.getElementById("fact");
    header3.addEventListener("click", function(event){
        event.target.style.background="white";
    })

    var submit=document.getElementById("submit");
    submit.addEventListener("click", function(event){
        event.target.style.color="#A85A65";
    } )
})
