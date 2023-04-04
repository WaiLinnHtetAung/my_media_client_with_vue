<template>
    <header>
        <!-- Header Start -->
        <div class="header-area">
            <div class="main-header">
                <div class="header-top black-bg d-none d-md-block">
                    <div class="container">
                        <div class="col-xl-12">
                            <div class="row d-flex justify-content-between align-items-center">
                                <div class="header-info-left">
                                    <ul>
                                        <li>
                                            <img src="assets/img/icon/header_icon1.png" alt="" />34ºc, Sunny
                                        </li>
                                        <li>
                                            <img src="assets/img/icon/header_icon1.png" alt="" />Tuesday, 18th June, 2019
                                        </li>
                                    </ul>
                                </div>
                                <div class="header-info-right">
                                    <ul class="header-social">
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-mid d-none d-md-block">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <!-- Logo -->
                            <div class="col-xl-3 col-lg-3 col-md-3">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-10 col-lg-10 col-md-12 header-flex">
                                <!-- sticky -->
                                <div class="sticky-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                                <!-- Main-menu -->
                                <div class="main-menu d-none d-md-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a class="text-underlined" style="cursor: pointer;" @click="$router.push('/')">Home</a></li>
                                            <li><a href="#">Category</a>
                                                <ul class="submenu">
                                                    <li v-for="(category,index) in categories" :key="index" @click="postByCategory(category.id)"><a href="#">{{category.title}}</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="latest_news.html">Latest News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li>
                                                <a href="#">Pages</a>
                                                <ul class="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="details.html">Categori Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="text-underlined" style="cursor: pointer;" @click="$router.push('/login')">Login</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div class="col-xl-2 col-lg-2 col-md-2">
                                <div class="input-group">
                                    <input type="text" class="form-control" @keyup.enter="search()" v-model="searchKey">
                                    <button class="text-white bg-dark px-3 rounded-end" @click="search()"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>

                            <!-- Mobile Menu -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'NavBar',
        props : ['categories'],

        data : () => ({
            searchKey : '',
        }),

        methods : {
            search() {
                let key = {key : this.searchKey};

                axios.post('http://localhost:8000/api/post-search', key).then((response) => {

                    this.$router.push({
                        name : 'homePage',
                        query : {
                            searchedPosts : response.data.posts
                        },
                    });
                })
            }, 

            postByCategory(id) {
                axios.post('http://localhost:8000/api/post-by-category', {id : id}).then((response) => {
                    console.log(response)
                    this.$router.push({
                        name : 'homePage',
                        query : {
                            posts : 'this is post',
                        }
                    });
                })
            }
            
        }

    }
</script>

