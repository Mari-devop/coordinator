import AuthContainer from "../_components/AuthContainer";
import AuthHeader from "../_components/AuthHeader";
import AuthForm from "../_components/AuthForm";
import AuthInput from "../_components/AuthInput";
import AuthButton from "../_components/AuthButton";
import AuthFooter from "../_components/AuthFooter";

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
