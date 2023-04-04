<template>
    <div>
        <NavBar :categories="categories"/>
        <div style="max-width: 700px; margin: auto;">
            <div class="card my-5 p-3 shadow-sm">
                <form action="" class="py-3">
                <div class="row">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" class="form-control" v-model="userData.email">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" class="form-control" v-model="userData.password">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-1"><a type="button" @click="login()" class="btn btn-sm btn-success">Submit</a></div>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script src="../js/login.js"></script>
