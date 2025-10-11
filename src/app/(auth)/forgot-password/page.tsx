import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";

async function getForgotPasswordData() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    title: "Forgot Password",
    subtitle: "Enter your email to reset your password"
  };
}

export default async function ForgotPasswordPage() {
  const data = await getForgotPasswordData();
  
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
