import NavBar from '../views/NavBar.vue';
import axios from 'axios';
    export default {
        name : 'NewsDetail',
        components : {NavBar},
        data : () => ({
            categories : [],
            post_id : 0,
            post : [],
        }),
        methods: {
    
            getAllCategories() {
                axios.get('http://localhost:8000/api/categories').then((response) => {
                    this.categories = response.data.categories;
                })
            }, 

            getPostDetail() {
                axios.get('http://localhost:8000/api/posts/'+this.post_id).then((response) => {
                    this.post = response.data.post;
                    console.log(this.post.media);
                })
            }
        },
        beforeMount() {
            this.post_id = this.$route.query.id;
        },
    
        mounted() {
            this.getAllCategories();
            this.getPostDetail();
        },

      
    }