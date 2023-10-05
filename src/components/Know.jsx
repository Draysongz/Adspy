import React from 'react'
import{
    Box,
    Flex,
    Heading,
    Text,
    Card,
    CardBody,
    Image,
    } from '@chakra-ui/react'
    import meta from '../images/meta.svg'
    import linkedin from '../images/linkedin.svg'
    import pen from '../images/pen.svg'
    import twitter from '../images/twitter.svg'
    import writing from '../images/writing.svg'
    import youtube from '../images/youtube.svg'

const Know = () => {
  return (
        <Flex bgColor={'#F8F8F8'}  w={['100vw', '100vw', '98.7vw']} overflowX={'hidden'}
        direction={'column'} justifyContent={['start', 'start', 'start', 'center']} p={10} gap={5}>
            
            <Box alignSelf={'center'}  minW={'40vw'} >
                <Heading width={['70vw', '70vw', '70vw', '58vw']}
                fontSize={['16px', '24px', '36px']}
                textAlign={'center'}>Know Your Competitors Ads , Write Copies Or Plan Your Tasks </Heading>
            </Box>
          <Flex justifyContent={'space-evenly'} direction={['column', 'column', 'row', 'row']} gap={5} >
            <Card h={['30vh', '35vh', '23vh', '35vh']}  minW={'27vw'}>
                <CardBody>
                    <Flex direction={'column'} gap={5}>
                        <Image src={meta} alt='meta' width={'10'} />
                        <Heading fontSize={'md'}>Meta Ads (Facebook & Instagram)</Heading>
                        <Text>Spy on your competitors ads within <br/>Facebook and Instagram</Text>
                    </Flex>
                </CardBody>
            </Card> 

            <Card h={['30vh', '35vh', '23vh', '35vh']}  minW={'27vw'}>
                <CardBody>
                    <Flex direction={'column'} gap={5}>
                        <Image src={youtube} alt='meta' width={'10'} />
                        <Heading fontSize={'md'}>Google and Youtube Ads</Heading>
                        <Text>Spy on your competitors ads on<br/> Youtube and Google</Text>
                    </Flex>
                </CardBody>
            </Card>

            <Card h={['30vh', '35vh', '23vh', '35vh']}  minW={'27vw'}>
                <CardBody>
                    <Flex direction={'column'} gap={5}>
                        <Image src={linkedin} alt='meta' width={'10'} />
                        <Heading fontSize={'md'}>LinkedIn Ads</Heading>
                        <Text>Spy on your competitors ads on<br/>Linkedin</Text>
                    </Flex>
                </CardBody>
            </Card>  
          </Flex>

          <Flex justifyContent={'space-evenly'} direction={['column', 'column', 'row', 'row']} gap={5} >
            <Card h={['30vh', '35vh', '23vh', '35vh']}   minW={'27vw'}>
                <CardBody>
                    <Flex direction={'column'} gap={5}>
                        <Image src={twitter} alt='meta' width={'10'} />
                        <Heading fontSize={'md'}>Twitter Ads</Heading>
                        <Text>Spy on your competitors ads within <br/>Twitter</Text>
                    </Flex>
                </CardBody>
            </Card> 

            <Card h={['35vh', '35vh', '23vh', '35vh']}  minW={'27vw'}>
                <CardBody>
                    <Flex direction={'column'} gap={5}>
                        <Image src={writing} alt='meta' width={'10'} />
                        <Heading fontSize={'md'}>AI Writing</Heading>
                        <Text>Write compelling copies and find the <br/>right audience for your brand with AI</Text>
                    </Flex>
                </CardBody>
            </Card>

            <Card h={['30vh', '35vh', '23vh', '35vh']}   minW={'27vw'}>
                <CardBody>
                    <Flex direction={'column'} gap={5}>
                        <Image src={pen} alt='meta' width={'10'} />
                        <Heading fontSize={'md'}>Workplace</Heading>
                        <Text>Organize and plan your task for your <br/>next ad campaign</Text>
                    </Flex>
                </CardBody>
            </Card>  
          </Flex>
        </Flex>
  )
}

export default Know