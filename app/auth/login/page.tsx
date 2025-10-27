// 9. Made form for login

export default function login() {
    return(
        <article>
            <h1>Login</h1>

               {/* 9. Made form with two fields and a login button inside the auth file. */}
            <form>
                <input type="text" placeholder="My name"></input>
                <input type="password"></input>
                <button>Login</button>
            </form>
        </article>
    )
}