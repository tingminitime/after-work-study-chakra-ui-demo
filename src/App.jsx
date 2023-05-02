import { Flex, Stack, Spacer } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <Flex direction="column" h="full">
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </Flex>
  )
}

export default App
