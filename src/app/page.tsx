import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to register page
  redirect('/register');
}