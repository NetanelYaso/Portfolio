import "./About.css";
import { FcGraduationCap, FcFlashOn, FcAssistant, FcDonate, FcInTransit, FcReadingEbook, FcAcceptDatabase, FcCheckmark } from "react-icons/fc";
import { IoLogoNodejs, IoLogoReact, IoSearchSharp } from "react-icons/io5";
import { Box, Container, Icon, SimpleGrid } from '@chakra-ui/react'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const Feature = ({ title, text, icon }) => {
  return (
    <Stack data-aos="fade-right">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'black'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
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
                  bg: 'green.300',
                  zIndex: -1,
                }}>
                Me, Myself & I
              </Text>
              <br />{' '}
              <Text color={'green.300'} as={'span'}>
                full stack developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Highly motivated FullStack software developer with knowledge in many technologies.
              <br />
              skilled in JS, NodeJs, React , Mongo DB data base and more.
              <br />
              I love challenges and have high work ethic.
              <br />
              In addition, I consider myself a team player and give both professional and social value to the company I work with
              <br />
              In the last year i have developed various projects That have significantly improved my abilities
              <br />
              Love to travel and dance.
              <br />
              Always happy to meet new people, get in touch!
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Image
            data-aos="fade-up"
            alt={'Login Image'}
            fit={'cover'}
            objectFit={'cover'}
            w={'60%'}
            h={'60%'}
            src={
              'images/netanel-11.png'
            }
          // rounded={"full"}
          />
        </Flex>
      </Stack>

      <Heading className="d-flex justify-content-center">Tools I work With</Heading>
      {/* <Stack> */}
      <Box p={4}>
        <SimpleGrid className="container" columns={{ base: 1, md: 4 }} spacing={5}>
          <Feature
            icon={<Icon as={IoLogoReact} w={10} h={10} />}
            title={'Frontend'}
            text={
              'HTML & CSS, JavaScript, Typescript, React, Redux, Bootstrap, MUI, Chakra UI'
            }
          />
          <Feature
            icon={<Icon as={IoLogoNodejs} w={10} h={10} />}
            title={'Backend'}
            text={
              'NodeJS, Express, API using'
            }
          />
          <Feature
            icon={<Icon as={FcAcceptDatabase} w={10} h={10} />}
            title={'Data Base'}
            text={
              'MongoDB, Firebase'
            }
          />
          <Feature
            icon={<Icon as={FcFlashOn} w={10} h={10} />}
            title={'General Skills'}
            text={
              'GIT, TDD, VS, OOP, Cypress'
            }
          />
          {/* <Feature
              icon={<Icon as={FcCheckmark} w={10} h={10} />}
              title={'Data Base'}
              text={
                <Icon as={FcCheckmark} w={10} h={10} />
              }
            /> */}
        </SimpleGrid>
      </Box>
      {/* </Stack> */}
    </>
  );
}

// import {
//   Button,
//   Flex,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useBreakpointValue,
// } from '@chakra-ui/react';

// export default function Home() {
//   return (
//     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//       <Flex p={8} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={6} w={'full'} maxW={'lg'}>
//           <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//             <Text
//               as={'span'}
//               position={'relative'}
//               _after={{
//                 content: "''",
//                 width: 'full',
//                 height: useBreakpointValue({ base: '20%', md: '30%' }),
//                 position: 'absolute',
//                 bottom: 1,
//                 left: 0,
//                 bg: 'green.300',
//                 zIndex: -1,
//               }}>
//               Hi I'm Netanel Yaso,
//             </Text>
//             <br />{' '}
//             <Text color={'green.300'} as={'span'}>
//               Full Stack Developer
//             </Text>{' '}
//           </Heading>
//           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
//             Fresh and clean full-stack developer. Highly motivated and extremely ethical.
//             I am seeking a full-time position where I can contribute to the organization's goals, eager to learn, develop, and accomplish great things.
//           </Text>
//           <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
//             <Button
//               rounded={'full'}
//               bg={'green.400'}
//               color={'white'}
//               _hover={{
//                 bg: 'green.300',
//               }}>
//               Create Project
//             </Button>
//             <Button rounded={'full'}>How It Works</Button>
//           </Stack>
//         </Stack>
//       </Flex>
//       <Flex flex={1} justifyContent="center" alignItems="center">
//         <Image
//           alt={'Login Image'}
//           fit={'cover'}
//           objectFit={'cover'}
//           w={'60%'}
//           h={'60%'}
//           src={
//             'images/netanel-11.png'
//           }
//           rounded={"full"}
//         />
//       </Flex>
//     </Stack>
//   );
// }


