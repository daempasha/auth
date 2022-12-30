import Button from "@components/Button"
import Card from "@components/Card"
import FormItem from "@components/FormItem"
import FormLabel from "@components/FormLabel"
import Input from "@components/Input"
import { useForm } from "react-hook-form"

function App() {
  const { register } = useForm();

  return (
    <div className="App  h-screen flex justify-center items-center">
      <Card>
        <FormItem>
          <FormLabel children="Username" />
          <Input label="username" register={register} placeholder="e.g. spaceman01" />
        </FormItem>
        <FormItem>
          <FormLabel children="Password" />
          <Input type="password" label="password" register={register} placeholder="" />
        </FormItem>
        <Button children="Register" />
      </Card>
    </div>
  )
}

export default App
