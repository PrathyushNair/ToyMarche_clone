function buy(){
    window.location.href="Buyback&sell.html"
}
function gotohome(){
    window.location.href="home.html"
}
function gotoshop(){
    window.location.href="shop.html"
}
function gotodonate(){
    window.location.href="donate.html"
}
function gotorecycle(){
    window.location.href="donate.html"
}
function gotopiggy(){
    console.log("hello")
    window.location.href="piggy bank.html"
}
function gotocontact(){
    console.log("yo")
    window.location.href="contactus.html"
}
function gotoshopping(){
    window.location.href="shoppingguide.html"
}
function gotoaboutus(){
    window.location.href=""
}
function gotoshop(){
    window.location.href="shop.html"
}
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
function gotoshop2(){
    select=document.querySelector("select").value
    if(select=="Shop"){
        window.location.href="shop.html"
    }
    else if(select=="Sell"){
        window.location.href="sell.html"
    }
}

username=document.querySelector("#username")
        userarr=JSON.parse(localStorage.getItem("user"))
        username.innerText="Hi!"+" "+userarr[0].name
        
        function wishpage(){
            window.location.href="wish.html"
        }
        function cartpage(){
            console.log("in cart")
            window.location.href="cart.html"
        }