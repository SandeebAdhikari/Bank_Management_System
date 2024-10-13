import AuthForm from "@/components/AuthForm";

const SignUP = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign_up" />
    </section>
  );
};

export default SignUP;
