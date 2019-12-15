Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1)
});

const bus = new Vue();

const category = Vue.component('category', {
  props: ['type'],
  computed: {
    toUpperCase() {
      return this.type.toUpperCase()[0] + this.type.slice(1);
    }
  },
  template: `<div>Edit</div>`
});

const viewMode = Vue.component('view-mode', {
  data() {
    return {
      title: 'my Title',
      content: '',
      time: '',
      author: '',
      category: '',
    }
  },
  template: `<div>
              <header><i class="far fa-edit" @click="editContent()"></i></header>
              <h1>{{ title }}</h1>
              <hr />
              <p>{{ content }}</p>
              <hr />
              <p>Created by {{ author }} and last edited at {{ time }}</p>
              <category :type="category"></category>
            </div>`,
  created() {
    const that = this;
    bus.$on('saveData', function(v) {
      that.$emit('switchContent');
      console.log(that.title, v.title);
      Object.keys(v).map(item => {
        that[item] = v[item];
      });
    });
    // console.log(that, that.title);
  },
  mounted() {
    // console.log('beforeUpdated');
    // console.log(this);
  },
  unmount() {
    console.log('off');
    bus.$off();
  },
  methods: {
    editContent() {
      this.$emit('switchContent');
    }
  }
});

const editMode = Vue.component('edit-mode', {
  data() {
    return {
      categories: ['news', 'tech', 'science', 'sports', 'finance'],
      category: 'tech',
      maxTitleLength: 5,
      title: 'Some Title',
      author: 'Ivanov',
      content: 'PUT SUMMARY HERE PUT SUMMARY HERE PUT SUMMARY HERE ' +
        'PUT SUMMARY HERE PUT SUMMARY HERE PUT SUMMARY HERE ' +
        'PUT SUMMARY HERE PUT SUMMARY HERE PUT SUMMARY HERE'
    }
  },
  template: `<div>
              <header><i class="far fa-save" @click="saveDate()"></i></header>
              <hr />
             <p>Article Title: <input type="text" v-model="title"></p>
             <p>Author Info: <input type="text" v-model="author"></p>
             <div class="category" v-for="item in categories">
              <label :for="item">{{ item | capitalize }}</label>
              <input v-model="category" name="category" :id="item" type="radio" :value="item">
              </div>
              <div>
              <textarea v-model="content" name="content" id="content" cols="90" rows="10">{{content}}</textarea>
</div>
             </div>`,
  methods: {
    saveDate() {
      this.$emit('switchContent');
      const data = {
        category: this.category,
        title: this.title,
        author: this.author,
        content: this.content,
      }
      bus.$emit('saveData', data);
      console.log('saveData');

    }
  },
  created() {
    console.log('created')
  },
  updated() {
    console.log('updated');
  }
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Kate)',
    isEditMode: true
  },
  template: `<div>
    <h1>{{ message }}</h1>
    <edit-mode v-if="isEditMode" @switchContent="isEditMode = !isEditMode"></edit-mode>
    <view-mode v-else @switchContent="isEditMode = !isEditMode"></view-mode>
  </div>`,
});

// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello, Kate)',
//     isEditMode: true
//   },
//   template: `<div>
//     <h1>{{ message }}</h1>
//     <edit-mode v-if="isEditMode" @switchContent="isEditMode = !isEditMode"></edit-mode>
//     <view-mode v-else @switchContent="isEditMode = !isEditMode"></view-mode>
//   </div>`,
// });