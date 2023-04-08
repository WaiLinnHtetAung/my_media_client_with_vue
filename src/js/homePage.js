import axios from "axios";
import NavBar from '../views/NavBar.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'HomePage',
    components : {NavBar},
    data : () => ({
        name : '',
        posts : [],
        categories : [],
    }),

    computed: {
        ...mapGetters(['getToken', 'getUserData', 'getAllPosts']),
    },

    methods: {
        getAllPost() {
            axios.get('http://localhost:8000/api/posts').then((response) => {
                this.$store.dispatch('postByCategory', response.data.posts);
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
        },
        checkToken() {
            if(this.getToken != null && this.getToken != undefined && this.getToken != '') {
                this.$store.dispatch('userStatus', 'true');
            } else {
                this.$store.dispatch('userStatus', 'false');
            }
        }

    },

    mounted() {
        this.getAllPost();
        this.getAllCategories();
        this.checkToken();
        this.posts = this.getAllPosts;

    },

  

    
}