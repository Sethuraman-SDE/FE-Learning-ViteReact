import { useForm } from "react-hook-form";
import { AppButton, AppImage, AppInput } from "../atoms";
import { AuthLogo } from "../../assets";
import { Link } from "react-router-dom";

interface SignupFormType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const { control, handleSubmit } = useForm<SignupFormType>({ mode: "all" });

  const onSubmit = (data: SignupFormType) => {
    console.log("Form submitted:", data);
  };
  return (
    <div className="m-auto py-5 px-10 space-y-5 w-xl bg-header rounded-xl shadow-lg">
      <div className="flex justify-center gap-5 items-center mt-2 mb-8">
        <AppImage src={AuthLogo} alt="AuthLogo" width={100} />
        <h1 className="text-2xl text-white text-center font-bold">
          SIGNUP TO EXPLORE
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <AppInput
          label="First Name"
          name="firstName"
          control={control}
          rules={{ required: "First Name is required" }}
          isRequired
        />

        <AppInput
          label="Last Name"
          name="lastName"
          control={control}
          rules={{ required: "Last Name is required" }}
          isRequired
        />
      </div>

      <AppInput
        label="Email"
        name="email"
        control={control}
        rules={{ required: "Email is required" }}
        isRequired
      />

      <AppInput
        type="password"
        label="Password"
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        isRequired
      />

      <AppInput
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        control={control}
        rules={{ required: "Confirm Password is required" }}
        isRequired
      />

      <AppButton
        color="success"
        size="lg"
        onClick={handleSubmit(onSubmit)}
        className="my-3 font-bold text-medium"
        isFullWidth
      >
        SIGN UP
      </AppButton>

      <p className="text-default text-center text-medium font-medium">
        Already have an account ? please{" "}
        <Link to={"/"} className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
