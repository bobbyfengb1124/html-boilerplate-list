$("#btn").click(function () {
    jQuery.getJSON("https://random.cat/meow")
    .done(addP)
    .fail(function() {
       alert("PROBLEM!"); 
    });
});

function addP(data) {
    console.log(data.file);
    $("#cat").attr("src", data.file);
    $("#cat").attr("style",  "width: 200 px");
}
