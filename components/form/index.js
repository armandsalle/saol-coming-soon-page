import { useState } from "react"

const Form = () => {
  const [email, setEmail] = useState("")
  const [success, setSucces] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(process.env.ZAPIER_HOOK, {
      method: "POST",
      body: JSON.stringify({
        contact: {
          email: email,
        },
      }),
    })

    const data = await response.json()

    if (data.status === "success") {
      setEmail("Go raibh mile maith agat a chara")
      setSucces(true)
    } else {
      setEmail("Something went wrong, try again")
      setSucces(false)
    }
  }

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email me at launch"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={success}
      />

      <button type="submit" className={`submit ${success && "go"}`}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.87.724l-.43.473 6.713 6.67H.5v.6h16.653L10.44 15.14l.43.473 7.444-7.444z"
            fill="#fff"
            stroke="#fff"
          />
        </svg>
      </button>
    </form>
  )
}

export default Form
