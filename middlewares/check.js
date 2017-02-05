module.exports = {
	checkLogin:function(req,res,next){
		if(!req.session.user){
			req.flash('error','Î´µÇÂ¼');
			return res.redirect('/sigin');
		}
		next();
	},
	
	checkNotLogin:function(req,res,next){
		if(req.session.user){
			req.flash('ÒÑµÇÂ¼');
			return res.redirect('back');
		}
	}
}