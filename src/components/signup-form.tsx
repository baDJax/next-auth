"use client";

import { signup } from "@/actions/auth";
import { useFormState, useFormStatus } from "react-dom";

const SignupForm = () => {
  const [state, action] = useFormState(signup, undefined);

  const styles = {
    inputStyle:
      "block w-full px-3 py-1 rounded border-2 focus:outline-none focus:border-slate-950 border-slate-700",
    formStyle:
      "max-w-[450px] w-full mx-auto px-6 p-10 border border-slate-500/10 rounded shadow-2xl",
  };

  const inputData = [
    { label: "Name", id: "name", type: "text" },
    { label: "Email", id: "email", type: "email" },
    { label: "Password", id: "password", type: "password" },
  ];

  return (
    <form className={styles?.formStyle} action={action}>
      <div className="py-2 text-center">
        <h2 className="text-3xl font-semibold">Signup</h2>
      </div>
      {inputData?.map(({ label, id, type }) => (
        <div key={id} className="py-2">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            className={styles?.inputStyle}
            type={type}
            name={id}
            placeholder={`Enter your ${label}`}
          />
          {/* @ts-ignore */}
          {state?.errors[id] &&
            (id === "password" ? (
              <div className="text-red-400">
                <p>Password must:</p>
                <ul>
                  {state.errors[id].map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            ) : (
              // @ts-ignore
              <p className="text-red-400">{state.errors[id]}</p>
            ))}
        </div>
      ))}
      <div className="py-2">
        <SubmitButton />
      </div>
    </form>
  );
};

export default SignupForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="px-3 py-2 rounded bg-slate-800 text-white w-full"
      disabled={pending}
      type="submit"
    >
      Sign Up
    </button>
  );
}
