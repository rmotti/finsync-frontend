'use client';

import Signup from '@/components/SignUp';

export default function SignupPage() {
  return (
    <Signup
      onClose={() => console.log('Fechando modal')}
      onSwitchToLogin={() => console.log('Indo para login')}
    />
  );
}
