import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

// ── Google icon ───────────────────────────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
        fill="#4285F4"
      />
      <path
        d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
        fill="#34A853"
      />
      <path
        d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
        fill="#FBBC05"
      />
      <path
        d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
        fill="#EB4335"
      />
    </svg>
  );
}

// ── X / Twitter icon ──────────────────────────────────────────────────────────

function XIcon() {
  return (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
    </svg>
  );
}

// ── Cosmos wordmark ───────────────────────────────────────────────────────────

function CosmosLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-brand-500 flex h-8 w-8 items-center justify-center rounded-lg">
        <span className="text-sm font-bold text-white">C</span>
      </div>
      <span className="text-lg font-bold text-gray-900 dark:text-white">cosmos_ui</span>
    </div>
  );
}

// ── Shared input class ────────────────────────────────────────────────────────

const inputCls =
  'h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800';

// ── Page ──────────────────────────────────────────────────────────────────────

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-white lg:flex-row dark:bg-gray-900">
      {/* ── Left: form pane ── */}
      <div className="flex flex-1 flex-col px-6 py-10 lg:px-0">
        {/* Back link */}
        <div className="mx-auto w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              className="stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to dashboard
          </Link>
        </div>

        {/* Form */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto w-full max-w-md">
            {/* Heading */}
            <div className="mb-7">
              <h1 className="mb-2 text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-white/90">
                Sign Up
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter your details below to create your account!
              </p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center gap-3 rounded-lg bg-gray-100 px-5 py-3 text-sm font-normal text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <GoogleIcon />
                Sign up with Google
              </button>
              <button className="inline-flex items-center justify-center gap-3 rounded-lg bg-gray-100 px-5 py-3 text-sm font-normal text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <XIcon />
                Sign up with X
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-400 dark:bg-gray-900">Or</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    First Name<span className="text-error-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your first name" className={inputCls} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Last Name<span className="text-error-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your last name" className={inputCls} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Email<span className="text-error-500">*</span>
                </label>
                <input type="email" placeholder="Enter your email" className={inputCls} />
              </div>

              {/* Password */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Password<span className="text-error-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className={inputCls + ' pr-11'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Confirm Password<span className="text-error-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    className={inputCls + ' pr-11'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Terms checkbox */}
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-500 select-none dark:text-gray-400">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-md border-[1.25px] transition-colors ${
                        agreed
                          ? 'border-brand-500 bg-brand-500'
                          : 'border-gray-300 bg-transparent dark:border-gray-700'
                      }`}
                    >
                      {agreed && (
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                            stroke="white"
                            strokeWidth="1.944"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p>
                    By creating an account you agree to the{' '}
                    <span className="font-medium text-gray-800 dark:text-white/90">
                      Terms and Conditions,
                    </span>{' '}
                    and our{' '}
                    <span className="font-medium text-gray-800 dark:text-white/90">
                      Privacy Policy
                    </span>
                  </p>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-brand-500 hover:bg-brand-600 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors"
              >
                Create Account
              </button>
            </form>

            {/* Sign in link */}
            <p className="mt-5 text-center text-sm text-gray-700 sm:text-left dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/auth/signin"
                className="text-brand-500 hover:text-brand-600 dark:text-brand-400 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ── Right: brand pane (hidden on mobile) ── */}
      <div className="bg-brand-950 relative hidden items-center justify-center lg:flex lg:w-1/2 dark:bg-white/5">
        {/* Decorative grid dots */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-12 text-center">
          <CosmosLogo />
          <p className="max-w-xs text-sm text-gray-400 dark:text-white/60">
            A production-ready design system built with React and Tailwind CSS v4.
          </p>
        </div>
      </div>
    </div>
  );
}
