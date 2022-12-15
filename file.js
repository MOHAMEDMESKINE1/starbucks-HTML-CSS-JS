function imgSlider(anything){
    document.querySelector('.starbucks').src=anything;

}
function ChangeColor(color){
    const circle=document.querySelector(".circle");
    const starbucks_color=document.querySelector(".starbucks-color");
    const btn=document.querySelector(".btn");
    circle.style.background=color;
    starbucks_color.style.color=color;
    btn.style.background=color;

}
function toggleMenu(){
    var menuToggle=document.querySelector(".toggle");
    var navigation=document.querySelector(".navigation");
    menuToggle.classList.toggle('active');
    navigation.classList.toggle("active")
}