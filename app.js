(function(){
var app = angular.module('store', []);
 app.controller('StoreController', function(){
  this.products = gems;
 });
   app.controller('PanelController', function(){
  this.tab= 1;
  this.selectTab = function(setTab){
  this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
	};
  });
 var gems = [
   {
   name: 'Manveen',
   price: 50000,
   description : ' She is a good girl',
   canPurchase: false,
   images: [
   { full: 'https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120'
   }]
   },
   {
   name: 'Deep',
   price: 60536.87,
   description : ' He is a good girl',
   canPurchase: false,
   images: [
   { full: 'https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120'
   }]
   }
   ];
 })();