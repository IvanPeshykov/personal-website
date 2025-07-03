import { redirect } from 'next/navigation';

export default function NotFound() {
    redirect('/'); // Redirect to homepage
}
