//显示与隐藏
var BasePage = Backbone.View.extend({

	hide : function(){
		this.$el.hide();
	},
	show : function(){
		this.$el.show();
	}

});
