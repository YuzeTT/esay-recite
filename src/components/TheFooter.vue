<template>
  <nav text-md inline-flex gap-2 absolute bottom-0 right-0 p-1>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
    <div>v0.1.3</div>
  </nav>
</template>
