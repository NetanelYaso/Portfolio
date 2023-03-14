import "./Projects.css";
import {
  MDBRipple,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { projectsData } from "../../../services/projectsData";
import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import Aos from "aos"
import "aos/dist/aos.css"

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <MDBRow id="project" className="container mt-3 mb-3 g-3">
        {projectsData.map((project, key) => (
          <MDBCol key={key} md={6} lg={4}>
            <Card data-aos="fade-up">
              <CardBody>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <Image src={project.image} borderRadius='lg' fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <Stack>
                  <Heading>{project.name}</Heading>
                  <Text>
                    {project.description}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter className="d-grid gap-2" >
                <Link href={project.sendTo}>
                  <Button
                    rounded={'full'}
                    bg={'green.400'}
                    color="white"
                    _hover={{ bg: 'green.300' }}>
                    See Me In Github
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </MDBCol>
        ))}
      </MDBRow>
    </>
  );
}



