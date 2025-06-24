import { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../context/AuthContext'

function Signup() {

  const { createUser } = use(AuthContext)

  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const address = form.address.value
    const number = form.number.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    const newUser = { name, address, number, photo, email, password }
    console.log(newUser)

    // create user in fairbase
    createUser(email, password)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="flex flex-col max-w-[500px] p-6 rounded-md sm:p-10 dark:bg-gray-100 mx-auto my-6 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
      </div>
      <form onSubmit={handleSignUp} className="space-y-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
            <input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm">Address</label>
            <input type="text" name="address" id="address" placeholder="address" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <label htmlFor="number" className="block mb-2 text-sm">Number</label>
            <input type="text" name="number" id="number" placeholder="fone number" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">Photo</label>
            <input type="text" name="photo" id="photo" placeholder="photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
            <input type="email" name="email" id="email" placeholder="email address" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">Password</label>

            </div>
            <input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-600 dark:text-gray-50">Sign up</button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
            <Link to="/login" rel="noopener noreferrer" href="#" className="hover:underline text-blue-500">Log in</Link>.
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup