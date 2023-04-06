import NavBar from '../views/NavBar.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';
    export default {
        name : 'NewsDetail',
        components : {NavBar},
        data : () => ({
            categories : [],
            post_id : 0,
            post : [],
            view_count : 0,
        }),

        computed: {
            ...mapGetters(['getToken', 'getUserData'])
        },
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
            },

            getViewCount() {
                let data = {
                    user_id : this.getUserData.id,
                    post_id : this.post_id,
                };

                axios.post('http://localhost:8000/api/action-log',data).then((response) => {
                    this.view_count = response.data.count;
                })
            }
         
        },
        beforeMount() {
            this.post_id = this.$route.query.id;
        },
    
        mounted() {
            this.getAllCategories();
            this.getPostDetail();
            this.getViewCount();
            
        },

      
    }