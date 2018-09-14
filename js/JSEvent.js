// var tabs=document.querySelectorAll('.tab-ct .header>li');
// var panels=document.querySelectorAll('.tab-ct .content>li');
// 
// console.log('d');
// tabs.forEach(function(tab){
//   tab.addEventListener('click', function(){
// 	  
//     tabs.forEach(function(node){
//       node.classList.remove('active')
//     })
// 	
//     this.classList.add('active')
//     var index=[].indexOf.call(tabs,this);
//     
//     panels.forEach(function(node){
//       node.classList.remove('active');
//     })
//     panels[index].classList.add('active')
//   })
// })



//模态框
var btn=document.querySelector('#btn-modal'),
modal=document.querySelector('#modal-1'),
modalCt=document.querySelector('#modal-1 .modal-ct'),
close=document.querySelector('#modal-1 .close')

btn.addEventListener('click',function(){
	modal.classList.add('open');
});
close.addEventListener('click',function(){
	modal.classList.remove('open');
});
modal.addEventListener('click',function(){
	modal.classList.remove('open');
});
modalCt.addEventListener('click',function(e){
	e.stopPropagation();
})