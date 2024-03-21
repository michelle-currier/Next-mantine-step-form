import { FormEvent, useState} from "react";
import { Box, Group, Input, Stack, Text, Title, Textarea, Button } from '@mantine/core';

const InquiryPage = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let form = {
            name,
            company,
            email,
            phone,
            message
        }

        const content = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then((response) => {
            if(response.status >= 400) {
                alert("Something went wrong")
            }
            return response.json()
        })

        // print to screen
        alert(content.data.tableRange)

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setCompany('')
        setEmail('')
    }
// todo add switch statement to make the steps happen
// var x:number = 1;

// switch(x){
//     case 1:
//     case 2:
//         console.log("step 1 & step 2");
//     break;
//     case 3:
//         console.log("step 3 success");
//     break;
//     default:
//         console.log("default step 1");
// }
    return (
        <Box sx={{
            height: '100vh',
            backgroundColor: 'hsl(217, 100%, 97%)',
            position: 'relative',

            '@media (min-width: 748px)': {
               display: 'grid',
               placeItems: 'center',
               width: '100%'
            }
         }} >
           <Group>
            {/** form header */}
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Personal info</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>Please provide your name, email, address, and phone number.</Text>
            </Box>

            {/** form */}
            <Stack w={'60%'}>
               
                 
                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
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
                    <div className="flex items-center justify-center">
                        <Text htmlFor="message" className="sr-only">Message</Text>
                        <Textarea 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                        id="message" 
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" 
                        placeholder="Your Message" />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600">Save</Button>
                    </div>
                </form>
            
            </Stack>
            </Group>
        </Box>
    )
}

export default InquiryPage
