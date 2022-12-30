import Button from "@components/Button";
import { useUser } from "@hooks";

const Navbar = () => {
    const { auth } = useUser();
    return <nav className="m-5">

        {auth?.currentUser &&
            <Button onClick={() => auth.signOut()}>Sign out</Button>
        }
    </nav>
}

export default Navbar;