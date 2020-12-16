<template>
  <div id="app">
    <v-app>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
          <v-tabs v-model="tab" show-arrows icons-and-text dark grow>
            <v-tabs-slider color="purple darken-4"></v-tabs-slider>
            <v-tab v-for="(tab, i) in tabs" :key="i">
              <v-icon large>{{ tab.icon }}</v-icon>
              <div class="caption py-1">{{ tab.name }}</div>
            </v-tab>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="loginForm">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="username"
                          label="Логин"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'eye' : 'eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Пароль"
                          hint="Минимально 8 символов"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6" xsm="12">
                        <p v-if="showMessage" class="danger">
                          Incorrect login or password
                        </p>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                        <v-btn x-large block color="success" @click="login">
                          Войти
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import * as auth from "../api/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      tabs: [{ name: "Войти", icon: "mdi-account" }],
      dialog: true,
      show1: false,
      tab: 0,
      showMessage: false,
      isLogged: false,
    };
  },

  methods: {
    async login(e) {
      this.submitted = true;
      this.isLogged = await auth.login(this.username, this.password);
      if (this.isLogged) this.$router.push("/book");
      else this.showMessage = true;
    },
  },
};
</script>