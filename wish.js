    
    function gotohome(){
        window.location.href="index.html"
    }
    function gotoshop(){
        window.location.href="shop.html"
    }
    function gotoshop2(){
            select=document.querySelector("select").value
            if(select=="Shop"){
                window.location.href="shop.html"
            }
            else if(select=="Sell"){
                window.location.href="sell.html"
            }
        }

// coupon

// invalid coupon ---------------------------------------------------------------------------------->





// table

//   Data fetching---------------------------------------------------------------------------------->

  var cartData = JSON.parse(localStorage.getItem("cart"))||[];
  console.log(cartData);

  // wish 
  var NewArriv = JSON.parse(localStorage.getItem("wish")) || [];  //wish
  console.log(NewArriv) ;


//   Calculation---------------------------------------------------------------------------------->

  var total = cartData.reduce(function (sum, elem, index, arr) {
    return sum + Number(elem.price2);
  }, 0);

  var length = cartData.length; 
  console.log(length);

  var length2 =NewArriv.length

  console.log(total);
 
//  Display Calculation---------------------------------------------------------------------------------->
  var cartcoutup= document.querySelector(".cartcoutup").innerText = ` ${length}`
  var cartcoutup= document.querySelector(".wishcoup").innerText = ` ${length2}`

  // var coun = document.querySelector(".displayMe").innerText= `${counqt}` ;
//   var legthdis =document.querySelector("h5").innerText = `  ${length};


      
//   js function------------------------------------------------------------------------------------------->
  count =1 ;
  counqt=1;

  console.log(counqt)
  NewArriv.map(function (elem, index) {
      console.log(elem.imageUrl)
    var box = document.createElement("tr");
   
    
    var no = document.createElement("td");
    
        no.innerText= count++ ;

        var items1 = document.createElement("div")
            items1.setAttribute("id","conitem")

    var img = document.createElement("img");
     
  
    img.setAttribute("id","Fimg")
    img.src = elem.imageUrl;
    img.style.marginRight="10%"
    
   console.log(elem.imageUrl)
    var name = document.createElement("p");
        name.setAttribute("id","itemname")
    name.textContent = elem.name;


    var qtyn = document.createElement("td")
    var subdiv= document.createElement("div")
        subdiv.setAttribute("id","qtydiv")

        // minus- start here------->
        

         
          

         var btnwish = document.createElement("button")
            btnwish.setAttribute("class","cartwish")
              btnwish.innerText="🛒"
              btnwish.addEventListener("click",function (){
                addTocart(elem)
                });

            var bottomline = document.createElement("div")
                bottomline.setAttribute("class","pink6")

                var rbtn = document.createElement("button");
            rbtn.innerText = "🗑️";
            rbtn.setAttribute("id","Remove-1")

            rbtn.addEventListener("click", function () {
              removeItem(elem, index);
            });
            


            

    var price = document.createElement("td");
    price.innerText = elem.price;
    price.setAttribute("id","net") ;


    

        

    //    subdiv.append(btnmins,displaycount,btnplus)
       qtyn.append(btnwish,bottomline,rbtn)
        items1.append(img,name)
    box.append(no,items1, price,qtyn);
    document.querySelector("#body").append(box);

    
  });

//   Remove function & data added for next page-------------------------------------------------------------->

  function removeItem(elem, index) {

    count-- ;
    console.log(elem, index);
    NewArriv.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("wish", JSON.stringify(NewArriv));
    window.location.reload();
    
  }

  // wishlis add--------------------------------------------------------------------------------------------->

  function addTocart(ele){
            var dealsweek = JSON.parse(localStorage.getItem("cart")) || []; //cart
            console.log(ele)
            dealsweek.push(ele)
            localStorage.setItem("cart",JSON.stringify(dealsweek))
            window.location.reload()

        }

      function  placeorder(){
        event.preventDefault()

swal("Congratulations", "Order placed Sucessfully"+"\n"+"    happyshoping", "success");
swal({
  title: "Congratulations",
  text: "Order placed Sucessfully"+"\n"+"\n"+"\n"+"    happyshoping",
  icon: "success",
  
});
          
        }


        username=document.querySelector("#username")
        userarr=JSON.parse(localStorage.getItem("user"))
        username.innerText="Hi!"+" "+userarr[0].name
function cartpage(){
    console.log("in cart")
    window.location.href="cart.html"
}
function wishpage(){
    window.location.href="wish.html"
}