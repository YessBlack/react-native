import { useForm } from "react-hook-form"

interface FormInput {
  email: string;
  password: string;
}

export const FormPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInput>({
    defaultValues: {
      email: 'angelica@gmail.com',
      password: '123456'
    }
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  }

  console.log(watch('email'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formulario</h3>
        <div style={{display: "flex", flexDirection: 'column'}}>
          <input type="email" placeholder="Email" {...register('email', { required: true })}/>
          <input type="password" placeholder="Password" {...register('password', { required: true })}/>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  )
}
