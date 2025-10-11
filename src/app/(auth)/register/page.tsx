import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";
import TermsCheckbox from "../_components/_auth/TermsCheckbox";

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