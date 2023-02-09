<template>
  <main font-sans p-3 text="gray-700 dark:gray-200" bg-gray-100 dark:bg-zinc-900 h-full>
    <router-view v-slot="{ Component }">
      <Transition mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    <TheFooter />
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
