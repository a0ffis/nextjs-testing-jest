import React from "react";

type Props = {};

const Form = (props: Props) => {
  const [formState, setFormState] = React.useState({
    fullName: "",
    password: "",
  });

  const [submited, setSubmited] = React.useState(false);

  const handleSubmit = () => {
    console.log(formState);
    if (formState.fullName === "" || formState.password === "") {
      return;
    }
    setSubmited(true);
  };

  return (
    <>
      {/* <pre className="overflow-auto max-h-[500px] text-yellow-500"> */}
      {/*   {JSON.stringify(formState, null, 2)} */}
      {/* </pre> */}
      <div className="flex w-full min-h-screen justify-center items-center">
        {!submited && (
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="full-name"
                  data-testid="full-name"
                  type="text"
                  placeholder="John Doe"
                  value={formState.fullName}
                  onChange={(e) =>
                    setFormState({ ...formState, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="password"
                  data-testid="password"
                  type="password"
                  placeholder="******************"
                  value={formState.password}
                  onChange={(e) => {
                    setFormState({ ...formState, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input
                  data-testid="checkbox"
                  className="mr-2 leading-tight"
                  type="checkbox"
                />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  onClick={(e) => {
                    handleSubmit();
                  }}
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  data-testid="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        )}

        {submited && (
          <div className="mt-4 text-green-500 text-center p-4 border border-green-300 rounded-lg shadow-lg bg-green-50 transition-transform transform scale-100 hover:scale-105 duration-300 ease-in-out animate-bounce">
            <h2 className="text-2xl font-semibold transition-colors duration-300 ease-in-out hover:text-green-700">
              Thank you for signing up!
            </h2>
            <p className="mt-2 text-green-700 transition-colors duration-300 ease-in-out hover:text-green-800">
              We appreciate your interest and will keep you updated!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
