export default function RegisterPage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2">
                    Create Account
                </h1>
                <p className="text-gray-600 font-[var(--font-dm-sans)]">
                    Join us today and get started
                </p>
            </div>
            
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent"
                        placeholder="Create a password"
                    />
                </div>
                
                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent"
                        placeholder="Confirm your password"
                    />
                </div>
                
                <div className="flex items-center">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-[var(--accentColor)] focus:ring-[var(--accentColor)] border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="/terms-and-condition" className="text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy-policy" className="text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]">
                            Privacy Policy
                        </a>
                    </label>
                </div>
                
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200"
                >
                    Create Account
                </button>
            </form>
            
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}