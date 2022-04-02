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

function readmore(){
box=document.querySelector("#main2a")
divi=document.createElement("div")
divi.innerText="Toy Marche brings to you all your favourite brands under one roof. Shop for preschool toys, learn with fun activities, educational toys, collectibles, Pretend play toys, soft toys, active play toys, dolls, action figures, best outdoor playsets."
readless=document.querySelector("#readless")
readless.style.display="block"
divi.append(readless)
document.querySelector("#readmore").style.display="none"
divi.style.textAlign="center"
box.append(divi)
}
function og(){
box=document.querySelector("#main2a")
divi.remove()
document.querySelector("#readmore").style.display="block"
}

var shoparr=[
{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61f4f7c183200735f716f973/webp/riddler-and-two-face_1-640x640.jpg",
    name : "Fisher Price Imaginext DC Super Friends Figures Riddler and Two Face",
    age : "3-8 years",
    brand : "FISHER-PRICE",
    price : "₹629",
    price2:629,
    strikedPrice : "₹649",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5ff2c86ed95aaf2f163daaab/webp/48461-2-640x640.jpg",
    name : "BABY ACTIVITY CHAIN",
    age : "2-5 years",
    brand : "FISHER-PRICE",
    price : "₹237",
    price2:273,
    strikedPrice : "₹289",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61dd85e42a2381212585a777/webp/on-the-go-submarine_1-640x640.jpg",
    name : "Fisher Price On The Go Musical Submarine",
    age : "0-2 years",
    brand : "FISHER-PRICE",
    price : "₹899",
    price2:899,
    strikedPrice : "",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fa8f3b1570be15e254e7fed/webp/fyk57_3-640x640.jpg",
    name : "LAUGH & LEARN COUNTING ANIMAL FRIENDS BOOK",
    age : "0-3 years",
    brand : "FISHER-PRICE",
    price : "₹1,999",
    price2:1999,
    strikedPrice : "",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fca80647ea91f7d07a07e97/webp/dfr17_4-640x640.jpeg",
    name : "FISHER PRICE TRUMPET RATTLE",
    age : "0-2 years",
    brand : "FISHER-PRICE",
    price : "₹284",
    price2:284,
    strikedPrice : "₹299",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5ff81fbbe387e939fccdc0d5/webp/waffle-blocks-vehicle-fire-truck-2-640x640.jpg",
    name : "LITTLE TIKES - WAFFLE BLOCKS FIRE TRUCK",
    age : "2-5 years",
    brand : "LITTLE TIKES",
    price : "₹2,999",
    price2:2999,
    strikedPrice : "₹3499 ",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60e9e207c4a0ef4671a41b81/webp/little-tikes-swing-seat-640x640.jpg",
    name : "LITTLE TIKES - SWING SEAT",
    age : "2-5 years",
    brand : "LITTLE TIKES",
    price : "₹2,499",
    price2:2499,
    strikedPrice : "",
    category:"Games"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60e9e3f13e0e93e1d6c372c9/webp/little-tikes-hide-and-seek-climber-640x640.jpg",
    name : "LITTLE TIKES - HIDE AND SEEK CLIMBER",
    age : "2-5 years",
    brand : "LITTLE TIKES",
    price : "₹17,999",
    price2:17999,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5ff8125ce387e939fccbc353/webp/product_6_4_643750-644023-waffle-blocks-figure-pack-tiger-fw-05-640x640.jpg",
    name : "LITTLE TIKES - WAFFLE BLOCKS FIGURE PACK ASSORTMENT",
    age : "2-5 years",
    brand : "LITTLE TIKES",
    price : "₹439",
    price2:439,
    strikedPrice : "₹499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60e9ddc656080646075b79d6/webp/little-tikes-police-patrol-car-640x640.jpg",
    name : "Little Tikes Cozy Coupe Patrol",
    age : "2-5 years",
    brand : "LITTLE TIKES",
    price : "₹11,999",
    price2:11999,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61aa5adccf8a7616ec7800ae/webp/peppa-shopping-640x640.jpg",
    name : "PEPPA PIG'S SHOPPING TRIP",
    age : "2-5 years",
    brand : "PEPPA PIG",
    price : "₹1,999",
    price2:1999,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/618589c21c127b791eecbefb/webp/peppa-house-640x640.jpg",
    name : "Peppa Pig Playhouse 16 Pieces",
    age : "2-5 years",
    brand : "PEPPA PIG",
    price : "₹2,719",
    price2:2719,
    strikedPrice : "₹2719",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6133b417fd546658c43bb82f/webp/peppa-pig-under-the-sea-640x640.jpg",
    name : "PEPPA PIG UNDER THE SEA PARTY",
    age : "2-5 years",
    brand : "PEPPA PIG",
    price : "₹2,399",
    price2:2399,
    strikedPrice : "₹2499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60067a2f0105727d2503448e/webp/21035-6-12-piece-set-3--640x640.jpg",
    name : "Peppa Pig Softee Dough 2 Pack",
    age : "2-5 years",
    brand : "PEPPA PIG",
    price : "₹1,169",
    price2:11699,
    strikedPrice : "₹1299",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/617bccc0875509374c962abb/webp/ford-cargo-and-logger-bed-640x640.jpg",
    name : "MATCHBOX - CONVOYS - FORD CARGO & LOGGER BED",
    age : "2-5 years",
    brand : "MATCHBOX",
    price : " ₹799",
    price2:799,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/617aa915b93c984272f4ab4d/webp/2006-ford-crown-victoria-police-640x640.jpg",
    name : "MATCHBOX - SUPERFAST - 2006 FORD CROWN VICTORIA POLICE",
    age : "2-5 years",
    brand : "MATCHBOX",
    price : "₹499",
    price2:499,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/613f38a40af567136fda10bb/webp/fwd28_2019-ford-ranger-640x640.jpg",
    name : "MATCHBOX - MOVING PARTS - 2019 FORD RANGER",
    age : "2-5 years",
    brand : "MATCHBOX",
    price : "₹299",
    price2:299,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/610bed680d5c986101d780a7/webp/n3242_fire-truck-640x640.jpg",
    name : "MATCHBOX - WORKING RIGS - FIRE TRUCK",
    age : "2-5 years",
    brand : "MATCHBOX",
    price : "₹499",
    price2:499,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60d8c92d75157c48c071cc72/webp/30782_ford-640x640.jpg",
    name : "MATCHBOX BASIC CAR ASSORTMENT - MBX HIGHWAY - FORD PICKUP",
    age : "2-5 years",
    brand : "MATCHBOX",
    price : "₹149",
    price2:149,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60781e0bb4a92e79b5f1f26b/webp/7043800-640x640.jpg",
    name : "MARLEY THE MUSICAL ACCORDIAN",
    age : "0-2 years",
    brand : "TOMY",
    price : "₹1,399",
    price2:1399,
    strikedPrice : "₹1499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6078167cb4a92e79b5ebf10d/webp/7034900-640x640.jpg",
    name : "MR. PROFESSOR OWL PUZZLE",
    age : "0-2 years",
    brand : "TOMY",
    price : "₹1,149",
    price2:1149,
    strikedPrice : "₹1249",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6075679c95991311f27b7f58/webp/7029400-640x640.jpg",
    name : "TOMY READY STEADY MUSICAL GIRAFFE",
    age : "0-2 years",
    brand : "TOMY",
    price : "₹1,199",
    price2:1199,
    strikedPrice : "₹1249",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5f986bf88fa0ae1ff6397857/webp/71j3icvnu6l-_sl1000_-640x640.jpg",
    name : "CHOO CHOO LOOP",
    age : "0-2 years",
    brand : "TOMY",
    price : "₹1,449",
    price2:1449,
    strikedPrice : "₹1499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fe2fd166e9b355b5d5230a7/webp/7219700-640x640.jpg",
    name : "LEAPFROG SWEET TREATS LEARNING CAFE",
    age : "2-5 years",
    brand : "LEAP FROG",
    price : "₹3,449",
    price2:3449,
    strikedPrice : "₹3749",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fe2fb2423a1114ed70d4568/webp/7190500_4-640x640.jpg",
    name : "LEAP FROG FRIDGE NUMBERS MAGNETIC SET",
    age : "2-5 years",
    brand : "LEAP FROG",
    price : "₹1,749",
    price2:1749,
    strikedPrice : "₹1799",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6137b560ba2ff31c2082d1d7/webp/leap-frog-alphapup-640x640.jpg",
    name : "Leapfrog Alphapup Scout",
    age : "0-2 years",
    brand : "LEAP FROG",
    price : "₹2,374",
    price2:2374,
    strikedPrice : "₹2499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fe2f5ae1044125cac1c54d7/webp/7138700_6-640x640.jpg",
    name : "LEAP FROG - WORD WHAMMER",
    age : "2-5 years",
    brand : "LEAP FROG",
    price : "₹1,563",
    price2:1563,
    strikedPrice : "₹1699",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6222708f6b8ee87588d2b784/webp/hot-wheels-spinning-sound-crane_4-640x640.jpg",
    name : "Hot Wheels Spinnin Sound Crane",
    age : "2-5 years",
    brand : "HOT WHEELS",
    price : "₹1,899",
    price2:1899,
    strikedPrice : "₹1999",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6197f4c91d12cbefbe942535/webp/masters-of-universe-640x640.jpg",
    name : "HOT WHEELS PREMIUM MASTERS OF UNIVERSE WIND RAIDER",
    age : " years",
    brand : "HOT WHEELS",
    price : "₹399",
    price2:399,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/617bd389d23904df07b79fb2/webp/haulin-gas-640x640.jpg",
    name : "HOT WHEELS - LED ZEPPELLIN - HAULIN GAS",
    age : "2-5 years",
    brand : "HOT WHEELS",
    price : "₹399",
    price2:399,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/616c5c11e38f2f8d500bbbf7/webp/ham-640x640.png",
    name : "DISNEY PIXAR CARS - HAMM",
    age : "2-5 years",
    brand : "HOT WHEELS",
    price : "₹599",
    price2:599,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62332641a3bfd191985df638/webp/image-480x480.jpeg",
    name : "Zephyr Alien Invasion",
    age : "5-9 years",
    brand : "ZEPHYR",
    price : "₹349",
    price2:349,
    strikedPrice : "₹499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/621d082c98c5cb4243d78072/webp/z01027-480x480.jpeg",
    name : "Zephyr Mechanix Robotix O",
    age : "5-9 years",
    brand : "ZEPHYR",
    price : "₹639",
    price2:639,
    strikedPrice : "₹799",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62333ba9660d1031bdec917e/webp/blix-cars-1-1-640x640.jpg",
    name : "Blix Cars 1",
    age : "5-9 years",
    brand : "ZEPHYR",
    price : "₹349",
    price2:349,
    strikedPrice : "₹499",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/620aa0f4b07c1229b0c72e8b/webp/copy-of-toy-store-17--480x480.jpg",
    name : "Zephyr Stocks Exchange",
    age : "5-9 years",
    brand : "ZEPHYR",
    price : "₹499",
    price2:499,
    strikedPrice :"",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62053ef97cba912e0c85963b/webp/wm61044-1-640x640.jpeg",
    name : "Pinkfong Baby Shark Song Doll",
    age : "2-5 years",
    brand : "WOWWEE",
    price : "₹2,599",
    price2:2599,
    strikedPrice : "₹2699",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6204b95cf77f33385f131594/webp/wm61080-3-640x640.jpeg",
    name : "Pinkfong Baby Shark Song Puppet",
    age : "2-5 years",
    brand : "WOWWEE",
    price : "₹2,599",
    price2:2599,
    strikedPrice : "₹2699",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61c4b2d3847fae99133edbfd/webp/mp1504ga-640x640.jpg",
    name : "My Little Pony Hair Accessories Set",
    age : "2-5 years",
    brand : "TOWNLEY GIRL",
    price : "₹749",
    price2:749,
    strikedPrice : "₹799",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61bb378d049f67739df03dd4/webp/image_2021-12-16_182645-640x640.png",
    name : "LOL Surprise Remix Glam Rock Hair Set",
    age : "2-5 years",
    brand : "TOWNLEY GIRL",
    price : "₹799",
    price2:799,
    strikedPrice : "₹899",
    category:"Collectibles"
},


{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61bb237a049f67739decafc6/webp/disney-640x640.jpg",
    name : "Disney Frozen II Hair Set Ensemble",
    age : "2-5 years",
    brand : "TOWNLEY GIRL",
    price : "₹799",
    price2:799,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61bb14ab1d9f9d5465f0ac62/webp/image_2021-12-16_155755-640x640.png",
    name : "Disney Frozen 2 Hair Accessories With Brush",
    age : "2-5 years",
    brand : "TOWNLEY GIRL",
    price : "₹549",
    price2:549,
    strikedPrice : "₹599",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6240a90f18a496d2bd28d94c/webp/2020-nissan-370z-640x640.JPG",
    name : "Greenlight Die Cast Hot Hatches 2020 Nissan 370Z",
    age : "9 years +",
    brand : "GREENLIGHT COLLECTIBLES",
    price : "₹849",
    price2:849,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/623e0747756c02dc2533f8f2/webp/1965-lincoln-continental-640x640.jpg",
    name : "Greenlight Hobby Shop Series 11 - 1965 Lincoln Continental with Woman in a Dress",
    age : "9 years +",
    brand : "GREENLIGHT COLLECTIBLES",
    price : "₹799",
    price2:799,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6222650f94385f75f251c389/webp/1955-cadillac-fleetwood-series-60-special_--640x640.JPG",
    name : "Greenlight Die Cast 1955 Cadillac Fleetwood Series 60 Special",
    age : "9 years +",
    brand : "GREENLIGHT COLLECTIBLES",
    price : "₹649",
    price2:649,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62377b7382c272e6e76c94f8/webp/toy-store-6--640x640.png",
    name : "Ty Beanie Boos Fantasia Unicorn Regular",
    age : "2-5 years",
    brand : "TY TOYS",
    price : "₹549",
    price2:549,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61f2cef7b5b291426a22245d/webp/toy-store-10--640x640.jpg",
    name : "Ty Kiki Grey Cat Regular",
    age : "2-5 years",
    brand : "TY TOYS",
    price : "₹599",
    price2:599,
    strikedPrice : "",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61d1c24d79cc9d12716546d4/webp/toy-store-25--640x640.png",
    name : "Ty Wilma Pink Platypus Regular",
    age : "2-5 years",
    brand : "TY TOYS",
    price : "₹549",
    price2:549,
    strikedPrice : "₹599",
    category:"Collectibles"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61b6332cf254bb0872b90382/webp/2-480x480.png",
    name : "Disney Princess Belle Plush Doll",
    age : "2-5 years",
    brand : "SIMBA",
    price : "₹699",
    price2:699,
    strikedPrice : "₹849",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61b62ed2d0775995c7bdbe2e/webp/simba-anna-doll_1-480x480.jpg",
    name : "Disney Frozen Anna Plush Doll",
    age : " years",
    brand : "SIMBA",
    price : "₹699",
    price2:699,
    strikedPrice : "₹849",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61f4f142f01b51a803a63e03/webp/evi-trolley-pink_4-640x640.jpg",
    name : "Simba Toys Evi's Trolley - Pink",
    age : "2-5 years",
    brand : "SIMBA",
    price : "₹499",
    price2:499,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6175c3ba562c69cd6db19615/webp/sand-art-rangoli-640x640.jpg",
    name : "TOYKRAFT SAND ART RANGOLI - MANDALAS",
    age : "5-9 years",
    brand : "TOY KRAFT",
    price : "₹359",
    price2:359,
    strikedPrice : "₹399",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6175c1a69d8279cdbfe66635/webp/gelwax-aquaria-640x640.jpg",
    name : "TOYKRAFT GELWAX CANDLES - AQUARIA",
    age : "5-9 years",
    brand : "TOY KRAFT",
    price : "₹449",
    price2:449,
    strikedPrice : "₹499",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61782993e59af7d209084c20/webp/diy-ganesha-640x640.jpg",
    name : "FEVICREATE ECO-FRIENDLY DIY GANESHA KIT",
    age : "9 years +",
    brand : "TOY KRAFT",
    price : "₹275",
    price2:275,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6235c0c163848ce89b1c8ff0/webp/jada-mazda-rx7_1-640x640.JPG",
    name : "Jada Fast and Furious Die Cast Mazda RX7",
    age : " years",
    brand : "JADA",
    price : "₹1,199",
    price2:1199,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6235c16296c3d7e8f6d61bc9/webp/jada-mitubishi-eclipse-640x640.JPG",
    name : "Jada Fast and Furious Die Cast Mitsubishi Eclipse",
    age : "2-5 years",
    brand : "JADA",
    price : "₹1,199",
    price2:1199,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6235bc7b4400007e302a3008/webp/jada-chevy-impala-1-640x640.JPG",
    name : "Jada Fast and Furious Die Cast Chevy Impala",
    age : "2-5 years",
    brand : "JADA",
    price : "₹1,199",
    price2:1199,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61b5027e8ba223fccd273900/webp/spiderman5-640x640.jpeg",
    name : "Jada Marvel Diecast Nano Action Figure Spiderman",
    age : "2-5 years",
    brand : "JADA",
    price : "₹229",
    price2:229,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61d35e7164f7e5ca75c61dfd/webp/toy-store-52--640x640.png",
    name : "Transformers Bumblebee Combo: Majorette car & Hasbro Action Figure",
    age : "2-5 years",
    brand : "MAJORETTE",
    price : "₹898",
    price2:898,
    strikedPrice : "₹998",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6196a3f3e4c8d4c29931c198/webp/24-640x640.png",
    name : "TRANSFORMERS - MAJORETTE SIDESWIPE AND HASBRO OPTIMUS PRIME",
    age : "2-5 years",
    brand : "MAJORETTE",
    price : "₹699",
    price2:699,
    strikedPrice : "₹798",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61b4ee1db7eba9a9cd662838/webp/majorette-neon-optimus-prime-640x640.jpg",
    name : "MAJORETTE - TRANSFORMERS DIE CAST NEON OPTIMUS PRIME - DICKIE TOYS",
    age : " years",
    brand : "MAJORETTE",
    price : "₹299",
    price2:299,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61ae59dae69c81edd6fbdfab/webp/sos-theme-set-640x640.jpeg",
    name : "MAJORETTE – SOS THEME DIE CAST DIORAMA SET",
    age : "5-9 years",
    brand : "MAJORETTE",
    price : "₹999",
    price2:999,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/623cae4ea44f27c589c0dcc7/webp/e8339-8-640x640.jpg",
    name : "NERF Alpha Strike 35 Piece Ultimate Mission Pack",
    age : "9 years +",
    brand : "HASBRO",
    price : "₹2,699",
    price2:2699,
    strikedPrice : "₹2999",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/623cac1aa44f27c589c0b34b/webp/e6973-640x640.jpg",
    name : "NERF Alpha Strike Fang QS-4 Blaster",
    age : "9 years +",
    brand : "HASBRO",
    price : "₹449",
    price2:449,
    strikedPrice : "₹499",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/62377425948371278c4bf8aa/webp/chewbacca-640x640.jpg",
    name : "Hasbro Star Wars The Force Awakens Chewbacca",
    age : "5-9 years",
    brand : "HASBRO",
    price : "₹1249",
    price2:1249,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/623777205c282e751a9dfe89/webp/finn-and-speeder-bike-640x640.jpg",
    name : "Hasbro Star Wars Poe Dameron and Speeder Bike",
    age : "5-9 years",
    brand : "HASBRO",
    price : "₹1,999",
    price2:1999,
    strikedPrice : "",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61897ba0d89d799e4a86c8d1/webp/pawpatrolljigsawpuzzle_2-640x640.jpg",
    name : "Skillofun Paw Patrol Jigsaw Puzzle In A Box",
    age : "2-5 years",
    brand : "SKILLOFUN",
    price : "₹569",
    price2:569,
    strikedPrice : "₹625",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/618976d6d89d799e4a8676c6/webp/pawpatrollclock_1-640x640.jpg",
    name : "Skillofun Paw Patrol Puzzle Clock",
    age : "2-5 years",
    brand : "SKILLOFUN",
    price : "₹699",
    price2:699,
    strikedPrice : "₹725",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60dadc096df199f7b0a0c6a9/webp/l-47c-640x640.jpg",
    name : "SKILLOFUN ABACUS JUNIOR (1-10)",
    age : "2-5 years",
    brand : "SKILLOFUN",
    price : "₹446",
    price2:446,
    strikedPrice : "₹525",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60bd035218690513e50531dc/webp/23035-640x640.webp",
    name : "MAISTO ANGRY BIRDS - CRASHERS PULLBACK RACERS",
    age : "2-5 years",
    brand : "MAISTO",
    price : "₹699",
    price2:699,
    strikedPrice : "₹795",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6152ab2c237b36e6e437eaf9/webp/be-cre8v-mini-brush-robot-640x640.jpg",
    name : "BECRE8V MINI BRUSH ROBOT KIT",
    age : "9 years +",
    brand : "BECRE8V",
    price : "₹449",
    price2:499,
    strikedPrice : "₹499",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60d4159e4b6ee4d81569fe0a/webp/engino-inventor-bike-models_3-640x640.jpeg",
    name : "ENGINO INVENTOR 4 IN 1 BIKE MODELS",
    age : "5-9 years",
    brand : "ENGINO",
    price : "₹599",
    price2:599,
    strikedPrice : "₹749",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/606d9dddecfc3937d474158a/webp/7224000_1-640x640.jpg",
    name : "ENGINO AVIATORS ROTOBLADE",
    age : "5-9 years",
    brand : "ENGINO",
    price : "₹319",
    price2:319,
    strikedPrice : "₹399",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/607a775db26b935808b873f9/webp/hl501-640x640.webp",
    name : "Hilife Roll n Run Puzzle Cart",
    age : "2-5 years",
    brand : "HILIFE",
    price : "₹2,399",
    price2:2399,
    strikedPrice : "₹2499",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/607a6417b26b935808ad2cc6/webp/hl402-640x640.jpeg",
    name : "FIND THE RIGHT CANDY GAME",
    age : "2-5 years",
    brand : "HILIFE",
    price : "₹599",
    price2:599,
    strikedPrice : "₹699",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/604bbb296730bd79938370bf/webp/geografika-explore-the-world_1-640x640.jpg",
    name : "GEOGRAFIKA EXPLORE THE WORLD",
    age : "5-9 years",
    brand : "UNIK PLAY",
    price : "₹749",
    price2:749,
    strikedPrice : "₹799",
    category:"Active play"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61811a469dd751ce11db0656/webp/chevrolet-green-color--640x640.jpeg",
    name : "NEW RAY CITY CRUISER COLLECTION CHEVROLET GREEN 1:43",
    age : "5-9 years",
    brand : "NEW RAY",
    price : "₹499",
    price2:499,
    strikedPrice : "",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61e6baca677f063eac6bf84f/webp/ferrari-set-of-5-640x640.jpg",
    name : "BBURAGO FERRARI RACE AND PLAY 1/48 SET OF 5 CARS",
    age : "2-5 years",
    brand : "BBURAGO",
    price : "₹1,995",
    price2:1995,
    strikedPrice : "",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61ed13630e0d4a4f88e1391d/webp/imagimake-monument-640x640.jpg",
    name : "MAPOLOGY MONUMENTS OF INDIA",
    age : "5-9 years",
    brand : "IMAGIMAKE",
    price : "₹679",
    price2:679,
    strikedPrice : "₹799",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61c8c30ebb5f9c3623d1adb9/webp/sparkle-girl_baking-set_2-640x640.jpeg",
    name : "SPARKLE GIRLZ BAKING SET",
    age : "2-5 years",
    brand : "SPARKLE GIRLZ",
    price : "₹1,099",
    price2:1099,
    strikedPrice : "₹1199",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6040b194e6ae752634265459/webp/491892773_1-640x640.jpg",
    name : "LOL SURPRISE! FLUFFY PETS WINTER DISCO",
    age : "2-5 years",
    brand : "LOL SURPRISE",
    price : "₹1,899",
    price2:1899,
    strikedPrice : "₹1999",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60000146d6148715d43dee29/webp/hp5563-640x640.jpg",
    name : "EIFILL TOWER",
    age : "2-5 years",
    brand : "HAPE",
    price : "₹1079",
    price2:1079,
    strikedPrice : "₹1199",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6005dbef9d57de3ca1e53b02/webp/47460_1-640x640.jpg",
    name : "ORBEEZ SPARKLE SURPRISE",
    age : "5-9 years",
    brand : "ORBEEZ",
    price : "₹1,599",
    price2:1599,
    strikedPrice : "₹1799",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/600bf7cd5bac148eda65738d/webp/4010-640x640.jpg",
    name : "MY FIRST JCB - BIG WHEELER JOEY",
    age : "0-2 years",
    brand : "JCB",
    price : "₹919",
    price2:919,
    strikedPrice : "₹999",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/600c0367d708505a915b0f1c/webp/4012_4-640x640.jpg",
    name : "MY FIRST HELPFUL DUMP TRUCK",
    age : "0-2 years",
    brand : "JCB",
    price : "₹1,287",
    price2:1287,
    strikedPrice : "₹1399",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6196a9f7e4c8d4c2993255cc/webp/toy-store-1500-x-1500-px-1--640x640.png",
    name : "DISNEY FROZEN 2 TALKING PLUSH - ANNA & ELSA",
    age : "2-5 years",
    brand : "FROZEN",
    price : "₹2,110",
    price2:2110,
    strikedPrice : "₹2398",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/604cb2136730bd79931c6717/webp/e13059-640x640.jpg",
    name : "EXPLORE MY SUPER CHEMISTRY LAB",
    age : "5-9 years",
    brand : "EXPLORE",
    price : "₹899",
    price2:899,
    strikedPrice : "₹999",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61c4946abc0415d38741863a/webp/construction-640x640.jpg",
    name : "SMARTVITY CONSTRUCTION CRANE",
    age : "5-9 years",
    brand : "SMARTIVITY",
    price : "₹849",
    price2:849,
    strikedPrice : "₹999",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fc1ddb40acf40019fba21c1/webp/30312-640x640.jpg",
    name : "ON THE GO MAGIC PATTERN PAD WILD ANIMALS",
    age : " years",
    brand : "MELISSA & DOUG",
    price : "₹427",
    price2:427,
    strikedPrice : "₹449",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6013a79359baaa55dfbb5c5e/webp/9780241373347-640x640.jpg",
    name : "THE SECRET COMMONWEALTH THE BOOK OF DUST VOL II",
    age : "5-9 years",
    brand : "PENGUIN BOOKS",
    price : "₹569",
    price2:569,
    strikedPrice : "₹599",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6230d497c886b78946e67562/webp/mp0041c-640x640.jpg",
    name : "MIRADA CHOCOLATE BROWN BEAR 35CM",
    age : "2-5 years",
    brand : "MIRADA",
    price : "₹699",
    price2:699,
    strikedPrice : "₹799",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6199e70ffe94eb1f563764df/webp/toy-store-1500-x-1500-px-13--640x640.png",
    name : "OK PLAY MY RIDE ON ENGINE",
    age : "2-5 years",
    brand : "OK PLAY",
    price : "₹1,155",
    price2:1155,
    strikedPrice : "₹1,650",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6013ad322501058670a27bf1/webp/9780307980564-640x640.jpg",
    name : "MAGIC TREE HOUSE 24 SOCCER ON SUNDAY",
    age : "5-9 years",
    brand : "RANDOM HOUSE",
    price : "₹189",
    price2:189,
    strikedPrice : "₹199",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60e0acf4436f9b12b5cf0e70/webp/siku-sniper-0866-640x640.jpg",
    name : "SIKU SNIPER 0866 - RED",
    age : "2-5 years",
    brand : "SIKU",
    price : "₹199",
    price2:199,
    strikedPrice : "",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/617660336d177db4943725a1/webp/peppa-s-diwali-640x640.jpg",
    name : "PEPPA PIG: PEPPA'S DIWALI",
    age : "0-2 years",
    brand : "LADYBIRD BOOKS",
    price : "₹225",
    price2:225,
    strikedPrice : "₹250",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61964f297aa0b81c7fbfaeb4/webp/image_2021-11-18_183338-640x640.png",
    name : "WIN MAGIC - CRASH EMS - PULL BACK GO ACTION (GREEN)",
    age : "2-5 years",
    brand : "WINMAGIC GAMES",
    price : "₹299",
    price2:299,
    strikedPrice : "",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fd48eb63530161a79462c12/webp/6045525-640x640.jpg",
    name : "HATCHIMAL COLLEGGTIBLES S5 1 PACK",
    age : "2-5 years",
    brand : "HATCHIMALS",
    price : "₹379",
    price2:379,
    strikedPrice : "₹399",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6205483f3ebc738056ebf224/webp/copy-of-toy-store-15--640x640.jpg",
    name : "PJ Masks Catboy Night Light",
    age : "2-5 years",
    brand : "PJ MASKS",
    price : "₹799",
    price2:799,
    strikedPrice : "₹899",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/613a10628a49236208f4c537/webp/paw-patrol-skye-640x640.png",
    name : "PAW PATROL SKYE - DIE CAST VEHICLE & CARRY CASE",
    age : "2-5 years",
    brand : "PAW PATROL",
    price : "₹1,799",
    price2:1799,
    strikedPrice : "₹2,048",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6094262c08903b48d52da4b9/webp/paw-patrol-6053257-rocky-640x640.jpg",
    name : "PAW PATROL DIE CAST VEHICLES - ROCKY",
    age : "2-5 years",
    brand : "PAW PATROL",
    price : "₹525",
    price2:525,
    strikedPrice : "₹549",
    category:"Learn with fun"
},

{
imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/609422423ce82348ad6afe27/webp/paw-patrol-6053257-marshall-640x640.jpg",
    name : "PAW PATROL DIE CAST VEHICLES - MARSHALL",
    age : "2-5 years",
    brand : "PAW PATROL",
    price : "₹525",
    price2:525,
    strikedPrice : "₹549",
    category:"Learn with fun"
},
]
localStorage.setItem("shopdata",JSON.stringify(shoparr))
shoparrlocal=JSON.parse(localStorage.getItem("shopdata"))
displaydata(shoparrlocal)
document.querySelector("#lowtohigh").addEventListener("click",lowtohigh)
document.querySelector("#hightolow").addEventListener("click",hightolow)
document.querySelector("#ascending").addEventListener("click",namesasc)
document.querySelector("#descending").addEventListener("click",namesdsc)

//   MAPPING the products For Akash
function displaydata(shoparrlocal){                      
document.querySelector("#main2b").innerText=""
shoparrlocal.map(function(el){
main=document.querySelector("#main2b")
div=document.createElement("div")
div.setAttribute("id","imagecontainer")
div.style.height="350px" 
div.style.width="200px"
div.style.backgroundColor="white"
div.style.paddingLeft="10px"
div.style.paddingTop="10px"
imagediv=document.createElement("div")//new part
divbutton=document.createElement("div")//
divbutton.setAttribute("class","cartwishbutton")
bt1=document.createElement("button")
bt1.setAttribute("class","bt1")

bt1.innerText="🛒"


bt1.addEventListener("click",function(){
    addtocart(el)
})
bt2=document.createElement("button")
bt2.setAttribute("class","bt2")

bt2.innerText="🖤"

bt2.addEventListener("click",function(){
    addtowish(el)
})
divbutton.append(bt1,bt2)
image=document.createElement("img")
image.src=el.imageUrl
imagediv.append(image,divbutton)
// imagediv.style.border="1px solid red" 
imagediv.style.height="50%"   //new part
// cartwishdiv=document.querySelector("div")
// cartwishdiv.setAttribute("class","cartwishdiv")
image.addEventListener("click",function(){
    payment(el)
})
p=document.createElement("p")
p.innerText=el.name
p.style.fontWeight="bold"
price=document.createElement("span")
price.innerText=el.price
striked=document.createElement("s")
striked.innerText=el.strikedPrice
if(striked.innerText==""){
    divi2=document.createElement("div")
   divi2.style.height="15px"
    divi2.style.textAlign="center"
    divi2.append(price)
}
else{
    divi2=document.createElement("div")
    divi2.style.display="flex"
    divi2.style.justifyContent="space-around"
    striked.style.color="blue"
    divi2.append(price,striked)
}

div.append(imagediv,p,divi2)  //newpart
main.append(div)

})
}
function lowtohigh(){

shoparrlocal.sort(function(a,b){
    return a.price2-b.price2
  })
  displaydata(shoparrlocal)
}
function hightolow(){

shoparrlocal.sort(function(a,b){
    return b.price2-a.price2
  })
  displaydata(shoparrlocal)
}
function namesasc(){

shoparrlocal.sort(function(a,b){
    f=a.name.toLowerCase()
    s=b.name.toLowerCase()
    if( f>s) return 1
    if (f<s) return-1
    return 0
  })
  displaydata( shoparrlocal)
}
function namesdsc(){
shoparrlocal.sort(function(a,b){
    f=a.name.toLowerCase()
    s=b.name.toLowerCase()
    if( f>s) return -1
    if (f<s) return 1
    return 0
  })
  displaydata( shoparrlocal)
}
function payment(el){
console.log(el)
console.log("hello")
paymentarr=[]
paymentarr.push(el)
localStorage.setItem("paymentlist",JSON.stringify(paymentarr))
window.location.href="paymentpage.html"
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
username=document.querySelector("#username")
    userarr=JSON.parse(localStorage.getItem("user"))
    username.innerText="Hi!"+" "+userarr[0].name

function addtocart(el){
console.log("hello")
var cartData = JSON.parse(localStorage.getItem("cart"))||[];
cartData.push(el)
localStorage.setItem("cart",JSON.stringify(cartData))
alert("Item added to cart")
window.location.reload()  
}
function addtowish(el){
console.log("hello")
var NewArriv = JSON.parse(localStorage.getItem("wish")) || []; 
NewArriv.push(el)
localStorage.setItem("wish",JSON.stringify(NewArriv))
alert("Product added Sucessfully Into The Wishlist 💛")
window.location.reload()  
}
function wishpage(){
window.location.href="wish.html"
}