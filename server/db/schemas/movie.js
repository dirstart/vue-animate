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
MovieSchema.statics.findByType = function(callback) {
  console.log("数据库schema方法", this.model('Movie').find({}));
  return this.model('Movie').find({}, callback);
  // console.log("这是查询所有数据的？", this.model('Movie').find({}));
  // console.log("查询单挑", this.model('Movie').find({ "type": "1" }, callback));
  // const opt = { "type": "1" };
  // console.log(this.model('Movie').find(opt, function(err ,res))
  // console.log(this.model('Movie').find(opt));
  // return this.model('Movie').find(opt, callback);
  // console.log("返回了什么数据呢", this.model('Movie').find({}));
  // if (!type.length) return this.callback;
  // return this.model('Movie').find({type: type}, callback);
  // return this.model('Movie').find({});
}

module.exports=MovieSchema;
