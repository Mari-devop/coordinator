import AuthContainer from "../components/AuthContainer";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import AuthFooter from "../components/AuthFooter";
import TermsCheckbox from "../components/TermsCheckbox";

export default function RegisterPage() {
    return (
        <AuthContainer>
            <AuthHeader
                title="Create Account"
                subtitle="Join us today and get started"
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
                    placeholder="Create a password"
                    required
                />
                
                <AuthInput
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    required
                />
                
                <TermsCheckbox />

                <AuthButton type="submit">
                    Create Account
                </AuthButton>
            </AuthForm>

            <AuthFooter
                text="Already have an account?"
                linkText="Sign in"
                linkHref="/login"
            />
        </AuthContainer>
    );
}