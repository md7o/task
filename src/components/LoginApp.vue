<template>
  <body class="min-h-screen bg-gray-100">
    <div class="login py-32">
      <h1 class="text-center text-Co1 md:text-7xl text-5xl font-bold pb-32">
        خدمات ما بعد البيع
      </h1>

      <!-- login box -->

      <div
        class="bg-white flex flex-col justify-center items-center 2xl:w-2/5 md:w-10/12 p-8 mx-auto py-24 rounded-3xl"
      >
        <div class="flex justify-center my-8 pb-12">
          <img src="@/assets/photos/logo.png" width="300" alt="logo" />
        </div>

        <div class="">
          <p class="text-center text-Co2 md:text-5xl text-3xl font-bold mb-32">
            قم بتسجيل الدخول الى حسابك واطلب خدمة
          </p>
        </div>

        <div>
          <label for="user" class="float-right text-4xl text-Co1"
            >اسم المستخدم/ رقم الجوال</label
          >

          <div class="rtl">
            <input
              v-model="comment"
              type="text"
              placeholder="(050) - 000 -0000"
              id="user"
              class="rtl:mt-2 hover:border-Co1 my-5 focus:border-Co1 border-4 text-4xl p-7 sm:px-16 px-3 rounded-xl text-right indent- indent-3 outline-none mb-16"
            />
          </div>
        </div>
        <!-- // -->
        <div>
          <label for="user" class="float-right text-4xl text-Co1"
            >كلمة المرور</label
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

          <input
            class="bg-Co2 hover:bg-cyan-800 duration-75 rounded-xl p-8 w-full cursor-pointer text-white text-4xl mb-7"
            type="submit"
            value="دخول"
            name=""
            id=""
          />
          <div class="flex justify-between">
            <a href="/forget" class="underline text-Co2 text-2xl"
              >نسيت كلمة المرور؟</a
            >
            <div class="flex justify-center items-cente">
              <label for="member" class="text-2xl text-Co2">تذكرني</label>
              <input
                type="checkbox"
                id="member"
                class="w-9 h-9 ml-2 accent-Co2"
              />
            </div>
          </div>
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
      passwordType: "password",
      password: "",
    };
  },

  methods: {
    isRequired(value) {
      return value ? true : "This field is required";
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    switchButt() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
  },
};
</script>

<style></style>
