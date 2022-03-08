<template>
    <section class="flex center fixed-top vw-w-10 h-1 bg-white boxshadow-md" >
        <div class="w-2 h-10 flex center left">
            <i class="el-icon-discover icon-2 color-purple-blue m-auto m-left-4 m-right-4"></i>
            <h2 class="color-purple-blue center">
                Paradise <span class="color-baby-blue">{{ user.username }}</span>
            </h2>
        </div>
        <div class="w-6 h-10 flex center">
            <el-menu class="flex h-10 px-15rem border-0" mode="horizontal" >
                <el-button class="h-10 flex center border-0 border-radius-0 hover_bg-baby-blue cursor-pointer" @click="drawer = true">
                    <i class="el-icon-search p-2-percent px-2rem icon-2 color-coal hover_white justify cursor-pointer"></i>
                </el-button>
                <span v-for="(item, i) in classes" :key="i">
                    <el-menu-item :class="item" @click="page(i, user.userId)">
                        <i :class="icones[i]"></i>
                    </el-menu-item>
                </span>
            </el-menu>
        </div>
        <div class="w-2 h-10">
            <el-menu class="flex h-10 right px-15rem border-0" mode="horizontal">
                <el-menu-item class="h-10 flex center cursor-pointer" @click="exit">
                    <i class="el-icon-right p-2-percent px-2rem icon-2 color-coal justify hover_flaminco cursor-pointer"></i>
                </el-menu-item>
            </el-menu>
        </div>
        <el-drawer
            :visible.sync="drawer"
            :direction="direction"
            :with-header="false"
        >
            <!-- the method confirm before clique :before-close="handleClose" -->
            <el-form class="w-9 h-auto p-2-percent m-5-percent border-radius-10 bg-white boxshadow-md">
                <el-header class="w-10 min-h-2 p-1 justify color-coal">
                    <!-- Header content 
                    <h1 align="center">
                    Login
                    </h1>
                    -->
                    <hr class="bg-coal border-0 p-1 mt-4-percent mb-1-percent">
                </el-header>
                
                <el-form-item label="User Id">
                    <el-input class="color-coal" prefix-icon="el-icon-user" v-model="user.username" placeholder="User name" />
                </el-form-item>
                
                <el-form-item label="Password">
                    <el-input class="color-coal" type="password" prefix-icon="el-icon-lock" v-model="user.password" placeholder="Password" />
                </el-form-item>
                
                <el-form-item label="User Id">
                    <el-input class="color-coal" prefix-icon="el-icon-user" v-model="user.username" placeholder="User name" />
                </el-form-item>
                
                <el-form-item label="Password">
                    <el-input class="color-coal" type="password" prefix-icon="el-icon-lock" v-model="user.password" placeholder="Password" />
                </el-form-item>
                
                <el-form-item label="User Id">
                    <el-input class="color-coal" prefix-icon="el-icon-user" v-model="user.username" placeholder="User name" />
                </el-form-item>
                
                <el-form-item label="Password">
                    <el-input class="color-coal" type="password" prefix-icon="el-icon-lock" v-model="user.password" placeholder="Password" />
                </el-form-item>

                <el-form-item class="flex center" size="normal">
                    <el-button class="m-auto p-5 px-4rem boxshadow-sm" type="primary" @click="getApiLogin(user.username, user.password)" square>
                        <i class="el-icon-check"></i>
                    </el-button>
                </el-form-item>
                </el-form>
        </el-drawer>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                classes: {
                    0: 'h-10 flex center hover_bg-narrow-blue cursor-pointer',
                    1: 'h-10 flex center hover_bg-purple-blue cursor-pointer',
                    2: 'h-10 flex center hover_bg-cadense-blue cursor-pointer',
                    3: 'h-10 flex center hover_bg-baby-blue cursor-pointer',
                },
                icones: {
                    0: 'el-icon-document p-2-percent px-15rem icon-2 color-coal justify hover_white cursor-pointer',
                    1: 'el-icon-folder p-2-percent px-2rem icon-2 color-coal hover_white justify cursor-pointer',
                    2: 'el-icon-guide p-2-percent px-2rem icon-2 color-coal hover_white justify cursor-pointer',
                    3: 'el-icon-postcard p-2-percent px-15rem icon-2 color-coal hover_white justify cursor-pointer',
                },
                drawer: false,
                direction: 'ltr',
            }
        },
        props: {
            user: Object,
        },
        created() {
        },
        methods: {
            /* handleClose(done) {
                this.$confirm('Are you sure you want to close this?')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            }, */
            page(item, userid){
                console.log(item)
                if(item == 0){
                    window.location.href = `/forms/?${userid}`
                }
                else if(item == 1){
                    window.location.href = `/files/?${userid}`
                }
                else if(item == 2){
                    window.location.href = `/activities/?${userid}`
                }
                else if(item == 3){
                    window.location.href = `/admin/?${userid}`
                }
            },
            exit(){
                
                let info = {
                    'userId': this.user.userId,
                    'username': this.user.username,
                    'logged': 0,
                    'sessionExit': '',
                    'admin': this.user.asAdmin
                }

                let config = {
                    method: 'POST',
                    url: `POST/exit/${this.user.userId}`,
                    headers:{},
                    data: info
                };
            
                this.$axios(config)
                .then((response) => {
                    window.location.href = `/exit/?${this.user.userId}`;
                })
                .catch((error) => {
                    console.error(error);
                });
            },
        }
    }
</script>

<style>
.v-modal{
    background: none !important;
    width: auto !important;
    height: auto !important;
    opacity: auto !important;
}
</style>