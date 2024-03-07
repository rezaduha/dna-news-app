import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export function useFormattedDate() {
  const formattedDate = (initialDate: string) => {
    const date = format(new Date(initialDate), "EEE, dd MMMM HH.mm", { locale: id })

    return date
  }

  return { formattedDate }
}
