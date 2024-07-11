import { useCaptcha } from "./captcha";

export function UserLogin(){
    const captcha=useCaptcha();
    return(
        <div className="container-fluid">
            <h3>User Login</h3>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>Password</dt>
                <dd><input type="text" className="form-control" /></dd>
                <dt>Verify code</dt>
                <dd>{captcha}</dd>
            </dl>
            <button>Login</button>

        </div>
    )
}