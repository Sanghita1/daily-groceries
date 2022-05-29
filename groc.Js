var formm = document.getElementById("formm");
var dataset = document.getElementById("dataset");
var arrdata = [];
var arr = [];
time();
formm.addEventListener("submit", function (e) {
    var data1 = e.target[0].value;
    var data2 = e.target[1].value;
   var data3 = arrdata.length+1;
   
    var data =
    {
        item: data1,
        quantity: data2,
        serial: data3
    }
    arrdata.push(data);
    localStorage.setItem("formdata", JSON.stringify(arrdata));
})


if (localStorage.getItem("formdata")) {
   
    arrdata = JSON.parse(localStorage.getItem("formdata"));
    console.log(arrdata);
    for (let e = 0; e < arrdata.length; e++) {
        console.log(e);
        var div1 = document.createElement("div");
        div1.id = "div1";
        var rembutton = document.createElement("button");
       
        // rembutton.setAttribute("id",toString(arrdata[e].serial));
       rembutton.id = e.toString(10);
    // rembutton.value="yyy";
        var itemdiv = document.createElement("div");
        var qdiv = document.createElement("div");
        itemdiv.innerHTML = arrdata[e].item;
        qdiv.innerHTML = arrdata[e].quantity;
        rembutton.innerHTML = "-";
        div1.appendChild(itemdiv);
        div1.appendChild(qdiv);
        div1.appendChild(rembutton);
        dataset.appendChild(div1);
        
            //  elem.preventDefault();


        
    }
}
var clearbutton = document.getElementById("clean");
clearbutton.addEventListener("click", function (e) {
    localStorage.removeItem("formdata");
    document.location.reload();

})

/* remid.addEventListener("click",function(elem)
 {
    //  elem.preventDefault();
    var i = elem.target.parentNode;
    console.log(i.innerHTML);
    dataset.removeChild(i);
    
 })*/
var buttons = document.querySelectorAll("button");
buttons.forEach(function(i)
{
    i.addEventListener("click",function(elem)
    {
        var bbb = elem.target.innerHTML;
        console.log(elem.target);
        console.log(bbb);
        if(bbb=="-")
        {
            var aaa = elem.target.id;
            console.log(aaa);
            var ccc = parseInt(aaa);
            console.log(ccc);
            var kkk = arrdata.splice(ccc,1);

            localStorage.removeItem("formdata");
            localStorage.setItem("formdata", JSON.stringify(arrdata));
            document.location.reload();
        }
    })
})
var date = new Date();

var datee = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
subhead.innerHTML ="Date:"+ datee+"/"+month+"/"+year;

function time()
{
    var date = new Date();

var datee = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
subhead.innerHTML ="Date: "+ datee+"/"+month+"/"+year;
    var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
console.log(hr);
console.log(min);
console.log(sec);
if((hr==0) && (min==0) && (sec==0))
{
    localStorage.removeItem("formdata");
    document.location.reload(); 
}
 var t = setTimeout(function(){time()},1000);
}

