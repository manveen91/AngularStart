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
  app.controller("ReviewController", function(){
    this.review = {};
	this.addReview = function(product){
	  product.reviews.push(this.review);
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
   }],
   reviews: [ 
   {
    stars: 5,
	body: "It was Wonderful experience to work with You!",
	author: "Frank@thomson.com"
	},
	{
    stars: 4.5,
	body: "Supporting, Intellectual, Intelligent, Helping person to work with",
	author: "George@russel.com"
	}]
	 },
   {
   name: 'Deep',
   price: 60536.87,
   description : ' He is a good girl',
   canPurchase: false,
   images: [
   { full: 'https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120'
   }],
   reviews: [ 
   {
    stars: 3,
	body: "Average Experience!",
	author: "Frank@thomson.com"
	},
	{
    stars: 4,
	body: "Awsum person to Interact with.. !",
	author: "George@russel.com"
	}]
   }
   ];
 })();