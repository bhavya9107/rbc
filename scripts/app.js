var plist = [
{
	title: "Seminar Dash",
	content: "A seminar management single platform for attendees and seminar organisers",
	imagePath: "https://lh3.googleusercontent.com/-Oq7sPcWxKGw/VTmnbYA30zI/AAAAAAAANNU/FYEAsHNTW0o/w10667-h6000/Cyan_Desktop.png",
	link: "https://seminar-dash.appspot.com/"
},{
	title: "Catalog Mania",
	content: "Catalog provider curated for users by users. Provides a list of items within a variety of categories as well as provides a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items.",
	imagePath: "http://orig03.deviantart.net/f7c4/f/2015/030/b/7/_minflat__default_windows_8_1_wallpaper__4k__by_dakoder-d7j7i5a.jpg",
	link: "https://github.com/bhavya9107/Catalog_Mania/"
},{
	title: "Swiss tournament system",
	content: "the game matches generation between players and according to the swiss tournament system by implementation of relational databases.",
	imagePath: "http://cdn.wallpapersafari.com/32/5/nzLUl8.jpg",
	link: "https://github.com/bhavya9107/Swiss-system-tournament/"
},{
	title: "Social media blog",
	content: "social media blog ,register and share your reviews ,comment and like",
	imagePath: "http://www.bluthemes.com/assets/img/blog/12/rocket-night-v2.jpg",
	link: "https://bhavya-blogs.appspot.com/"
},{
	title: "Restro dash",
	content: "restaurant app to manage , create restaurant and , edit and delete menu items",
	imagePath: "http://www.pixelstalk.net/wp-content/uploads/2016/11/Free-Flat-Design-Wallpapers.jpg",
	link: "https://restro-dash.herokuapp.com/"
},{
	title: "Personal blog",
	content: "my personal blog based on flask framework",
	imagePath: "http://www.kanhangadvartha.com/data/out/103/IMG_1071888.png",
	link: "https://bhavya-blog.herokuapp.com/"
},{
	title: "Portfolio",
	content: "Portfolio for Rishabh chawla",
	imagePath: "http://www.guoguiyan.com/data/out/73/69717969-flat-wallpapers.png",
	link: "https://rishabh3112.github.io"
}];


angular.module("MyApp", ["ngMaterial"])

  .controller("TabOne", function($scope) {
    $scope.projects = plist;
  })
  .filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
  })
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .accentPalette('yellow');
});