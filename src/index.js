function generateTimeStamp(year = 2016, count = 60) {
  var mmul = 0; // months multiplier
  var dmul = 0; //date multiplier
  var hmul = 0; // hour multiplier
  var mandsmul = 0; //minutes and seconds multiplier;

  var timestamps = [];
  for (var i=1; i < count; i++ ) {
    var date  = i;
    var month = i;
    var hour  = i;
    var mands = i;

    if(i%24 === 0){
      ++hmul;
    }

    if(i%60 === 0) {
      ++mandsmul;
    }

    // month
    if(i > 12) {
      month = i - 12 * mmul;
    }

    // hours
    if(i > 23) {
      hour = i - 24 * hmul;
    }

    //date
    if(i > 30) {
      date = i - 30 * dmul;
    }

    //mins and seconds
    if(i > 59) {
      mands = i - 60 * mandsmul;
    }

    if (i < 10) {
      i = '0'+i;
    }

    if(month < 10) {
      month = '0'+month;
    }

    if(date < 10) {
      date = '0'+date;
    }

    if(hour < 10) {
      hour = '0'+hour;
    }

    if(mands < 10) {
      mands = '0'+mands;
    }

    if(i%12 === 0) {
      ++mmul;
    }

    if(i%30 === 0) {
      ++dmul;
    }

    var dateString = year + '-' + month + '-' + date + 'T' + hour + ':' + mands + ':' + mands;
    var day = new Date(dateString);
    timestamps.push(day.getTime());
  }
  return timestamps;
}