import { useState } from 'react'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(data => console.log(data));

  console.log(watch("example"));

  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <form onSubmit={onSubmit}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <div>
          <input {...register("add[0]")} />
          <input {...register("add[1]")} />
          <input {...register("add[2]")} />
          <input {...register("add[3]")} />
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}

export default App
