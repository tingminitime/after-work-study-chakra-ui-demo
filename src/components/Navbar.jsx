import {
  Flex,
  Heading,
  Text,
  HStack,
  Avatar,
  Spacer,
  Button,
  useToast
} from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'

function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: false,
      status: 'success',
      position: 'bottom-right'
    })
  }

  return (
    <Flex
      as="nav"
      p="4"
      mb="12"
      shadow="lg"
      bg="white"
      alignItems="center"
    >
      <Heading
        as="h1"
        fontSize={{ base: 'lg', md: '2xl' }}
        color="gray.700"
      >
        下班後的程式讀書會
      </Heading>

      <Spacer></Spacer>

      <HStack spacing="4">
        <Avatar src="https://i.pravatar.cc/128"></Avatar>
        <Text display={{ base: 'none', md: 'block' }} color="gray.700">
          demo@demo.demo
        </Text>
        <Button type="button" colorScheme="yellow" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  )
}
export default Navbar
