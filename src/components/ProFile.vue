<template>
  <body class="min-h-screen bg-gray-100">
    <div class="pb-32">
      <h1 class="text-center text-Co2 md:text-7xl text-5xl py-32">
        بوابة خدمات أرباح طيبة
      </h1>
      <div
        class="hlao flex justify-between items-center bg-white md:w-Lxll w-Mxll md:h-40 h-32 rounded-3xl mx-auto p-8"
      >
        <p class="md:text-6xl text-4xl text-Co2 font-light md:pl-20">
          مرحبا بك <span class="text-Co1 font-semibold">{{ UserName }}</span>
        </p>
        <img class="md:w-28 w-20" src="@/assets/photos/user.png" alt="user" />
      </div>
      <div class="my-36">
        <!-- box 1 -->
        <div
          class="flex justify-between items-center cursor-pointer hover:opacity-80 duration-100 bg-white md:w-Lxll w-Mxll md:h-40 h-32 rounded-3xl mx-auto p-8"
        >
          <div>
            <img
              class="md:w-12 w-10"
              src="@/assets/photos/left-arrow.png"
              alt=""
            />
          </div>
          <div class="flex justify-center items-center">
            <p class="md:text-5xl font-bold text-4xl text-Co2 md:pl-20 pr-8">
              اطلب خدمة
            </p>
            <img
              class="md:w-20 w-18"
              src="@/assets/photos/hand.png"
              alt="user"
            />
          </div>
        </div>
        <!-- box 2 -->
        <div
          class="flex justify-between items-center cursor-pointer hover:opacity-80 duration-100 bg-white md:w-Lxll w-Mxll md:h-40 h-32 rounded-3xl mx-auto p-8 my-9"
        >
          <div>
            <img
              class="md:w-12 w-10"
              src="@/assets/photos/left-arrow.png"
              alt=""
            />
          </div>
          <div class="flex justify-center items-center">
            <p class="md:text-5xl font-bold text-4xl text-Co2 md:pl-20 pr-8">
              ملفاتي
            </p>
            <img
              class="md:w-20 w-18"
              src="@/assets/photos/folder.png"
              alt="user"
            />
          </div>
        </div>
        <!-- box 3 -->
        <div
          class="flex justify-between items-center cursor-pointer hover:opacity-80 duration-100 bg-white md:w-Lxll w-Mxll md:h-40 h-32 rounded-3xl mx-auto p-8"
        >
          <div></div>
          <div class="flex justify-center items-center">
            <p class="md:text-5xl font-bold text-4xl text-Co2 md:pl-20 pr-8">
              تسجيل الخروج
            </p>
            <img
              class="md:w-20 w-18"
              src="@/assets/photos/logout.png"
              alt="user"
            />
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
      UserName: "محمد احمد",
    };
  },
};
</script>

<style></style>
