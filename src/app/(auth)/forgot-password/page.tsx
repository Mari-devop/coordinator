export default function ForgotPasswordPage() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-2">
          Forgot Password
        </h1>
        <p className="text-gray-600 font-[var(--font-dm-sans)]">
          Enter your email to reset your password
        </p>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--secondaryBackground)] hover:bg-[var(--accentColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accentColor)] transition-colors duration-200"
        >
          Reset Password
        </button>
      </form>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          <a
            href="/login"
            className="font-medium text-[var(--accentColor)] hover:text-[var(--lightAccentColor)]"
          >
            Back to login
          </a>
        </p>
      </div>
    </div>
  );
}
