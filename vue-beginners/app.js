new Vue({
	el: '#app-1',
	data: {
		currencies: {},
		value: 0,
		amount: null,
		from: '',
		to: '',
		result: 0
	},
	mounted() {
		this.getCurrencies()
	},
	computed: {
		formattedCurrencies() {
			return Object.values(this.currencies);
		},
		calculateValue() {
			return (this.amount * this.result).toFixed(3);
		}
	},
	methods: {
		getCurrencies() {
			console.log('currencies');
			const currencies = localStorage.getItem('currencies');
			if (currencies) {
				return this.currencies = JSON.parse(currencies);
			}

			axios.get('https://free.currconv.com/api/v7/currencies?apiKey=4d772e86562845728586')
			.then(response => {
				this.currencies = response.data.results;
				localStorage.setItem('currencies', JSON.stringify(this.currencies));
			});
		},
		convertCurrency() {
			// axios.get(`https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v7/convert?q=\`https://cors-anywhere.herokuapp.com/https://free.currencyconverterapi.com/api/v3/convert?q=${this.from}_${this.to}`)
			// .then(response => {
			// 	console.log(response);
			// });

			setTimeout(() => {
				this.result = 3.33;
			})
		}
	},
	watch: {
		from() {
			this.result = 0
		},
		to() {
			this.result = 0
		}
	}
})