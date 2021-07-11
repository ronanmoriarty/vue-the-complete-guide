<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">User name:</label>
                    <input type="text" id="username" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" type="submit" @click="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                }
            };
        },
        methods: {
            submit() {
                this.$http.post('https://vuejs-http-180c1-default-rtdb.europe-west1.firebasedatabase.app/data.json', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>
</style>
