export default function LoginPage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2">
                    Welcome Back
                </h1>
                <p className="text-gray-600 font-[var(--font-dm-sans)]">
                    Sign in to your account to continue
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
                        placeholder="Enter your password"
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-[var(--accentColor)] focus:ring-[var(--accentColor)] border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                    
                    <div className="text-sm">
                        <a href="/forgot-password" className="font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]">
                            Forgot your password?
                        </a>
                    </div>
                </div>
                
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200"
                >
                    Sign in
                </button>
            </form>
            
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <a href="/register" className="font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}
