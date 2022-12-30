import Button from "@components/Button";
import Card from "@components/Card";
import FormItem from "@components/FormItem";
import FormLabel from "@components/FormLabel";
import Input from "@components/Input";
import { FieldValues, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "@firebase";
import { ErrorMessage } from "@components/ErrorMessage";
import { toast } from "react-hot-toast"
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (values: FieldValues) => {
        const { email, password } = values;

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
                toast.error(errorCode)
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
                    }} isError={errors.email ? true : false} placeholder="e.g. email@example.com" />
                    {errors?.email?.type === "required" && <ErrorMessage children="Email is required" />}
                    {errors?.email?.type === "validate" && <ErrorMessage children="Email supplied is not a valid format" />}

                </FormItem>
                <FormItem>
                    <FormLabel children="Password" />
                    <Input isError={errors.password ? true : false} type="password" label="password" register={register} validation={{ minLength: 6, required: true }} placeholder="" />
                    {errors?.password?.type === "required" && <ErrorMessage children="Password is required" />}
                    {errors?.password?.type === "minLength" && <ErrorMessage children="Password should be atleast 6 characters" />}
                </FormItem>
                <Button type="submit" children="Register" />
            </Card>
        </form>
    )
}

export default Register;