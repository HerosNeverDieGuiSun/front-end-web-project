// eslint-disable-next-line no-undef
const app = new Vue({
  el: '#app',
  data: {
    city: '',
    weatherList: [],
    err: '',
  },
  methods: {
    search_weather() {
      const that = this;
      // eslint-disable-next-line no-undef
      axios
        .get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.city}`)
        .then((response) => {
          that.weatherList = response.data.data.forecast;
        })
        .catch((err) => {
          that.err = err;
        });
    },
    search_item(city_name) {
      const that = this;
      // eslint-disable-next-line no-undef
      axios
        .get(`http://wthrcdn.etouch.cn/weather_mini?city=${city_name}`)
        .then((response) => {
          that.weatherList = response.data.data.forecast;
        })
        .catch((err) => {
          that.err = err;
        });
    },
  },
});
app();
