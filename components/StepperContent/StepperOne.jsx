import { Box, Group, Input, Stack, Text, Title,  Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

export const StepperOne = () => {
   const { handleFormDataChange, formData } = useContext(Context)
   const largeScreen = useMediaQuery('(min-width: 900px)')

   // google sheets
   const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  

    
   return (
      <>
         <Group>
            {/** form header */}
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Personal info</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>Please provide your name, email, address, and phone number.</Text>
            </Box>

            {/** form */}
            <Stack w={'100%'}>
               <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',

                  '@media (min-width: 748px)': {
                     gap: '0.8rem'
                  }
               }}>
                  {/* <Input.Wrapper>
                     <Text fz={'sm'} fw={largeScreen ? 400 : 500} color={'hsl(213, 96%, 18%)'}>Name</Text>
                     <Input
                        name='name'
                        value={formData.name}
                        onChange={handleFormDataChange}
                        size={'md'}
                        placeholder="e.g. Stephen King"
                     />
                  </Input.Wrapper>
                  <Input.Wrapper>
                     <Text fz={'sm'} fw={largeScreen ? 400 : 500} color={'hsl(213, 96%, 18%)'}>Email Address</Text>
                     <Input
                        name='email'
                        value={formData.email}
                        onChange={handleFormDataChange}
                        size={'md'}
                        placeholder="e.g. stephenking@lorem.com"
                     />
                  </Input.Wrapper>
                  <Input.Wrapper>
                     <Text fz={'sm'} fw={largeScreen ? 400 : 500} color={'hsl(213, 96%, 18%)'}>Phone Number</Text>
                     <Input
                        name='phone'
                        value={formData.phone}
                        onChange={handleFormDataChange}
                        size={'md'}
                        placeholder="e.g. +1 234 567 890"
                     />
                  </Input.Wrapper> */}

                  {/* <form className="py-4 space-y-4" onSubmit={handleSubmit}> */}
                    <div className="flex items-center justify-center">
                    {/* <Input.Wrapper> */}
                        {/* <label htmlFor="name" className="sr-only">Name</label> */}
                        <Text fz={'sm'} color={'hsl(213, 96%, 18%)'}>Name</Text>
                        <Input 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" 
                        placeholder="Your Name" />
                    {/* </Input.Wrapper> */}
                    </div>
                    <div className="flex items-center justify-center">
                        <Text htmlFor="company" fz={'sm'} color={'hsl(213, 96%, 18%)'}>Company Name</Text>
                        <Input 
                        value={company} 
                        onChange={e => setCompany(e.target.value)} 
                        type="text" 
                        name="company" 
                        id="company" 
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" 
                        placeholder="Company Name" />
                    </div>
                    <div className="flex items-center justify-center">
                        <Text htmlFor="email" className="sr-only">Email</Text>
                        <Input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" 
                        placeholder="Your Email" />
                    </div>
                    <div className="flex items-center justify-center">
                        <Text htmlFor="phone" className="sr-only">Phone</Text>
                        <Input 
                        value={phone} 
                        onChange={e => setPhone(e.target.value)} 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" 
                        placeholder="Your Phone" />
                    </div>
                   
                    {/* <div className="flex items-center justify-center">
                        <Button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white ">Save</Button>
                    </div>
                  </form> */}
               </Box>
            </Stack>
         </Group>
      </>
   )
}
