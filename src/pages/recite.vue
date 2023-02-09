<script setup lang="ts">
defineOptions({
  name: 'Recite',
})

const router = useRouter()
const count = ref(0)
const question = ref()
// const answer = ref('')
const answer_num = ref(0)
const answer_show = ref(false)
const answer_show_button = ref(false)
const answer_show_status = ref(false)
const next_button = ref(false)
const input = ref('')

const text = [
  '东皋薄暮望 徙倚欲何依 树树皆秋色 山山唯落晖',
  '树树皆秋色 山山唯落晖',
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
  // 判断答案
  if (input.value === question.value[answer_num.value - 1]) {
    answer_show_button.value = false
    answer_show.value = true
    answer_show_status.value = true
    next_button.value = true
  }
  else {
    answer_show_button.value = true
    answer_show_status.value = true
  }
}

const check = (text: string, i: number) => {
  return question.value[answer_num.value - 1]
    .split('')
    .find((t: string) => t === text)
}

const next = () => {
  answer_show_button.value = false
  answer_show.value = false
  answer_show_status.value = false
  next_button.value = false
  count.value += 1
  input.value = ''
  if (count.value <= text.length - 1)
    get()
  else
    router.push('/')
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
      <div mt-10>
        <button v-if="!next_button" flex items-center mx-auto gap-2 bg-blue-500 px-5 py-2 text-white rounded-full text-2xl @click="submit()">
          <!-- <div i-carbon-checkmark /> -->
          提交
          <div i-carbon-send-filled />
        </button>
        <button v-else flex items-center mx-auto gap-2 bg-emerald-500 px-5 py-2 text-white rounded-full text-2xl @click="next()">
          <!-- <div i-carbon-checkmark /> -->
          下一题
          <div i-carbon-send-filled />
        </button>
        <button v-if="answer_show_button" flex items-center mx-auto gap-2 bg-orange-500 px-5 py-2 text-white rounded-full text-2xl mt-5 @click="answer_show = true">
          <!-- <div i-carbon-checkmark /> -->
          看答案
          <div i-carbon-ai-results />
        </button>
      </div>
    </div>
    <div mt-5 p-5 rounded-xl border-2 border-zinc-300 flex justify-between items-center>
      <div text-2xl>
        <div>
          输入：
          <span v-for="(item, i) in input" :key="i" :class="check(item, i) ? 'text-emerald-600' : 'text-red-600'">{{ item }}</span>
        </div>
        <div>答案： {{ answer_show ? question[answer_num - 1] : '提交后查看' }}</div>
      </div>
      <div v-if="answer_show_status" text-6xl font-bold>
        <div v-if="input === question[answer_num - 1]" text-emerald-500>
          😀正确
        </div>
        <div v-else text-red-500>
          😔错误
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
