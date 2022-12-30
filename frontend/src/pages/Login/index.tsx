import Button from "@components/Button";
import Card from "@components/Card";
import FormItem from "@components/FormItem";
import FormLabel from "@components/FormLabel";
import Input from "@components/Input";
import { FieldValues, useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "@firebase";
import { ErrorMessage } from "@components/ErrorMessage";
import { toast } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@hooks";
import { AuthState } from "@enums";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const { authState } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm();


    useEffect(() => {
        if (authState === AuthState.SIGNED_IN) {
            navigate("/")
        }
    }, [authState])

    const onSubmit = (values: FieldValues) => {
        const { email, password } = values;

        const auth = getAuth(app)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Successfully logged in!")
                navigate("/")

            })
            .catch((error) => {
                toast.error("Could not sign in, check username and password and try again!")
            })
    }

    const validateEmail = (email: string): boolean => {
        return /^\S+@\S+$/.test(email)
    }
    return (
        <main className="h-screen m-auto max-w-md flex justify-center items-center ">

            <Card>
                <h1 className="text-2xl">Sign in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type="submit" children="Login" block />
                </form>
                <p className="my-5 text-center text-gray-600 text-sm">or continue with a social profile</p>
                <div className="text-center my-5">
                    Socials
                </div>
                <hr />
                <p className="mt-5 text-gray-700 text-sm text-center">Don't have an account? Register <Link className="text-blue-600 font-semibold hover:underline underline-offset-2" to="/register">here</Link></p>

            </Card>
        </main >
    )
}

export default Login;