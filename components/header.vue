<template>
    <section class="flex center fixed-top vw-w-10 h-1 bg-white boxshadow-md" >
        <div class="w-3 h-10 flex center left">
            <i class="el-icon-discover icon-2 color-purple-blue m-auto m-left-4 m-right-4"></i>
            <h1 class="color-purple-blue center font-1-75">
                Paradise <span class="color-baby-blue">{{ user.username }}</span>
            </h1>
        </div>
        <div class="w-4 h-10">
            <el-menu class="flex h-10 px-15rem border-0" mode="horizontal">
                <el-menu-item class="h-10 flex center hover_bg-gold cursor-pointer">
                    <i class="el-icon-hot-water p-2-percent px-2rem icon-2 color-coal justify hover_white cursor-pointer"></i>
                </el-menu-item>
                <el-menu-item class="h-10 flex center hover_bg-flaminco cursor-pointer">
                    <i class="el-icon-dessert p-2-percent px-2rem icon-2 color-coal hover_white justify cursor-pointer"></i>
                </el-menu-item>
                <el-menu-item class="h-10 flex center hover_bg-nature cursor-pointer">
                    <i class="el-icon-dish p-2-percent px-2rem icon-2 color-coal hover_white justify cursor-pointer"></i>
                </el-menu-item>
                <el-menu-item class="h-10 flex center hover_bg-purple-blue cursor-pointer">
                    <nuxt-link to="/exit">
                        <i class="el-icon-goblet-square-full p-2-percent px-2rem icon-2 color-coal hover_white justify cursor-pointer"></i>
                    </nuxt-link>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="w-3 h-10">
            <el-menu class="flex h-10 right px-15rem border-0" mode="horizontal">
                <el-menu-item class="h-10 flex center cursor-pointer" @click="exit">
                    <i class="el-icon-right p-2-percent px-2rem icon-2 color-coal justify hover_flaminco cursor-pointer"></i>
                </el-menu-item>
            </el-menu>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            user: Object,
        },
        created() {
        },
        methods: {
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
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.error(error);
                });
            },
        }
    }
</script>

<style>

</style>