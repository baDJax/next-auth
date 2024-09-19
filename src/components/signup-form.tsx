"use client";
const SignupForm = () => {
  return (
    <form
      className="max-w-[450px] w-full mx-auto px-3 py-5 border border-slate-500/10 rounded shadow-2xl"
      action={() => console.log("form submitted")}
    >
      <div className="py-2 text-center">
        <h2 className="text-3xl font-semibold">Signup</h2>
      </div>
      <div className="py-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="block w-full px-3 py-1 rounded border-2 focus:outline-none focus:border-slate-950 border-slate-700"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="py-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="block w-full px-3 py-1 rounded border-2 focus:outline-none focus:border-slate-950 border-slate-700"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="py-2">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="block w-full px-3 py-1 rounded border-2 focus:outline-none focus:border-slate-950 border-slate-700"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="py-2">
        <button
          className="px-3 py-2 rounded bg-slate-800 text-white w-full"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
