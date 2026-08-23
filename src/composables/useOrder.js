import { computed, reactive } from 'vue'

// Tiny shared store so the menu and the order form stay in sync.
const state = reactive({
  ids: [],
})

export function useOrder() {
  const selectedIds = computed(() => state.ids)

  function isSelected(id) {
    return state.ids.includes(id)
  }

  function toggle(id) {
    const i = state.ids.indexOf(id)
    if (i === -1) state.ids.push(id)
    else state.ids.splice(i, 1)
  }

  function clear() {
    state.ids.splice(0, state.ids.length)
  }

  return { selectedIds, isSelected, toggle, clear }
}
