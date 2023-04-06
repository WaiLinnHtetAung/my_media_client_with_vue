    import NavBar from '../views/NavBar.vue';
    import axios from 'axios';
    import { mapGetters } from 'vuex';
    export default {
        name : 'LoginPage',
        components : {NavBar},
        data : () => ({
            categories : [],
            userData : {
                email : '',
                password : '',
            },
            loginStatus : true,
        }),
        computed: {
            ...mapGetters(['getToken', 'getUserData']),
        },
        methods : {
             getAllCategories() {
                axios.get('http://localhost:8000/api/categories').then((response) => {
                    this.categories = response.data.categories;
                })
            }, 
            login() {
                axios.post('http://localhost:8000/api/login', this.userData).then((response) => {
                    if(response.data.token != null) {
                        this.storeUserData(response);
                        this.$router.push('/homePage')
                    } else {
                        this.loginStatus = false;
                        console.log('login error');
                    }
                })
            },
            storeUserData(data) {
                this.$store.dispatch('setToken', data.data.token);
                this.$store.dispatch('setUserData', data.data.user);
                this.$store.dispatch('userStatus', 'true');
            },
            
        },
        mounted() {
            this.getAllCategories();
        }
    }