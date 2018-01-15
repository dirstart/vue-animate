var mongoose=require('mongoose');
//引入模式这个文件
var movieSchema=require('../schemas/movie');
var Movie=mongoose.model('Movie',movieSchema);

module.exports=Movie;
