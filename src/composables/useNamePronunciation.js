import { ref, computed } from '@vue/composition-api'

export default function () {
  const currentIndex = ref(0)
  const pronunciations = [
    'Huang Xingqiao',
    'ㄏㄨㄤˊ ㄒㄧㄥˇ ㄑㄧㄠˊ',
    'N̂g Séng-kiâu',
  ]
  const nextPronunciation = () => {
    const { length } = pronunciations
    currentIndex.value = (currentIndex.value + length + 1) % length
  }
  const pronunciation = computed(() => pronunciations[currentIndex.value])

  return {
    nextPronunciation,
    pronunciation,
  }
}
