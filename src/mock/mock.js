const Mock = require('mockjs');

const Random = Mock.Random;

const data = () => {
  const list = [];
  for (let i = 0; i < 30; i++) {
    const obj = {
      title: Random.csentence(4, 30),
      thumbnail_pic_s: Random.dataImage('200x250', 'mock图片')
    }
    list.push(obj);
  }
  return list;
}

Mock.mock('/test', /post|get/i, data);
