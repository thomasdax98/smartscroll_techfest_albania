import { BlitzPage } from "@blitzjs/next";
import { AuthLayout } from "app/auth/layouts/AuthLayout";
import { LoginForm } from "app/auth/components/LoginForm";
import { useRouter } from "next/router";

const LoginPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <AuthLayout title="Sign in to your account">
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/";
          return router.push(next);
        }}
      />
    </AuthLayout>
  );
};

export default LoginPage;
