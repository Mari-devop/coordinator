"use client";
import AuthCheckbox from "./AuthCheckbox";
import AuthLink from "./AuthLink";

interface TermsCheckboxProps {
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function TermsCheckbox({ 
    className = "", 
    checked, 
    onChange 
}: TermsCheckboxProps) {
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
            checked={checked}
            onCheckedChange={onChange}
        />
    );
}
