import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'Pavel',
            email: 'pavel@gmail.com',
        })
    };
    const handleLogout = () => {
        setUser(null)
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{user?.name ? `User name is ${user?.name}` : `User is not logged in...`}</div>
            <div>{user?.email ? `User email is ${user?.email}` : null}</div>
        </div>
    )
}