

// Features Section
var features_img=document.querySelectorAll('.features-item-img img');
var features=document.querySelectorAll('.features-item');

function resetActive(){
    features_img.forEach(item=>{
        item.classList.remove("active");
    })
}
function getDataId(item){
    return item.getAttribute('data-id');
}
function changeImage(id){
    features_img[id].classList.add('active');
}

features.forEach(feature=>{
    feature.addEventListener('mouseover',()=>{
        resetActive();
       changeImage(getDataId(feature));
    });
    feature.addEventListener('mouseout',()=>{
        resetActive();
    });
})