import { useState } from 'react'
import { useForm } from "react-hook-form";



function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(data => console.log(data));

  console.log(watch("point"));

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
        <input defaultValue="test" {...register("type")} />
        <div>
          <input {...register("requiredInput", { required: true })} />
          {errors.requiredInput && <span style={{ color: 'red' }}>This field is required</span>}
        </div>
        <div>
          <input {...register("add[0]")} />
          <input {...register("add[1]")} />
          <input {...register("add[2]")} />
          <input {...register("add[3]")} />
        </div>
        <div>
          <select {...register("point")}>
            <option value="0">100</option>
            <option value="1">500</option>
          </select>
        </div>
        <input type="submit" />
      </form >
    </div >
  )
}

export default App
