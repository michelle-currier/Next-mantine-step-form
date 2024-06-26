import { Box, Card, Grid, Group, Image, Text, Title, Textarea, Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useContext, useState } from 'react'
import Switch from 'react-switch'
import { Context } from '../context/Context'

export const StepperTwo = () => {
   const { togglePlanTimeChange, handlePlanSelect, plan, monthly } = useContext(Context)
   const largeScreen = useMediaQuery('(min-width: 748px)')
   
// google sheets ish
const [message, setMessage] = useState('');


const handleSubmit = async (e) => {
    e.preventDefault();

    let form = {
        message
    }

    const rawResponse = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
    const content = await rawResponse.json();

    // print to screen
    alert(content.data.tableRange)

    // Reset the form fields
     setMessage('')
   //  setPhone('')
   //  setName('')
   //  setCompany('')
   //  setEmail('')
}

   

   return (
      <>
         <Group w={'100%'}>
            {/** form header */}
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Select your plan</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>You have the option of monthly or yearly billing.</Text>
            </Box>
            {/** stepper two content */}
            <Grid w={'-webkit-fill-available'}>
               <Grid.Col span={largeScreen ? 4 : 12} p={largeScreen ? 8 : 5}>
                  <Card withBorder radius={'md'} p={!largeScreen && 13} sx={{
                     cursor: 'pointer',
                     backgroundColor: plan === 1 && 'hsl(231, 100%, 99%)',
                     border: plan === 1 && '1px solid hsl(243, 100%, 62%)',
                     transition: '0.05s ease-in-out',
                     display: 'flex',
                     gap: '1rem',
                     alignItems: 'center',

                     '@media (min-width: 748px)': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 0
                     }
                  }}
                     onClick={() => handlePlanSelect(1)}
                  >
                     <Image width={35} src={'/icon-arcade.svg'} />
                     <Box pt={largeScreen ? 25 : 0}>
                        <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Aracde</Text>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'} fw={500}>
                           {monthly ? '$9/mo' : '$19/yr'}
                        </Text>
                        {!monthly && <Text fz={12} mt={3} color={'hsl(213, 96%, 18%)'}>2months free</Text>}
                     </Box>
                  </Card>
               </Grid.Col>
               <Grid.Col span={largeScreen ? 4 : 12} p={largeScreen ? 8 : 5}>
                  <Card withBorder radius={'md'} p={!largeScreen && 13} sx={{
                     cursor: 'pointer',
                     backgroundColor: plan === 2 && 'hsl(231, 100%, 99%)',
                     border: plan === 2 && '1px solid hsl(243, 100%, 62%)',
                     transition: '0.05s ease-in-out',
                     display: 'flex',
                     gap: '1rem',
                     alignItems: 'center',

                     '@media (min-width: 748px)': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 0
                     }
                  }}
                     onClick={() => handlePlanSelect(2)}
                  >
                     <Image width={35} src={'/icon-advanced.svg'} />
                     <Box pt={largeScreen ? 25 : 0}>
                        <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Advanced</Text>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'} fw={500}>
                           {monthly ? '$12/mo' : '$120/yr'}
                        </Text>
                        {!monthly && <Text fz={12} mt={3} color={'hsl(213, 96%, 18%)'}>2months free</Text>}
                     </Box>
                  </Card>
               </Grid.Col>
               <Grid.Col span={largeScreen ? 4 : 12} p={largeScreen ? 8 : 5}>
                  <Card withBorder radius={'md'} p={!largeScreen && 13} sx={{
                     cursor: 'pointer',
                     backgroundColor: plan === 3 && 'hsl(231, 100%, 99%)',
                     border: plan === 3 && '1px solid hsl(243, 100%, 62%)',
                     transition: '0.05s ease-in-out',
                     display: 'flex',
                     gap: '1rem',
                     alignItems: 'center',

                     '@media (min-width: 748px)': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 0
                     }
                  }}
                     onClick={() => handlePlanSelect(3)}
                  >
                     <Image width={35} src={'/icon-pro.svg'} />
                     <Box pt={largeScreen ? 25 : 0}>
                        <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Pro</Text>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'} fw={500}>
                           {monthly ? '$15/mo' : '$150/yr'}
                        </Text>
                        {!monthly && <Text fz={12} mt={3} color={'hsl(213, 96%, 18%)'}>2months free</Text>}
                     </Box>
                  </Card>
               </Grid.Col>
            </Grid>
            {/** plan toggler */}
            <Box sx={{
               backgroundColor: 'hsl(231, 100%, 99%)',
               borderRadius: '7px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '100%',
               marginTop: largeScreen ? 20 : 5,
               padding: 8,
               gap: 18
            }}>
               <Text fz={13} fw={500} color={monthly ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%, 0.5)'}>Monthly</Text>
               <Switch
                  checked={!monthly}
                  onChange={togglePlanTimeChange}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  activeBoxShadow=""
                  onColor={'#01285B'}
                  offColor={'#01285B'}
                  height={20}
                  width={40}
                  handleDiameter={13}
               />
               <Text fz={13} fw={500} color={!monthly ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%, 0.5)'}>Yearly</Text>
            </Box>
            <form onSubmit={handleSubmit}>
            
                  <div className="flex items-center justify-center">
                     <Text htmlFor="message" className="sr-only">Message</Text>
                     <Textarea 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                        id="message" 
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" 
                        placeholder="Your Message" />
                  </div>
                  <Button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white ">Save</Button>
                  
              </form>   
            
         </Group>
      </>
   )
}
