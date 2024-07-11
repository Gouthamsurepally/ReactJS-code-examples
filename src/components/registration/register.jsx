import './register.css';

export function RegisterComponent(){
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <form className="w-25 mt-4 border border-2 border-primary p-3 rounded rounded-3">
                <dl>
                    <h3><span className="bi bi-person-fill"></span>Register User</h3>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control"></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"></input></dd>
                    <dt>Email</dt>
                    <dd><input type="email" className="form-control"></input></dd>
                </dl>
                <button className="w-50 btn btn-secondary align-items-center">Register</button>
                
            </form>

        </div>
    )
}