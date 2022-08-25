<template>
  <body class="min-h-screen bg-gray-100">
    <div class="login">
      <h1 class="text-center text-Co2 md:text-6xl text-5xl font-light py-32">
        استعادة كلمة المرور
      </h1>

      <!-- login box -->

      <div class="flex flex-col justify-center items-center">
        <div>
          <label for="user" class="float-right text-3xl text-Co1"
            >اعد كتابة كلمة المرور الجديدة</label
          >

          <div class="">
            <input
              v-model="password"
              :type="passwordType"
              placeholder="**************"
              class="hover:border-Co1 my-5 focus:border-Co1 border-4 text-4xl p-8 sm:px-16 px-3 rounded-xl text-right indent-3 outline-none"
            />
            <div>
              <button
                class="relative bottom-28 left-9"
                @click="switchButt"
                type="password"
              >
                <span @click="toggleShow" class="">
                  <img v-if="showPassword" src="@/assets/photos/view.png" />
                  <img
                    v-if="!showPassword"
                    src="@/assets/photos/invisible.png"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <!-- // -->
        <div>
          <label for="user" class="float-right text-3xl text-Co1"
            >اعد كتابة كلمة المرور الجديدة</label
          >

          <div class="">
            <input
              v-model="password2"
              :type="passwordType2"
              placeholder="**************"
              class="hover:border-Co1 my-5 focus:border-Co1 border-4 text-4xl p-8 sm:px-16 px-3 rounded-xl text-right indent-3 outline-none"
            />
            <div>
              <button
                class="relative bottom-28 left-9"
                @click="switchButt2"
                type="password"
              >
                <span @click="toggleShow2" class="">
                  <img v-if="showPassword2" src="@/assets/photos/view.png" />
                  <img
                    v-if="!showPassword2"
                    src="@/assets/photos/invisible.png"
                  />
                </span>
              </button>
            </div>
          </div>

          <input
            class="bg-Co2 hover:bg-cyan-800 duration-75 rounded-xl p-8 w-full cursor-pointer text-white text-4xl mb-7"
            type="submit"
            value="تغيير كلمة المرور"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      showPassword2: false,
      passwordType: "password",
      passwordType2: "password",
      password: "",
      password2: "",
    };
  },

  methods: {
    isRequired(value) {
      return value ? true : "This field is required";
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow2() {
      this.showPassword2 = !this.showPassword2;
    },

    switchButt() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    switchButt2() {
      this.passwordType2 =
        this.passwordType2 === "password" ? "text" : "password";
    },
  },
};
</script>

<style></style>
