module.exports = {
	checkLogin:function(req,res,next){
		if(!req.session.user){
			req.flash('error','δ��¼');
			return res.redirect('/sigin');
		}
		next();
	},
	
	checkNotLogin:function(req,res,next){
		if(req.session.user){
			req.flash('�ѵ�¼');
			return res.redirect('back');
		}
	}
}