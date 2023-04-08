<template>
    <NavBar :categories='categories' />
    <!--  Recent Articles start -->
        <div class="recent-articles">
            <div class="container">
                <div class="recent-wrapper">
                    <!-- section Tittle -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-tittle mb-30"></div>
                        </div>
                    </div>
                    <div class="row" v-if="$store.state.userStatus == 'true'">
                        <div class="recent-active dot-style col-md-6 col-lg-4 col- dot-style"  v-for="(post,index) in posts" :key="index">
                            <div class="single-recent mb-100" @click="newsDetail(post.id)" style="cursor:pointer;" title="Read details">
                                <div class="what-img" style="width:20rem; height: 15rem;">
                                    <img :src="post.media[0] ? post.media[0].original_url : ''" style="width:100%; height:100%;"  alt="" />
                                </div>
                                <div class="what-cap">
                                    <span class="color1">{{post.title}}</span>
                                    
                                    <h4>
                                        <a href="#">{{post.description}}</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-5 py-5" v-else>
                        <h6 class="text-center">You must login first</h6>
                    </div>
                </div>
            </div>
        </div>
        <!--Recent Articles End -->
        <!--Start pagination -->
        <!-- <div class="pagination-area pb-45 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="#"><span class="flaticon-arrow roted"></span
                      ></a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">01</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">02</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">03</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><span class="flaticon-arrow right-arrow"></span
                      ></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- End pagination  -->
</template>

<script src="../js/homePage.js"></script>


