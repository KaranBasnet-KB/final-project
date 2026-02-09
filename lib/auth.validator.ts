import * as z from "zod"; 
 
const Login = z.object({ 
  email: z.email(),
  password: z.string()
});

const Registration = z.object({
    email: z.email(),
    password: z.string().min(3, 'Password should contain atleast 3 character'),

})

export {Login, Registration}