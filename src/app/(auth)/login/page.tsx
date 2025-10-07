import AuthContainer from "../_components/AuthContainer";
import AuthHeader from "../_components/AuthHeader";
import AuthForm from "../_components/AuthForm";
import AuthInput from "../_components/AuthInput";
import AuthButton from "../_components/AuthButton";
import AuthFooter from "../_components/AuthFooter";
import RememberMeSection from "../_components/RememberMeSection";

export default function LoginPage() {
  return (
    <AuthContainer>
      <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to your account to continue"
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
          Sign in
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
