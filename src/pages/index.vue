<script setup lang="ts" generic="T extends any, O extends any">
import { useStorage } from '@vueuse/core'
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
const nowTime = new Date()
const h = nowTime.getHours()
const data_text = '东皋薄暮望 徙倚欲何依 树树皆秋色 山山唯落晖\n牧人驱犊返 猎马带禽归  相顾无相识  长歌怀采薇\n昔人已乘黄鹤去 此地空余黄鹤楼  黄鹤一去不复返 白云千载空悠悠'
const data = useStorage('data', data_text)
// @unocss-include
const time_list = [
  ['夜已深，注意休息哦！', 'i-carbon-haze-night'], // 0,1,2
  ['晚安全世界，快去睡觉吧！', 'i-carbon-sprout'], // 3,4,5
  ['早安呀！据说早上最适合记忆呢~', 'i-carbon-sunrise'], // 6,7,8
  ['早安，一日之计在于晨！', 'i-carbon-partly-cloudy'], // 9,10,11
  ['今日已过半~', 'i-carbon-flag'], // 12,13,14
  ['下午好，继续加油哇！', 'i-carbon-face-wink'], // 15,16,17
  ['晚上好呀！掐指一算现在适合复习！', 'i-carbon-face-cool'], // 18,19,20
  ['累了一天吧，该睡觉咯~', 'i-carbon-mostly-cloudy-night'], // 21,22,23
]

// 获取问好消息
const getMsg = () => {
  switch (h) {
    case 12:
      return ['记得按时吃饭哦！', 'i-carbon-service-desk']
    default:
      return time_list[Math.floor(h / 3)]
  }
}
</script>

<template>
  <div>
    <div flex items-center text-xl gap-2 p-3 rounded-md class="bg-blue-600/20">
      <div :class="getMsg()[1]" text-blue-500 />
      <div>{{ getMsg()[0] }}</div>
    </div>
    <div my-15 text-center>
      <button w-50 h-20 bg-blue-500 rounded-xl text-white text-4xl @click="router.push('/recite')">
        开始背诵
      </button>
    </div>

    <div mt-5>
      <div text-xl mb-1>
        背诵内容
      </div>
      <div mb-2 text-zinc-500>
        一行一片段，空格分割内容
      </div>
      <textarea
        v-model="data" w-full h-60 bg-white dark:bg-zinc-800 p-3 rounded-md placeholder="请填写"
        outline="none active:none"
        border="2 zinc-300 dark:zinc-700 focus:blue-500"
      />
    </div>
  </div>
</template>
