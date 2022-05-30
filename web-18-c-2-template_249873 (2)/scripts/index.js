// Add the coffee to local storage with key "coffee"




let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

let coffee=JSON.parse(localStorage.getItem("coffee")) ||[]
let data=fetch(url)


.then(function(data){
    return data.json()
})

.then(function(data){
   // console.log(data)
     displayData(data.menu.data)

})
.catch(function(data){
    //console.log(data);
})


var menu=document.getElementById("menu")

function  displayData(data){
   // console.log(data)

    data.forEach(function(el){

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
        button.innerText="add to bucket"
        button.setAttribute("id","add to bucket")
        button.addEventListener("click",function(){
            dataTransfer(el)
           // console.log( dataTransfer(el))
        })
        



        box.append( image,title, price,button)
        menu.append(box)


        })

}

function dataTransfer(elem){
    
    coffee.push(elem)
    localStorage.setItem("coffee",JSON.stringify(coffee))
}

console.log(coffee)


