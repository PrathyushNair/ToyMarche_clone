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
    window.location.href="piggy bank.html"
}
function gotocontact(){
    window.location.href="contactus.html"
}
function gotoshopping(){
    window.location.href="shoppingguide.html"
}
function gotoaboutus(){
    windows.location.href=""
}
paymentarr=JSON.parse(localStorage.getItem("paymentlist"))
paymentarr.map(function(el){
imagebox=document.querySelector(".prodimage")
proddetails=document.querySelector(".proddescription")
image=document.createElement("img")
image.src=el.imageUrl
image.style.height="100%"
image.style.width="100%"
title=document.querySelector("title")
title.innerText=el.name
nam=document.createElement("h2")
nam.innerText=el.name
br=document.createElement("h4")
br.innerText="Brand:"
br.style.marginTop="-1px"
brand=document.createElement("p")
brand.style.marginTop="-1px"
brand.innerText=el.brand
price=document.createElement("h2")
divi1=document.createElement("div")
divi1.style.display="flex"
divi1.style.JustifyContent="flex-start"
divi1.append(br,brand)
price.innerText=el.price
price.style.marginTop="-2px"
divi2=document.createElement("div")
divi2.style.display="flex"
divi2.style.gap="20px"
quantity=document.createElement("p")
quantity.innerText="Quantity"
input=document.createElement("input")
input.setAttribute("type","number")
divi3=document.createElement("div")
divi3.setAttribute("class","cartbuywish")
cart=document.createElement("button")
cart.setAttribute("class","cart")
cart.innerText="Add to Cart"
cart.addEventListener("click",function(){
    carto(el)
})

buy=document.createElement("button")
buy.innerText="Buy Now"
buy.setAttribute("class","buy")
buy.addEventListener("click",function(){
    buynow(el)
})
wish=document.createElement("button")
wish.innerText="🤍"
wish.setAttribute("class","wish")
wish.addEventListener("click",function(){
    wisho(el)
})

divi3.append(cart,buy,wish)
review=document.createElement("p")
review.innerText="Be the first to review this product"
share=document.createElement("p")
share.innerText="Share this.."
divi4=document.createElement("div")
// divi3.setAttribute("class","logos")
fb=document.createElement("img")
fb.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThy4oKGW6vgdFGiFf7tM5M1O4giKcl467BIrMGo0IgXEo3RmfWvQCH9xWUF-lo15HUg84&usqp=CAU"
fb.style.heigth="40px"
fb.style.width="40px"
fb.addEventListener("click",facebook)
function facebook(){
    window.location.href="https://www.facebook.com/login.php/"
}
twitter=document.createElement("img")
twitter.src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
twitter.style.heigth="40px"
twitter.style.width="40px"
twitter.addEventListener("click",twitt)
function twitt(){
    console.log("blah")
    window.location.href="https://twitter.com/home?lang=en"
}
gmail=document.createElement("img")
gmail.src="https://blogger.googleusercontent.com/img/a/AVvXsEgoCAgtmYnZ6HxulN_R8znoZPvuytwedAnDorLkhhZN4w2z5hi-gZFMSQVfCXS36k9JWC87gwC6NkR9YWR7DuJCHZuwgdLMYFC5KUsehwQSH0cetSIRott0N9-6oGuxt289U-CYOiXDG7RFg532EnarzSOZGhmNk902-tG8WVGPqhGjXgx9VvKKvV-k=w1200-h630-p-k-no-nu"
gmail.style.heigth="40px"
gmail.style.width="40px"
gmail.addEventListener("click",gml)
function gml(){
    window.location.href="https://mail.google.com/mail/u/0/"
}
pininterest=document.createElement("img")
pininterest.src="https://idigitalcitizen.files.wordpress.com/2015/09/pinterest-logo-small.jpg"
pininterest.style.heigth="30px"
pininterest.style.width="30px"
pininterest.addEventListener("click",pin)
buyback=document.querySelector("#buyback")
buyback.innerText="Buyback feature is not available on this product"
category=document.querySelector("#category")
category.innerText=el.category
agegroup=document.querySelector("#agegroup")
agegroup.innerText=el.age
brandtable=document.querySelector("#brand")
brandtable.innerText=el.brand
function pin(){
    window.location.href="https://www.pinterest.ca/login/"
}
divi4.append(fb,twitter,gmail,pininterest)
if(el.strikedPrice!==""){
    btn=document.createElement("button")
    string=el.strikedPrice.slice(1)
    off=Math.floor((Number(string)-el.price2)/Number(string)*100)
    btn.innerText=off+"%OFF"
    btn.setAttribute=("class","offer")
    btn.style.color="white"
    btn.style.backgroundColor="gold"
    btn.style.border="none"
    str=document.createElement("s")
    str.innerText=el.strikedPrice
    divi2.append(str,btn)
    proddetails.append(nam,divi1,price,divi2,quantity,input,divi3,review,share,divi4)
}
else{
    btn=document.createElement("button")
    divi1.style.marginTop="10px"
    price.style.marginTop="10px"
    divi2.style.marginTop="10px"
    quantity.style.marginTop="10px"
    input.style.marginTop="20px"
    divi3.style.marginTop="40px"
    review.style.marginTop="40px"
    share.style.marginTop="40px"
    divi4.style.marginTop="40px"
    proddetails.append(nam,divi1,price,divi2,quantity,input,divi3,review,share,divi4)
}
imagebox.append(image)
})
function reviewcollection(){
    console.log("inreview")
    enteredreview=document.querySelector("#reviewinput").value
    console.log(enteredreview)
    if(enteredreview==""){alert("No review entered")}
    else{
        text=JSON.parse(localStorage.getItem("review"))||[]
        text.push(enteredreview)
        localStorage.setItem("review",JSON.stringify(text))
        enteredreview=""
        alert("Review received")
        window.location.reload()
    }
    
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
function cartpage(){
console.log("in cart")
window.location.href="cart.html"
}
function carto(el){
console.log("hello")
var cartData = JSON.parse(localStorage.getItem("cart"))||[];
cartData.push(el)
localStorage.setItem("cart",JSON.stringify(cartData))
alert("Item added to cart")
window.location.reload()  
}
function buynow(el){
console.log("hello")
var cartData = JSON.parse(localStorage.getItem("cart"))||[];
cartData.push(el)
localStorage.setItem("cart",JSON.stringify(cartData))
alert("Item added to cart")
window.location.reload()
window.location.href="cart.html"  
} 
function wisho(el){
console.log("hello")
var NewArriv = JSON.parse(localStorage.getItem("wish")) || []; 
NewArriv.push(el)
localStorage.setItem("wish",JSON.stringify(NewArriv))
alert("Product added Sucessfully Into The Cart 💛")
window.location.reload()  
}
username=document.querySelector("#username")
    userarr=JSON.parse(localStorage.getItem("user"))
    username.innerText="Hi!"+" "+userarr[0].name  

    function wishpage(){
        window.location.href="wish.html"
    }