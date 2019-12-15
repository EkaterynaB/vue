Vue.component('card', {
	props: ['title', 'content'],
	data() {
		return {
			claps: 0
		}
	},
	template: `
				<div class="card">
					<div class="card-body">
						<h3 class="card-title">{{this.title || 'Vuejs fundamental'}}</h3>
						<div class="card-text">{{ content || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dicta dolores enim eos explicabo fugit harum inventore minima nemo nesciunt odit, officia pariatur recusandae sunt suscipit voluptatum. Fugiat, saepe.' }}</div>
					</div>
					<div class="text-center text-muted display-4">{{claps}}</div>
					<div class="btn-group-small">
						<button type="button" @click="clapForArticle" class="btn btn-info btn-sm ">Clap for me</button>
						<button type="button" @click="deleteArticle" class="btn btn-danger btn-sm ">Delete me</button>
					</div>
					
				</div>`,
	methods: {
		deleteArticle() {
			this.$emit('delete-article', this.title);
		},
		clapForArticle() {
			this.claps++;
		},

	}
});

new Vue({
	el: '#app3',
	data: {
		articles: [
			{
				title: 'Kate',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dicta dolores enim1'
			},
			{
				title: 'Larisa',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dicta dolores enim2'
			},
			{
				title: 'Sasha',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dicta dolores enim3'
			}
		]
	},
	methods: {
		deleteArticle(title) {
			this.articles = this.articles.filter(article => article.title !== title)
		}
	}
});