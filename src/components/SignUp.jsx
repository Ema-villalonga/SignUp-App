import '../components/SignUp.css';

export default function SignUp(){
    return (
        <section className="container-form">
            <h1>Sign Up</h1>

            <form className="form">
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter your last name" />
                    <input type="email" placeholder="Enter your email address" />
                    <input type="tel" placeholder="Enter your phone number" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="password" placeholder="Repeat your password" />


                <button className="btn-join">Join</button>
            </form>
        </section>
    )
}