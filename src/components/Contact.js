export default function Contact() {
    return (
        <div className="contact-div">
            <h1>Contact</h1>

            <form>
             <h2>Name</h2>
                <input
                 type="text"

                />

            </form>
             <h2>Email</h2>
                <input
                 type="text"
            />

            <form>
             <h2>Message</h2>
                <input id="message-input"
                 type="text"
                />
            </form>

            <form>
                <input id="submit-btn"
                 type="submit"
                 value="Send Msg"
                // onClick={handleSubmit}
                />
            </form>

        </div>
    )
}