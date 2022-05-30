// On clicking remove button the item should be removed from DOM as well as localstorage.


let coffee=JSON.parse(localStorage.getItem("coffee")) 


//var bucket=document.getElementById("bucket")

bucket.innerHTML=null;

function  displayData(coffee){

    //var bucket=document.getElementById("bucket")
   console.log(coffee)
   bucket.innerHTML=null;

   coffee.forEach(function(el){
    var bucket=document.getElementById("bucket")
       // console.log(el)

        let box=document.createElement("div")

         let image=document.createElement("img")
         image.src=el.image

         let title=document.createElement("h3")
         title.innerText=el.title

         let price=document.createElement("h3")
         price.innerText=el.price

        //  let title=document.createElement("h3")
        //  title.innerText=el.title

        let button=document.createElement("button")
        button.innerText="remove_coffee"
        button.setAttribute("id","remove_coffee")
        button.addEventListener("click",function(){
            removecoffee(el.id)
           // console.log( dataTransfer(el))
        })
        



        box.append( image,title, price,button)
        bucket.append(box)


        })

}

displayData(coffee)

function  removecoffee(id){

    coffee=coffee.filter(function(element){
        return element.id !=id
    })
    displayData(coffee)

    localStorage.setItem("coffee",JSON.stringify(coffee))
    
}

// function locationChange(){
//     window.location.href="index.html"
// }


