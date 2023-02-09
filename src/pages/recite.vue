<script setup lang="ts">
defineOptions({
  name: 'Recite',
})

const router = useRouter()
const count = ref(0)
const question = ref()
// const answer = ref('')
const answer_num = ref(0)
const input = ref('')

const text = [
  '东皋薄暮望 徙倚欲何依 树树皆秋色 山山唯落晖',
  '树树皆秋色 山山唯落晖',
  '牧人驱犊返 猎马带禽归',
  '相顾无相识 长歌怀采薇',
]

// const blockText = () => {
//   const data = text[count.value]
//   const text_split = data.split(' ')
//   answer_num.value = Math.floor(Math.random() * 2)
//   answer.value = text_split[answer_num.value]
//   // text_split[answer_num.value] = ''.padEnd(answer.value.length * 2, '_')
//   return text_split
// }

const get = () => {
  const data = text[count.value]
  const text_split = data.split(' ')
  answer_num.value = Math.floor(Math.random() * text_split.length) + 1
  question.value = text_split
}

const submit = () => {
  input.value = ''
  if (count.value < text.length - 1) {
    count.value++
    get()
  }
  else {
    router.push('/')
  }
}

get()
</script>

<template>
  <div>
    <div flex items-center justify-between>
      <div flex-1>
        <button text-2xl flex items-center text-zinc-500 bg-white dark:bg-zinc-800 rounded-full p-2 @click="router.push('/')">
          <div i-carbon-arrow-left />
        </button>
      </div>
      <div text-2xl font-bold>
        背诵
      </div>
      <div flex-1 />
    </div>
    <div mt-15>
      <div font-bold text-4xl flex items-center justify-center flex-wrap gap-5>
        <div v-for="(item, i) in question.slice(0, answer_num - 1)" :key="i">
          {{ item }}
        </div>
        <div>
          <input
            v-model="input"
            type="text"
            w-70
            placeholder="请填写"
            outline="none active:none"
            border="2 zinc-300 dark:zinc-700 focus:blue-500"
            text-2xl
            px-2
            py-1 bg-transparent
            placeholder-zinc-400
            dark:placeholder-zinc-700
            rounded-md
            @keyup.enter="submit()"
          >
        </div>
        <div v-for="(item, i) in question.slice(answer_num, question.length)" :key="i">
          {{ item }}
        </div>
      </div>
      <!-- {{ question }} -->
      <button flex items-center mx-auto gap-2 bg-blue-500 px-5 py-2 text-white rounded-full text-2xl mt-10 @click="submit()">
        <!-- <div i-carbon-checkmark /> -->
        提交
        <div i-carbon-send-filled />
      </button>
    </div>
    <div mt-5 border-2 border-zinc-300 p-5 rounded-xl>
      <div text-2xl>
        <div>输入：{{ input }}</div>
        <div>答案：{{ question[answer_num - 1] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
