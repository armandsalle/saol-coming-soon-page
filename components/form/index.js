import { useState } from "react"

const Form = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)

    const response = await fetch("https://hooks.zapier.com/hooks/catch/5795378/oj6ekx2", {
      method: "POST",
      body: JSON.stringify({
        contact: {
          email: email,
        },
      }),
    })
    const data = await response.json()

    console.log(data)

    if (data.status === "success") {
      setEmail("")
    } else {
      setEmail("Something went wrong.")
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
      />
      <button type="submit">
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
