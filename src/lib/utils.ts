
import { invalidateAll } from "$app/navigation"

export function poll(expected: string): NodeJS.Timeout {
  return setInterval(
    async () => {
      const res = await fetch("/")
      const data = await res.json()
      if (data.state !== expected) {
        invalidateAll()
      }
    }, 1000
  )
}
