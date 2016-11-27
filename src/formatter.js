const Formatter = {
  formatTime: function(datetime) {
    var hours = this.formatHour(datetime.getHours());
    var minutes = this.formatMinutes(datetime.getMinutes());
    var ampm = this.formatMeridiem(datetime.getHours());
    return `${hours}:${minutes} ${ampm}`;
  },

  formatHour: function(hours) {
    if (hours > 12) {
      return hours % 12 + 1;
    } else {
      return hours;
    }
  },

  formatMinutes: function(minutes) {
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return '' + minutes;
    }
  },

  formatMeridiem: function(hours) {
    if (hours > 12) {
      return 'p.m.';
    } else {
      return 'a.m.';
    }
  }
}

export default Formatter;
