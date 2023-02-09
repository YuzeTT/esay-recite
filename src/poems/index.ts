const poems = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('./*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(2, yaml ? -5 : -4), value.default]
    }),
)

export default poems
