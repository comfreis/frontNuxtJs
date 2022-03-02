
      postUserIsOnly() {
        var query = window.location.search.substring(1);
        var token = query.split('/?');

        let data = {
          'userId': token,
          'name': this.formLogin.name,
          'logged': 1,
        }

        let config = {
          method: 'POST',
          url: 'POST/login',
          headers:{},
          data: data
        }
          
        this.$axios(config)
          .then(async (response) => {
            if (token === response.userId && pass === response.password){
              alert('Login realizado com sucesso!');
              
              //this.userIsOnly();
            }
          }).catch((error) => {
            alert(error);
          });
      },
      userIsOnly(){
        var query = window.location.search.substring(1);
        var token = query.split('/?');

        this.$axios.$get(`GET/userLoged/${token}`)
          .then((response) => {
            
            if (response.logged == 1){
              this.formLogin.login = true;
              this.formLogin.id = response.id;
              this.formLogin.userId = token;
              this.formLogin.name = response.name;
              this.formLogin.mail = response.mail;
              this.formLogin.password = response.password;
              this.formLogin.asAdmin = response.asAdmin;
            }else{
              this.formLogin.login = false;
              this.formLogin.id = '';
              this.formLogin.userId = '';
              this.formLogin.name = '';
              this.formLogin.mail = '';
              this.formLogin.password = '';
              this.formLogin.asAdmin = '';
            }

          })
          .catch((error) => {
            console.error(error);
          });
      },