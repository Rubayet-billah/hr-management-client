import { useEffect, useState } from "react";


const useRole = (email, roleState) => {
    const [role, setRole] = useState('');
    const [roleLoader, setRoleLoader] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://hr-management-server.vercel.app/admins/${email}`)
                .then(res => {
                    // console.log(res)
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    setRole(data.isSuperAdmin)
                })
        }
    }, [email])
    return [role]
}

export default useRole;