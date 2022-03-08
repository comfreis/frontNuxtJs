<template>
  <section class="vw-w-10 vh-h-10 p-auto flex center bg-cadense-blue">
    <Header :user="formLogin"/>
      <div class="m-auto p-10 h-auto min-h-4 inline-block">
        <h1 class="w-10" >
          Atividades!
        </h1>
      </div>
  </section>
</template>

<script>
  import Header from '../../components/header.vue';

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
    layout (context) {
      return 'default'
    },
    data() {
      return {
        text: '',
        formLogin: {
          id: '',
          userId: '',
          username: '',
          password: '',
          mail: '',
          isAdmin: false,
          login: false,
        },
        allData: null,
      }
    },
    components: {
      Header,
    },
    created() {
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
            this.mail = response[0].mail;
            this.password = response[0].password;
          }).catch((error) => {
            alert(error);
          });
      },
      cadastreUser(token, pass) {
        if (pass.length < 5) {
          alert('Senha menor que o tamanho permitido, verifique novamente.');
        } else if (pass.length > 5 && token.length != null) {
          let data = {
              'name': this.formLogin.name,
              'mail': this.formLogin.mail,
              'password': this.formLogin.password
          }

          let config = {
              method: 'POST',
              url: 'POST/newUser',
              headers:{},
              data: data
          }
          
          this.$axios(config)
            .then(async (response) => {
              if (token === response.userId && pass === response.password){
                alert('New user cadastred!');
              }
            }).catch((error) => {
              alert(error);
            });
        }
      },
    }
  }
</script>
