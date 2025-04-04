import TextInput from "@/components/ui/form/text-input";

type Props = {
  user?: {
    name: string
  }
}
export default function AccountForm({ user }: Props) {
  return (
    <form>
      <div className="mb-5">
        <TextInput label="Nome e Cognome" value={user?.name} />
      </div>
      <div className="mb-5 flex justify-between gap-5">
        <div className="flex-1">
          <TextInput label="Codice Fiscale" />
        </div>
        <div className="flex-1">
          <TextInput label="Data di nascita" />
        </div>
      </div>
      <div className="mb-5 flex justify-between gap-5">
        <div className="flex-1">
          <TextInput label="Indirizzo email" />
        </div>
        <div className="flex-1">
          <TextInput label="Telefono" />
        </div>
      </div>
      <div className="mb-5 flex justify-between gap-5">
        <div className="flex-1">
          <TextInput label="Password" />
        </div>
        <div className="flex-1">
          <TextInput label="Conferma password" />
        </div>
      </div>
      {
        !user && (
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
        )
      }
      <button type="submit" className="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
    </form>
  )
}