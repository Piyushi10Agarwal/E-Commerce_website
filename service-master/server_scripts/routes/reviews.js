const express = require('express');
const Review  = require('./../models/reviews')
const router  = express.Router();

router.get('/',async (req,res) =>{
	const reviews =await Review.find().sort({ date: 'desc'});
	res.render('review_front',{reviews: reviews, user: req.user});
});

router.get("/new",(req,res) =>{
	res.render('new',{review: new Review()});
});
//by applying this : in front of id it take our id else we have to write article.id
router.get("/edit/:id",async (req,res) =>{
	const review= await Review.findById(req.params.id);
	res.render('edit',{review: review, user:req.user});
});
//same as of id
//we write async in front of our callback function because we want first our await statement executed than we go to next line
router.get("/:slug",async (req,res) =>{
	const review=await Review.findOne({slug: req.params.slug});
//	res.render("show",{review:review});
	res.redirect('../reviews');
});

router.get("/read/:id",async (req,res) =>{
	const review=await Review.findOne({_id: req.params.id});
    res.render("show",{review:review, user: req.user});
});

router.post('/',async (req,res,next) =>{
	req.review = new Review();
	next();
},saveReviewAndRedirect('new'));

router.put('/:id',async (req,res,next) =>{
	req.review = await Review.findById(req.params.id);
	next();
},saveReviewAndRedirect('edit'));

router.delete('/:id', async (req,res)=>{
	await Review.findByIdAndDelete(req.params.id);
	res.redirect('../reviews');
});
//as we see our / and /:id route logic is same
// id route is put because we want when we click edit button we can edit details with same 
//fields we fill up earlier
function saveReviewAndRedirect(path){
	return async (req,res)=>{
		let review = req.review;
		review.name = req.body.name;
		review.description = req.body.description;
		review.markdown = req.body.markdown,
        review.username = req.user.username;
		try{
			review = await review.save();
			res.redirect(`/reviews/${review.slug}`);
		} catch(e){
			res.render(`./${path}`,{review : review, user: req.user});
		}
	}
};

module.exports = router;