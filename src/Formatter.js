const Formatter = {
  formatTime: function(datetime) {
    var hours = this.formatHour(datetime.getHours());
    var minutes = this.formatMinutes(datetime.getMinutes());
    var ampm = this.formatMeridiem(datetime.getHours());
    return `${hours}:${minutes} ${ampm}`;
  },

  formatHour: function(hours) {
    if (hours > 12) {
      return hours % 12;
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
    if (hours >= 12) {
      return 'p.m.';
    } else {
      return 'a.m.';
    }
  },

  formatRuntime: function(minutes) {
    if (minutes) {
      var hours = Math.floor(minutes / 60);
      var mins = minutes % 60;
      return `${hours}h ${mins}m`;
    } else {
      return '?';
    }
  }
}

export default Formatter;
