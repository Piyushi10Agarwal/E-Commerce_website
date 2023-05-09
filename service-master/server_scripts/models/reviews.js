const mongoose =require('mongoose');
//it allows us for marks wrods. For eg type in description # great
const marked = require('marked');
//i don't know much about it but i uses it to show title name in place of id in url
const slugify = require('slugify');
//dompurify sanitizes our html files as they are badly written so it properly sanitizes them. Please refer to npm site
const createDomPurify = require('dompurify');
const { JSDOM }= require('jsdom');
const dompurify= createDomPurify(new JSDOM().window);

mongoose.connect('mongodb://localhost/service',
	{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex: true});

//this is my schema for our databse
const reviewSchema= new mongoose.Schema({
	name :{
		type    : String,
		required: true
	},
    username: String,
	description :{
		type : String
	},
	markdown :{
		type    : String,
		required: true
	},
	date :{
		type   : Date,
		default: new Date
	},
	slug: {
		type :String,
		required :true,
		unique :true
	},
	sanitizedHtml :{
		type: String,
		required :true
	}
});
//i don't know i just copy and paste it
//as you see this is for sanitization of our htmls
reviewSchema.pre('validate',function(next){
	if(this.name){
		this.slug= slugify(this.name,{lower :true,strict: true});
	}
	if(this.markdown){
		this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
	}

	next();
});

module.exports = mongoose.model("Review", reviewSchema);