var mongoose=require('mongoose');

//关于这个Schema文件，主要为实例化为模型做准备，在没有实例化为model之前，没有办法操纵数据库
var MovieSchema=new mongoose.Schema({
  doctor:String,//作者
  title:String,//标题
  country:String,//国家
  language:String,//语言
  year:String,//年份
  poster:String,//海报
  summary:String,//简介
  flash:String, //视频源


  meta:{
    createAt:{
      type:Date,
      default:Date.now()
    },
    updateAt:{
      type:Date,
      default:Date.now()
    }
  }
});

// 返回所有视频
MovieSchema.statics.findAll = function(callback) {
  console.log("数据库schema方法", this.model('Movie').find({}));
  return this.model('Movie').find({}, callback);
}
// 根据 type 返回视频
MovieSchema.statics.findByType = function(opt, callback) {
  return this.find(opt).exec(callback);
}

// 根据 id 返回视频
MovieSchema.statics.findById = function(id, callback) {
  return this.findOne({_id: id}).exec(callback);
}

// 根据 名字返回视频
MovieSchema.statics.findByName = function(opt, callback) {
  return this.find(opt).exec(callback);
}

module.exports=MovieSchema;
