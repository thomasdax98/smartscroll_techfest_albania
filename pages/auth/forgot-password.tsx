import { LabeledTextField } from "app/core/components/LabeledTextField";
import { Form, FORM_ERROR } from "app/core/components/Form";
import { ForgotPassword } from "app/auth/validations";
import forgotPassword from "app/auth/mutations/forgotPassword";
import { useMutation } from "@blitzjs/rpc";
import { BlitzPage } from "@blitzjs/next";
import { AuthLayout } from "app/auth/layouts/AuthLayout";

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword);

  return (
    <AuthLayout title="Forgot Your Password?">
      {isSuccess ? (
        <div>
          <h2>Request Submitted</h2>
          <p>
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </p>
        </div>
      ) : (
        <Form
          submitText="Send Reset Password Instructions"
          schema={ForgotPassword}
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            try {
              await forgotPasswordMutation(values);
            } catch (error: any) {
              return {
                [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
              };
            }
          }}
        >
          <LabeledTextField name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
