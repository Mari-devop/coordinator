import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";
import RememberMeSection from "../_components/_auth/RememberMeSection";

async function getLoginData() {
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return {
    title: "Welcome Back",
    subtitle: "Sign in to your account to continue"
  };
}

export default async function LoginPage() {
  const data = await getLoginData();
  
  return (
    <AuthContainer>
      <AuthHeader
        title={data.title}
        subtitle={data.subtitle}
      />

      <AuthForm>
        <AuthInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          required
        />

        <AuthInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
        />

        <RememberMeSection />

        <AuthButton type="submit">
          Sign In
        </AuthButton>
      </AuthForm>

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkHref="/register"
      />
    </AuthContainer>
  );
}
