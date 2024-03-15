import { createContext, useState, FormEvent } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
   const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
   const [plan, setPlan] = useState(1)
   const [monthly, setMonthly] = useState(true)
   const [addOns, setAddOns] = useState([])

   const getTotal = () => {
      let total = 0
      // if seleted is monthly plan
      if (monthly) {
         if (plan === 1) {
            total += 9
            if (addOns.includes(1)) total += 1
            if (addOns.includes(2)) total += 2
            if (addOns.includes(3)) total += 2

         } else if (plan === 2) {
            total += 12
            if (addOns.includes(1)) total += 1
            if (addOns.includes(2)) total += 2
            if (addOns.includes(3)) total += 2

         } else {
            total += 15
            if (addOns.includes(1)) total += 1
            if (addOns.includes(2)) total += 2
            if (addOns.includes(3)) total += 2

         }
      }
      // if seleted is yearly plan 
      else {
         if (plan === 1) {
            total += 19
            if (addOns.includes(1)) total += 10
            if (addOns.includes(2)) total += 12
            if (addOns.includes(3)) total += 12

         } else if (plan === 2) {
            total += 120
            if (addOns.includes(1)) total += 10
            if (addOns.includes(2)) total += 12
            if (addOns.includes(3)) total += 12

         } else {
            total += 150
            if (addOns.includes(1)) total += 10
            if (addOns.includes(2)) total += 12
            if (addOns.includes(3)) total += 12

         }
      }
      return total
   }

   const handleFormDataChange = (event) => {
      // const handleSubmit = async (e) => {
      const { name, value } = event.target
      setFormData({ ...formData, [name]: value })

   //    e.preventDefault();
   //    let form = {
   //       name
   //    }

   //    const rawResponse = await fetch('/api/submit', {
   //       method: 'POST',
   //       headers: {
   //           'Accept': 'application/json',
   //           'Content-Type': 'application/json'
   //       },
   //       body: JSON.stringify(form)
   //   });
   //   const content = await rawResponse.json();

   //   // print to screen
   //   alert(content.data.tableRange)
   //   setName('')
   // }
   }
   const handlePlanSelect = (index) => {
      setPlan(index)
   }

   const togglePlanTimeChange = () => {
      setMonthly(!monthly)
   }

   const handleAddOns = (index) => {
      if (!addOns.some(addOn => addOn === index)) {
         const obj = [...addOns, index]
         setAddOns(obj)
      } else {
         const obj = addOns.filter(addOns => addOns !== index)
         setAddOns(obj)
      }
   }

   const data = {
      formData: formData,
      plan: plan,
      monthly: monthly,
      addOns: addOns,
      handleFormDataChange: handleFormDataChange,
      handlePlanSelect: handlePlanSelect,
      togglePlanTimeChange: togglePlanTimeChange,
      handleAddOns: handleAddOns,
      getTotal: getTotal,
   }

   // googlsheets
   const handleSubmit = async (e) => {
      e.preventDefault();

      let form = {
          name,
          company,
          email,
          phone,
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
      setPhone('')
      setName('')
      setCompany('')
      setEmail('')
  }
   return (
      <Context.Provider value={data}>
         {children}
      </Context.Provider>
   )
}
