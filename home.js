document.querySelector("#btn").addEventListener("click", orderFn);

let image = document.getElementById("place_order");
let h3_line = document.getElementById("order_id");

function checkContent(){

    return true;
}

function orderFn(){

   let content_promise = new Promise(function(resolve,reject){

    let content = checkContent();

  setTimeout(function (){

    if(content){
        resolve("Content is Loaded...")
       }else{
        reject("Failed to Load...")
       }
  },3000);

   })

   content_promise.then(function (value){
    image.src = "https://s7d1.scene7.com/is/image/mcdonalds/nav_combo_meal_160x160_:category-panel-left-desktop"
    h3_line.innerText = "17009DE009"
   });

   content_promise.catch(function(err){
      console.log(err);
   })
}

