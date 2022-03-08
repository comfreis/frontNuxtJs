<template>
  <section class="vw-w-10 vh-h-10 p-auto flex center">
    <el-form class="w-4 p-2-percent m-auto border-radius-10 bg-white boxshadow-md">
      <el-header class="w-10 min-h-4 p-1 justify color-coal">
        <!-- Header content -->
        <h1 align="center">
          Login
        </h1>
        <hr class="bg-coal border-0 p-1 mt-4-percent mb-1-percent">
      </el-header>
      
      <el-form-item label="User Id">
        <el-input class="color-coal" prefix-icon="el-icon-user" v-model="formLogin.username" placeholder="User name" />
      </el-form-item>
      
      <el-form-item label="Password">
        <el-input class="color-coal" type="password" prefix-icon="el-icon-lock" v-model="formLogin.password" placeholder="Password" />
      </el-form-item>

      <el-form-item class="col w-10 mt-6-percent" size="normal">
        <el-input class="w-4 m-auto m-right-4 p-0 border-radius-10 bg-purple-blue hover_bg-cadense-blue boxshadow-md singin hover_singin" prefix-icon="el-icon-key" type="button" @click="getApiLogin(formLogin.username, formLogin.password)" value="Sing In" />
        <el-input class="w-4 m-auto m-left-4 p-0 border-radius-10  hover_bg-cadense-blue boxshadow-md hover_singup" prefix-icon="el-icon-user" type="button" @click="singUp = true" value="Sing Up" />
      </el-form-item>

      <el-dialog
        v-model="singUp"
        :visible.sync="singUp"
        width="30%"
        :before-close="handleClose"
      >
        <el-form class="w-4 p-2-percent m-auto border-radius-10 bg-white boxshadow-md">
          <el-header class="w-10 min-h-4 p-1 justify color-coal">
            <!-- Header content -->
            <h1 align="center">
              Sing Up
            </h1>
            <hr class="bg-coal border-0 p-1 mt-4-percent mb-1-percent">
          </el-header>
          
          <el-form-item label="User Id">
            <el-input class="color-coal" prefix-icon="el-icon-user" v-model="formLogin.username" placeholder="User name" />
          </el-form-item>
          
          <el-form-item label="Password">
            <el-input class="color-coal" type="password" prefix-icon="el-icon-lock" v-model="formLogin.password" placeholder="Password" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="singUp = false">Cancel</el-button>
            <el-button type="primary" @click="register"
              >Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>

    </el-form>
  </section>
</template>

<script>
  var qs = require('qs');
  var data = qs.stringify({

  });
  var config = {
    method: 'GET',
    url: 'GET/',
    headers: {
      
    },
    data: data
  }

  export default {
    /* name: 'IndexPage',
    layout (context) {
      return 'default'
    }, */
    data() {
      return {
        text: '',
        formLogin: {
          id: '',
          userId: '',
          username: '',
          fullname: '',
          password: '',
          mail: '',
          asAdmin: false,
          login: false,
        },
        allData: null,
        dataUser: null,
        singUp: false,
      }
    },
    created() {
      //this.userIsOnly()
    },
    methods: {
      async getApiAllData() {
        this.$axios(config)
          .then((response) => {
            this.allData = response.data;
          }).catch((error) => {
            alert(error);
          });
      },
      async getApiId(index) {
        this.$axios.$get(`GET/id/${index}`)
          .then((response) => {
            this.userId = response[0].userId;
            this.username = response[0].username;
            this.fullname = response[0].fullname;
            this.mail = response[0].mail;
            this.password = response[0].password;
            this.asAdmin = response[0].asAdmin;
          }).catch((error) => {
            alert(error);
          });
      },
      getApiLogin(username, pass) {
        this.$axios.$get(`GET/username/${username}`)
          .then((response) => {
            var res = response;
            this.allData = [res];

            if (pass.length < 5) {
              alert('Senha menor que o tamanho permitido, verifique novamente.');
            } else if (pass == this.allData[0].password && username == this.allData[0].username) {
              this.postApiLogin(this.allData);
            } else{
              alert('Error: Network undefined 404');
            }

          }).catch((error) => {
            alert(error);
          });
      },
      postApiLogin(data) {
        let info = {
          'userId': data[0].userId,
          'username': data[0].username,
          'logged': 1,
          'sessionExit': '',
          'admin': data[0].asAdmin
        }

        let configLogin = {
          method: 'POST',
          url: 'POST/login',
          headers:{},
          data: info
        };
          
        this.$axios(configLogin)
          .then((response) => {
            if(response.data == 1){
              alert(`Secesso ${data[0].username}!`);
            
              this.formLogin.login = true;
              this.$router.push(`home/?${data[0].userId}`)
            }

          }).catch((error) => {
            alert(error);
          });
      },
      userIsOnly(token){
        this.$axios.$get(`GET/userLoged/${token}`)
          .then((response) => {
            
            if (response.logged === 1){
              this.formLogin.login = true;
              this.formLogin.id = response.id;
              this.formLogin.userId = '';
              this.formLogin.name = response.name;
              this.formLogin.allData = [response];
            }else{
              this.formLogin.login = false;
              this.formLogin.id = '';
              this.formLogin.userId = '';
              this.formLogin.name = '';
              this.formLogin.mail = '';
              this.formLogin.password = '';
            }

          }).catch((error) => {
            console.error(error);
          });
      },
      handleClose(done) {
        this.$confirm('Tem certeza que deseja fechar este dialogo?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      register(){

      }
    }
  }
</script>

<style>
  input[type="button"]{
    cursor: pointer;
    border: 0px;
    background-color: transparent;
  }
  .hover_singup:hover input[type="button"]{
    color: white !important;
  }
  .singin input[type="button"]{
    color: bisque !important;
  }
  .hover_singin:hover input[type="button"]{
    color: white !important;
  }
</style>