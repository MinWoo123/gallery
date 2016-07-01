Template.home.helps({
    isLogin: function(){
        var uesr = Meteor.user();
        if(user) {
            return true;
        }
        else{
            return false;
        }
    }
});