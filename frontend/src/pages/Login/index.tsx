import Button from "@components/Button";
import Card from "@components/Card";
import FormItem from "@components/FormItem";
import FormLabel from "@components/FormLabel";
import Input from "@components/Input";
import { FieldValues, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "@firebase";
import { ErrorMessage } from "@components/ErrorMessage";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (values: FieldValues) => {
        const { email, password } = values;

        console.log("amde it")

        const auth = getAuth(app)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(error);
            })
    }

    const validateEmail = (email: string): boolean => {
        return /^\S+@\S+$/.test(email)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="h-screen flex justify-center items-center">
            <Card>
                <FormItem>
                    <FormLabel children="Email" />
                    <Input label="email" register={register} validation={{
                        required: true,
                        validate: validateEmail
                    }} placeholder="e.g. email@example.com" />
                    {errors?.email?.type === "required" && <ErrorMessage children="Email is required" />}
                    {errors?.email?.type === "validate" && <ErrorMessage children="Email supplied is not a valid format" />}

                </FormItem>
                <FormItem>
                    <FormLabel children="Password" />
                    <Input type="password" label="password" register={register} placeholder="" />
                </FormItem>
                <Button type="submit" children="Register" />
            </Card>
        </form>
    )
}

export default Login;