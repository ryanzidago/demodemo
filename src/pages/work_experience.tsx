import TextInput from "@/components/text_input"
import Button from "@/components/button"

export default function Contact() {

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full max-w-xl text-slate-700">
      <h1 className="text-xl">Work Experience</h1>
      <TextInput label="First name" />
      <TextInput label="Last name" />
      <TextInput label="Email" />
      <div className="flex w-full justify-end">
      <Button href="/work_experience">Next {">"}</Button>
      </div>
    </div>
  )
}