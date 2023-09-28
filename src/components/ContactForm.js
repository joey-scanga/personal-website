export default function ContactForm() {
    const onSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        console.log(data)
    }
    return (
        <div className='contact-box'>
            <ContactForm />
        </div>
    )
}
