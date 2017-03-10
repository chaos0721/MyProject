
var PageIssueList = BasePage.extend({
	el : '#page-issue-list'
});

var PageIssueCreate = BasePage.extend({
	el : '#page-issue-create'
});

var PageIssueEdit = BasePage.extend({
	el : '#page-issue-edit'
});

var AppRouter = Backbone.Router.extend({

	initialize : function(){
		this.pageIssueList = new PageIssueList();
		this.pageIssueCreate = new PageIssueCreate();
		this.pageIssueEdit = new PageIssueEdit();
	},

	hideAllpages : function(){
		this.pageIssueList.hide();
		this.pageIssueCreate.hide();
		this.pageIssueEdit.hide();

	},

	routes : {
		'issue/new' : 'issueCreate',
		'issue/:id' : 'issueEdit',
		'' : 'issueList'
	},

	issueEdit : function(id){
		console.log(id);
		this.hideAllpages();
		this.pageIssueEdit.show();
	},

	issueCreate : function(){
		this.hideAllpages();
		this.pageIssueCreate.show();
	},

	issueList : function(){
		this.hideAllpages();
		this.pageIssueList.show();
	}


});

var router = new AppRouter();

Backbone.history.start();
