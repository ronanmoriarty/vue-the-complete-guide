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
                <hr>
                <button class="btn btn-primary" type="submit" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users" :key="user.email">{{ user.username }} - {{ user.email }}</li>
                </ul>
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
                },
                users: [],
                resource: {}
            };
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         console.log(response);
                //     }, error => {
                //         console.log(error);
                //     });
                this.resource.save({}, this.user);
            },
            fetchData() {
                this.$http.get('data.json')
                    .then(response => {
                        return response.json();
                    }).then(data => {
                        const resultArray = [];
                        for (const key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }
        },
        created() {
            this.resource = this.$resource('data.json');
        }
    }
</script>

<style>
</style>
