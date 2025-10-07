"use client";
import AuthCheckbox from "./AuthCheckbox";
import AuthLink from "./AuthLink";

interface TermsCheckboxProps {
    className?: string;
}

export default function TermsCheckbox({ className = "" }: TermsCheckboxProps) {
    return (
        <AuthCheckbox
            id="terms"
            name="terms"
            label={
                <>
                    I agree to the{' '}
                    <AuthLink href="/terms-and-condition">
                        Terms of Service
                    </AuthLink>{' '}
                    and{' '}
                    <AuthLink href="/privacy-policy">
                        Privacy Policy
                    </AuthLink>
                </>
            }
            required={true}
            className={className}
        />
    );
}
