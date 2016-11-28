const Datetime = {
  addMinutes: function(datetime, minutes) {
    return new Date(datetime.getTime() + minutes*60000);
  },

  floor: function(datetime) {
    return this.addMinutes(datetime, -datetime.getMinutes());
  },

  ceiling: function(datetime) {
    return this.addMinutes(datetime, 60 - datetime.getMinutes());
  },

  minutesBetween: function(a, b) {
    return (b - a) / 60000;
  }
};

export default Datetime;
