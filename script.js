var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send(); 
request.onload=function(){
    var data=JSON.parse(this.response);


console.log(data);
   // console.log(data[i].name+" "+data[i].capital);
   var result=data.filter((element)=>element.region==="Asia");
   console.log(result);
   var rdata=data.reduce((acc,ele)=>acc+ele.population);

}

