const LoginForm = ({ handleForm, setUsername }) => {

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-6 shadow-sm">
            <form className="space-y-6" onSubmit={handleForm}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>

                    <input
                        id="username"
                        name="username"
                        min={3}
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                </div>


                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onChange={(e) => setUsername(e.target.value)}
                    >
                        Find
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;