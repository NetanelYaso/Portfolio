// import {
//   Container,
//   Stack,
//   Flex,
//   Box,
//   Heading,
//   Text,
//   Button,
//   Image,
//   Icon,
//   IconButton,
//   createIcon,
//   IconProps,
//   useColorModeValue,
// } from '@chakra-ui/react';
// export default function Home() {
//   return (
//     <>
//     <Container maxW={'7xl'}>
//       <Stack
//         align={'center'}
//         spacing={{ base: 8, md: 10 }}
//         py={{ base: 20, md: 28 }}
//         direction={{ base: 'column', md: 'row' }}>
//         <Stack flex={1} spacing={{ base: 5, md: 10 }}>
//           <Heading
//             lineHeight={1.1}
//             fontWeight={600}
//             fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
//             <Text
//               as={'span'}
//               position={'relative'}
//               _after={{
//                 content: "''",
//                 width: 'full',
//                 height: '30%',
//                 position: 'absolute',
//                 bottom: 1,
//                 left: 0,
//                 bg: 'orange.400',
//                 zIndex: -1,
//               }}>
//               Hi There,
//             </Text>
//             <br />
//             <Text as={'span'} color={'orange.400'}>
//               use everywhere!
//             </Text>
//           </Heading>
//           <Text color={'gray.500'}>
//             Fresh and clean full-stack developer. Highly motivated and extremely ethical.
//             I am seeking a full-time position where I can contribute to the organization's goals, eager to learn, develop, and accomplish great things.

//           </Text>
//           <Stack
//             spacing={{ base: 4, sm: 6 }}
//             direction={{ base: 'column', sm: 'row' }}>
//             <Button
//               rounded={'full'}
//               size={'lg'}
//               fontWeight={'normal'}
//               px={6}
//               colorScheme={'orange'}
//               bg={'orange.400'}
//               _hover={{ bg: 'orange.500' }}>
//               Get started
//             </Button>
//           </Stack>
//         </Stack>
//         <Flex
//           flex={1}
//           justify={'center'}
//           align={'center'}
//           position={'relative'}
//           w={'full'}>

//           <Box
//             position={'relative'}
//             height={'300px'}
//             rounded={'2xl'}
//             boxShadow={'2xl'}
//             width={'full'}
//             overflow={'hidden'}>
//             <Image
//               alt={'Hero Image'}
//               fit={'cover'}
//               align={'center'}
//               w={'100%'}
//               h={'100%'}
//               src={
//                 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
//               }
//             />
//           </Box>
//         </Flex>
//       </Stack>
//     </Container>
//     </>
//   );
// }

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'orange.300',
                zIndex: -1,
              }}>
              Hi I'm Netanel Yaso,
            </Text>
            <br />{' '}
            <Text color={'orange.300'} as={'span'}>
              Full Stack Developer
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Fresh and clean full-stack developer. Highly motivated and extremely ethical.
            I am seeking a full-time position where I can contribute to the organization's goals, eager to learn, develop, and accomplish great things.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'orange.400'}
              color={'white'}
              _hover={{
                bg: 'orange.300',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Image
          alt={'Login Image'}
          fit={'cover'}
          objectFit={'cover'}
          w={'60%'}
          h={'60%'}
          src={
            'images/netanel-11.png'
          }
          rounded={"full"}
        />
      </Flex>
    </Stack>
  );
}


