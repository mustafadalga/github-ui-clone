// Header Section
var header=document.querySelector('header');
var navMenu=header.querySelector('.nav-menu');
var nav_items=navMenu.querySelectorAll('.nav-main-item');
var navToggleBtn=header.querySelectorAll(".nav-toggle-btn");

function closeNavItems(){
    nav_items.forEach(item=>{
        item.classList.remove('open');
    })
}

nav_items.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if (e.currentTarget.classList.contains('open')){
            e.currentTarget.classList.toggle('open');
        }else{
            closeNavItems();
            e.currentTarget.classList.toggle('open');
        }
    });
})

navToggleBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        navMenu.classList.toggle('open');
        header.classList.toggle('bg-sapphire');
    });
})


//Nav Search Form
var searchForm=document.querySelector('.search-form');
var searchInput=searchForm.querySelector('input[type="text"]');
var searchHint=searchForm.querySelector('.search-hint');
var searchText=searchHint.querySelector('.search-text');

function changeSearchText(){
   searchHint.classList.add('open');
   searchText.textContent=this.value
    if (this.value.trim().length==0){
        searchHint.classList.remove('open');
    }
}
function closeSearchHint(){
    searchHint.classList.remove('open');
}
function openSearcHint(){
    if (this.value.length!=0){
        searchHint.classList.add('open');
    }
}

searchInput.addEventListener('change',changeSearchText);
searchInput.addEventListener('keyup',changeSearchText);
searchInput.addEventListener('focusout',closeSearchHint);
searchInput.addEventListener('focus',openSearcHint);

window.addEventListener('resize', function(event){
    if (window.innerWidth>=1012){
        header.classList.remove('bg-sapphire');
    }else{
        if (navMenu.classList.contains('open')){
            header.classList.add('bg-sapphire');
        }
    }
});





// Features Section
var features_img=document.querySelectorAll('.features-item-img img');
var features=document.querySelectorAll('.features-item');

function resetActive(){
    features_img.forEach(item=>{
        item.classList.remove("active");
    });
}
function getDataId(item){
    return item.getAttribute('data-id');
}
function changeImage(id){
    features_img[id].classList.add('active');
}
function checkWindowsSize(){
    return window.innerWidth>=544 ? true : false;
}

features.forEach(feature=>{
    feature.addEventListener('mouseover',()=>{
       if (checkWindowsSize()){
           resetActive();
           changeImage(getDataId(feature));
       }
    });
    feature.addEventListener('mouseout',()=>{
        resetActive();
    });
})



