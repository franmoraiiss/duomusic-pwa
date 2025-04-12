import { Button, HStack } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode"

const App = () => {
  const result = useColorModeValue("<light-mode-value>", "<dark-mode-value>")

  console.log(result)

  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}

export { App }
