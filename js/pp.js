$(document).ready(function() {
    /*        nevebar ثبات ال / */

var homeOffset = $(".home-item").offset().top
console.log(homeOffset);

  $(window).scroll(function(){
      var windowScroll = $(this).scrollTop()

  });
/*  -------- bottom to scroll top -------- 
                 1 bottom يظهر ويختفي                / */

$(window).scroll(function(){
if($(this).scrollTop()>=200){
    $("#scrollTop").show();
}
else{
    $("#scrollTop").hide();
}

});
/*     bottom يرجعك لاول الصفحة           */ 
   $("#scrollTop").click(function(){
       $(window).scrollTop(0);
   });

// var scrolllink = $(".nav-item a")
// scrolllink.click(function(e){
//     e.preventDefault();

//     $('html , body').animate({
//            scrollTo: $(this.hash).offset().top }, 1000);
//    window.console.log($(this).data('scroll'));
//           
//            $('html , body').animate({  screenTop: $('#' + $(this).data('scroll')).offset().top
//              }, 1000);
// 


});      

// // getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");


// // if user press any key and release
// inputBox.onkeyup = (e)=>{
//     let userData = e.target.value; //user enetered data
//     let emptyArray = [];
//     if(userData){
//         emptyArray= suggestions.filter((data)=>{
//      return data.toLocaleLowerCase();
//         });
        
//     }
// }



// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
// function select(element){
//     let selectData = element.textContent;
//     inputBox.value = selectData;
//     icon.onclick = ()=>{
//         webLink = `https://www.google.com/search?q=${selectData}`;
//         linkTag.setAttribute("href", webLink);
//         linkTag.click();
//     }
//     searchWrapper.classList.remove("active");
// }
// function showSuggestions(list){
//     let listData;
//     if(!list.length){
//         userValue = inputBox.value;
//         listData = `<li>${userValue}</li>`;
//     }else{
//       listData = list.join('');
//     }
//     suggBox.innerHTML = listData;
// }
