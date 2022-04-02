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
//   var totaldis = document.querySelector(".priceshow").innerText = ` ${total}`;
//   var totaldis2 = document.querySelector(".priceshow2").innerText = ` ${total}`;
function cartpage(){
    console.log("in cart")
    window.location.href="cart.html"
}
function wishpage(){
    window.location.href="wish.html"
}


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
  // function gotodonate(){
  //     window.location.href="donate.html"
  // }
  // function gotorecycle(){
  //     window.location.href="recycle.html"
  // }
  // function gotopiggy(){
  //     window.location.href="piggy bank.html"
  // }
  // function gotocontact(){
  //     window.location.href="contactus.html"
  // }
  // function gotoshopping(){
  //     window.location.href="shoppingguide.html"
  // }
  // function gotoaboutus(){
  //     windows.location.href="aboutus.html"
  // }




  
  var NewArriv = JSON.parse(localStorage.getItem("wish")) || [];  //wish
  
  var DealsOfWeeks =[
      {    id:1,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/621d082c98c5cb4243d78072/webp/z01027-480x480.jpeg",
          name:"Zyper Machinex Robo",
          price:"₹399",
          strickoff:"₹499",
          price2:399,

      },
      {   id:2,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/620415884b9f9b18a2ce977d/webp/mechanix-racing-cars_1-480x480.jpg",
          name:"Machinex Racing Car",
          price:"₹299",
          strickoff:"₹699",
          price2:299,

      },
      {   id:3,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62040ab420ac68ee3f3b0fe9/webp/mechanix-blix-amusement-park-series_1-480x480.jpg",
          name:"Bliks Amusment Park",
          price:"₹499",
          strickoff:"₹799",
          price2:499,

      },
      {   id:4,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6204170f6293bd18345b0ee8/webp/mechanix-safari_1-480x480.jpg",
          name:"Machinex Safari Car",
          price:"₹599",
          strickoff:"₹899",
          price2:599,

      }];
 
      DealsOfWeeks.map(function(ele){
          var box =document.createElement("div");
          box.setAttribute("class","box-dow","trans")

          var img = document.createElement("img")
              img.src=ele.imageUrl;
              img.addEventListener("click",function(){
                   switchs()
              })
               
              
          var name = document.createElement("h3")
              name.innerText= ele.name ;
              name.setAttribute("class","dow-name")
          
          var pricedow =document.createElement("div");
             pricedow.setAttribute("class","price-dow")

          var price = document.createElement("h4")
              price.innerText=ele.price

          var strickedoff = document.createElement("h5")
              strickedoff.innerText=ele.strickoff;
              strickedoff.setAttribute("class","Tcut")

          var btndiv =document.createElement("div")
              btndiv.setAttribute("id","btndow")


          var btn = document.createElement("button")
              btn.innerText="🛒"
              btn.setAttribute("class","btn-cw","trans")
              btn.addEventListener("click",function (){
                  addTocart(ele)
              });
          
          var btn2 = document.createElement("button")
          btn2.setAttribute("class","btn-cw","trans")
            btn2.innerText="🖤"
            btn2.addEventListener("click",function (){
                  addToWishlist(ele)
              });
           
            
            btndiv.append(btn,btn2)
            pricedow.append(price,strickedoff)
           box.append(img,name,pricedow,btndiv)
          document.querySelector("#container-Dow").append(box)
      })


      

      function switchs(){
          window.location.href=""
      }


      // new arivals

      var NewArrivals =[
      {    id:1,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61eaf8d54f9734fc82eb097b/webp/nerf-nanofire-blaster-480x480.jpg",
          name:"Htberx Point Gun",
          price:"₹399",
          strickoff:"₹499",
          price2:399,
          cart: "<i class= fa-solid fa-cart-arrow-down fa-3x></i>",

      },
      {   id:4,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6204170f6293bd18345b0ee8/webp/mechanix-safari_1-480x480.jpg",
          name:"Machinex Safari Car",
          price:"₹599",
          strickoff:"₹899",
          price2:599,

      },

      {   id:2,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61b6332cf254bb0872b90382/webp/2-480x480.png",
          name:"Disney Princess Belle",
          price:"₹299",
          strickoff:"₹699",
          price2:229,

      },
      {   id:3,
          imageUrl:"https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62040ab420ac68ee3f3b0fe9/webp/mechanix-blix-amusement-park-series_1-480x480.jpg",
          name:"Bliks Amusment Park",
          price:"₹499",
          strickoff:"₹799",
          price2:499,
          off:"10%",

      },];
 
      NewArrivals.map(function(ele){
          var box =document.createElement("div");
          box.setAttribute("class","box-dow","trans")

          
               
          var img = document.createElement("img")
               img.setAttribute("id","imagediv")
              img.src=ele.imageUrl;
              img.addEventListener("click",function(){
                   switchs()
              })
      
              
          var name = document.createElement("h3")
              name.innerText= ele.name ;
              name.setAttribute("class","dow-name")
          
          var pricedow =document.createElement("div");
             pricedow.setAttribute("class","price-dow")
          var price = document.createElement("h4")
              price.setAttribute("id","bigprice")
              price.innerText=ele.price

          var strickedoff = document.createElement("h5")
              strickedoff.innerText=ele.strickoff;
              strickedoff.setAttribute("class","Tcut")

          var btndiv =document.createElement("div")
              btndiv.setAttribute("id","btndow")


          var btn = document.createElement("button")
              btn.innerText="🛒"
              btn.setAttribute("class","btn-cw","trans")
              btn.addEventListener("click",function(){
                  addTocart(ele)
              });
          
          var btn2 = document.createElement("button")
          btn2.setAttribute("class","btn-cw","trans")
            btn2.innerText="💛"
            btn2.addEventListener("click",function(){
                  addToWishlist(ele)
              });
            
            btndiv.append(btn,btn2)
            pricedow.append(price,strickedoff)
           box.append(img,name,pricedow,btndiv)
          document.querySelector("#container-New").append(box)
      })


      function addTocart(ele){
          var dealsweek = JSON.parse(localStorage.getItem("cart")) || []; //cart
          console.log(ele)
          dealsweek.push(ele)
          localStorage.setItem("cart",JSON.stringify(dealsweek))
          window.location.reload()

      }

      function addToWishlist(ele){
          console.log(ele)
          NewArriv.push(ele)
          localStorage.setItem("wish",JSON.stringify(NewArriv))
          window.location.reload()
      }

      function switchs(){
          window.location.href=""
      }