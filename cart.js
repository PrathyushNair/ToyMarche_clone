    
    function wishpage(){
      window.location.href="wish.html"
  }
  function cartpage(){
    console.log("in cart")
    window.location.href="cart.html"
}
    function gotohome(){
        window.location.href="home.html"
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

function valid(){ 
    event.preventDefault()

sweetAlert("Invalid Coupon code", "Use another Coupon Code"+"\n"+"    or Continue shoping", "error");
SweetAlert.fire(
  'The Internet?',
  'That thing is still around?',
  'question'
)

window.location.reload() ;
   
}



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
  var totaldis = document.querySelector(".priceshow").innerText = ` ${total}`;
  var totaldis2 = document.querySelector(".priceshow2").innerText = ` ${total}`;
  // var coun = document.querySelector(".displayMe").innerText= `${counqt}` ;
//   var legthdis =document.querySelector("h5").innerText = `  ${length};


      
//   js function------------------------------------------------------------------------------------------->
  count =1 ;
  counqt=1;

  console.log(counqt)
  cartData.map(function (elem, index) {
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
    

    var name = document.createElement("p");
        name.setAttribute("id","itemname")
    name.textContent = elem.name;


    var qtyn = document.createElement("td")
    var subdiv= document.createElement("div")
        subdiv.setAttribute("id","qtydiv")

        // minus- start here------->
        var btnmins  = document.createElement("button")
            btnmins.setAttribute("id","minscount")
            btnmins.innerText= "−"


        var displaycount = document.createElement("div")
            displaycount.setAttribute("class","displayMe")

            btnmins.addEventListener("click",function(){ 
           displaycount.innerText= 1+counqt--;
           
          
         })
            

            var btnplus  =document.createElement("button")
            btnplus.setAttribute("id","pluscount")
            btnplus.innerText= "+"
            btnplus.addEventListener("click",function(){

           displaycount.innerText= 1+counqt++;
         })

            // minus endshere-------------------------->

         
          

         var btnwish = document.createElement("button")
            btnwish.setAttribute("class","cartwish")
              btnwish.innerText="♡ add to wish list"
              btnwish.addEventListener("click",function (){
                    addToWishlist(elem)
                });

            var bottomline = document.createElement("div")
                bottomline.setAttribute("class","pink6")

                var rbtn = document.createElement("button");
            rbtn.innerText = "Remove";
            rbtn.setAttribute("id","Remove-1")

            rbtn.addEventListener("click", function () {
              removeItem(elem, index);
            });
            


            

    var price = document.createElement("td");
    price.innerText = elem.price;
    price.setAttribute("id","net") ;


    var grosstotal = document.createElement("td");
        grosstotal.setAttribute("id","gross") ;

        grosstotal.innerText= "₹"+ elem.price2;

        console.log(grosstotal,displaycount.innerText) 

       subdiv.append(btnmins,displaycount,btnplus)
       qtyn.append(subdiv,btnwish,bottomline,rbtn)
        items1.append(img,name)
    box.append(no,items1,qtyn, price, grosstotal);
    document.querySelector("#body").append(box);

    
  });

//   Remove function & data added for next page-------------------------------------------------------------->

  function removeItem(elem, index) {

    count-- ;
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
    
  }

  // wishlis add--------------------------------------------------------------------------------------------->

  function addToWishlist(ele){
            
            alert("Product added Sucessfully Into The Cart 💛")
           
            console.log(ele)
            NewArriv.push(ele)
            localStorage.setItem("wish",JSON.stringify(NewArriv))

            window.location.reload();
               
            

        }

//       function  placeorder(){
//         event.preventDefault()

// swal("Congratulations", "Order placed Sucessfully"+"\n"+"    happyshoping", "success");
// swal({
//   title: "Congratulations",
//   text: "Order placed Sucessfully"+"\n"+"\n"+"\n"+"    happyshoping",
//   icon: "success",
  
// });
          
//         }
        username=document.querySelector("#username")
        userarr=JSON.parse(localStorage.getItem("user"))
        username.innerText="Hi!"+" "+userarr[0].name
        function cartpage(){
          console.log("in cart")
          window.location.href="cart.html"
      }