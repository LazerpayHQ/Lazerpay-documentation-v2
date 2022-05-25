import { paginate } from "lib/pagination-utils"
import { useRouter } from "next/router"

export function usePagination() {
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework: 'react', current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}

export function Pagination(props: any) {
  const { prev, next } = usePagination()
  return (
    <div>Paginate</div>
  )
}
