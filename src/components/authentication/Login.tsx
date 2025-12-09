import { useForm } from "react-hook-form";
import { AppButton, AppImage, AppInput } from "../atoms";
import { AuthLogo } from "../../assets";
import { Link } from "react-router-dom";

interface LoginFormType {
  email: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormType>({
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormType) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="m-auto py-5 px-10 space-y-5 w-xl bg-header rounded-xl shadow-lg">
      <div className="flex justify-center gap-5 items-center mt-2 mb-8">
        <AppImage src={AuthLogo} alt="AuthLogo" width={100} />
        <h1 className="text-2xl text-white text-center font-bold">
          LOGIN TO EXPLORE
        </h1>
      </div>
      <AppInput
        control={control}
        rules={{ required: "Email is required" }}
        label="Email"
        name="email"
        isRequired
      />

      <AppInput
        control={control}
        type="password"
        rules={{ required: "Password is required" }}
        label="Password"
        name="password"
        isRequired
      />

      <AppButton
        color="success"
        size="lg"
        onClick={handleSubmit(onSubmit)}
        className="mt-3 mb-3 text-medium font-bold"
        // isDisabled={!isValid || isSubmitting}
        // isLoading={isSubmitting}
        isFullWidth
      >
        LOGIN
      </AppButton>

      <p className="text-default text-center font-medium">
        Don't have an account ?{" "}
        <Link to={"/signup"} className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
