import { NextPage } from "next";
import { LoginForm } from "../_components/auth/LoginForm";

const LoginPage: NextPage = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage