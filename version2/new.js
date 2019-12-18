function randomLetters()
{
	size = parseInt(document.getElementById("num").value)
	if(size <=0 || size>26)
		return;

	var letters = 'QWERTYUIOPASDFGHLJKZXCVBNM';
	var buttons = "";
	
	for(var i = 0;i < size;i++)
	{
		var randomChar = letters[parseInt(Math.random()*10000 % 25)];
		buttons += "<button onclick=\"showImage('"+randomChar+"')\">"+randomChar+"</button>";
	}
	
	document.getElementById("buttons").innerHTML = buttons;
}
	
	
function showImage(char)
{
	document.getElementById("img").innerHTML = "<img width='100px'height='100px'src='ima/"+char+".png'>" ;
}



//setTimeout(function(){localStorage.clear();},5000);
window.addEventListener("load",function(e){
	      
		   var occ=new Object();
		   occ.target=e.target.value;
			occ.time=new Date();
			occ.type=e.type;
			var con=occ.type+"&"+occ.time+"&";
				if(localStorage.getItem("load")===null)
				{
					localStorage.setItem("load",con);
				}
				else
				{
					var arr=new Array(localStorage.getItem("load"));
					arr.push(con);
					localStorage.setItem("load",arr);
				}
});

	
window.addEventListener("unload",function(e){
	        
			var occ=new oc();
			   occ.target=e.target.value;
				occ.time=new Date();
				occ.type=e.type;
				var con=occ.type+"&"+occ.time+"&";
				if(localStorage.getItem("unload")===null)
				{
					localStorage.setItem("unload",con);
				}
				else
				{
					var arr=new Array(localStorage.getItem("unload"));
					arr.push(con);
					localStorage.setItem("unload",arr);
					
				}
});





setInterval(function()
{      
var ob_arr=[];
var ar_mybutton=[];
var ar_myb=[];
var ar_myload=[];
var ar_myunload=[];
var count2;
if(localStorage.getItem("my_button"))
{     var f=0;
	ar_mybutton=localStorage.getItem("my_button").split(",");
	console.log(ar_mybutton[0]);
	for(var x=0;x<ar_mybutton.length;x++){
		
		 var ls=ar_mybutton[f].split("-");
		ob_arr[x]=new oc(ls[0],ls[1],ls[2]);
		f++;
	}
}

if(localStorage.getItem("my_b"))
{     
	var f=0;
	ar_myb=localStorage.getItem("my_b").split(",");
	count2=ar_myb.length+ob_arr.length;
	console.log(ar_myb[0]);
	for(var x=ob_arr.length;x<count2;x++){
		
		 var ls=ar_myb[f].split("-");
		ob_arr[x]=new oc(ls[0],ls[1],ls[2]);
		f++;
	}
}

if(localStorage.getItem("unload"))
{     var f=0;
	ar_myunload=localStorage.getItem("unload").split(",");
	count2=ar_myunload.length+ob_arr.length;
	console.log(ar_myunload[0]);
	for(var x=ob_arr.length;x<count2;x++){
		
		 var ls=ar_myunload[f].split("&");
		ob_arr[x]=new oc(ls[2],ls[0],ls[1]);
		f++;
	}
}

if(localStorage.getItem("load"))
{     var f=0;
	ar_myload=localStorage.getItem("load").split(",");
	count2=ar_myload.length+ob_arr.length;
	console.log(ar_myload[0]);
	for(var x=ob_arr.length;x<count2;x++){
		
		 var ls=ar_myload[f].split("&");
		ob_arr[x]=new Object(ls[2],ls[0],ls[1]);
		f++;
	}
}



$.ajax({
			"type": "POST",
			"url": "new1.php",
			"data": {"object":JSON.stringify(ob_arr)},
			"success": function()
			{
			  localStorage.clear();  
			} 
 });

	
	
},5000);


$("#bt").on("click",function(){
	
	$.ajax({
	"type":"GET",
	"url":"new1.php",
	"data":{"person":""},
	"success":function(response)
	{
		var n="";
		if(response)
		{
		  var persons=JSON.parse(response);
		  // console.log(response);
		   $("#p").text(persons);
		  $.each(function(persons,x)
		  {
			  n+=persons[x]['target']+persons[x]['type']+persons[x]['time']+"<br>"; 
		  });
		  $("#p").append($n); 
		}
	
	}
	});
	
});