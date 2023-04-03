import axios from "axios";
import NavBar from '../views/NavBar.vue';

export default {
    name: 'HomePage',
    components : {NavBar},
    data : () => ({
        name : '',
        posts : [],
        categories : [],
    }),

    methods: {
        getAllPost() {
            axios.get('http://localhost:8000/api/posts').then((response) => {
                this.posts = response.data.posts;
            })
        }, 

        getAllCategories() {
            axios.get('http://localhost:8000/api/categories').then((response) => {
                this.categories = response.data.categories;
            })
        }, 

        getSearchedPosts(searchedPosts) {
            console.log(searchedPosts[0].title);
        },
        newsDetail(id) {
            this.$router.push({
                name: 'newsDetail',
                query : {
                    id: id,
                }
            });
        }
    },

    mounted() {
        this.getAllPost();
        this.getAllCategories();
    },

    created() {
        console.log(this.$router.query);
    }
}