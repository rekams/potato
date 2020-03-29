document.addEventListener('DOMContentLoaded', function() {
  var header1=document.getElementById("Name");
  console.log(header1)
    header1.addEventListener("mouseover", function(event){
    console.log(event);
    console.log(event.target);

    event.target.style.color="#A85A65";
    })
  

    var header2=document.getElementById("email");
    header2.addEventListener("mouseover", function(event){
        event.target.style.color="#A85A65";
    } )


    var header3=document.getElementById("fact");
    header3.addEventListener("mouseover", function(event){
        event.target.style.color="#A85A65";
    })

    var submit=document.getElementById("submit");
    submit.addEventListener("click", function(event){
        event.target.style.color="#A85A65";
    } )
})