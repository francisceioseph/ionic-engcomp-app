angular.module('App')
.factory('News', function(){
  var News = {
    data: [
      {
        title: 'Some News 01',
        brief: 'something has happened this year...',
        date: '01/01/2016 at 23:30',
        thumbUrl: 'http://www.pudim.com.br/pudim.jpg'
      },

      {
        title: 'Some News 02',
        date: '01/01/2016 at 12:30',
        brief: 'something has happened again...',
        thumbUrl: 'http://www.pudim.com.br/pudim.jpg'
      }
    ]
  };

  return News;
});
