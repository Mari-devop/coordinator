import AuthContainer from "../components/AuthContainer";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import AuthFooter from "../components/AuthFooter";

export default function ForgotPasswordPage() {
  return (
    <AuthContainer>
      <AuthHeader
        title="Forgot Password"
        subtitle="Enter your email to reset your password"
      />
      
      <AuthForm>
        <AuthInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          required
        />
        
        <AuthButton type="submit">
          Reset Password
        </AuthButton>
      </AuthForm>
      
      <AuthFooter
        text=""
        linkText="Back to login"
        linkHref="/login"
        className="mt-2"
      />
    </AuthContainer>
  );
}
