import Icon from "@chakra-ui/icon"
import { Box, HStack, StackProps } from "@chakra-ui/layout"
import { paginate } from "lib/pagination-utils"
import Link from "next/link"
import { useRouter } from "next/router"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

export function usePagination() {
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework: 'react', current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}

export function Pagination(props: StackProps) {
  const { prev, next } = usePagination()
  return (
    <HStack
      justify="space-between"
      spacing="10"
      mb="10"
      color="gray.700"
      {...props}
    >
      {prev ? (
        <Link href={prev.url} passHref>
          <Box as="a" rel="prev" flex="1" textAlign="start">
            <HStack spacing="1">
              <Icon as={HiChevronLeft} />
              <span>Previous</span>
            </HStack>
            <Box color="green.500" fontWeight="semibold" fontSize="md" mt="1">
              {prev.label}
            </Box>
          </Box>
        </Link>
      ) : (
        <Box className="pagination__empty" flex="1" />
      )}
      {next ? (
        <Link href={next.url} passHref>
          <Box as="a" rel="next" flex="1" textAlign="end">
            <HStack spacing="1" justify="flex-end">
              <span>Next</span>
              <Icon as={HiChevronRight} />
            </HStack>
            <Box color="green.500" fontWeight="semibold" fontSize="md" mt="1">
              {next.label}
            </Box>
          </Box>
        </Link>
      ) : (
        <Box className="pagination__empty" flex="1" />
      )}
    </HStack>
  )
}
