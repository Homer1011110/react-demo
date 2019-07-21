import { TYPE_MAP } from './Condition'

export function normalizeConditions(data) {
  if(data.type === TYPE_MAP.EXPRESSION) {
    const { fact, value, operator } = data
    return { fact, operator, value }
  } else {
    const { type, priority, subConditions } = data
    return {
      priority,
      [type]: subConditions.map((item) => {
        return normalizeConditions(item)
      })
    }
  }
}

export function normalizeEvent(type, priority=1) {
  return { type, priority }
}