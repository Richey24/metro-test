import styles from "@/styles/Nav.module.css"
import Image from "next/image"
import logo from "../../public/logo_blue.svg"
import down from "../../public/Icon.svg"

const Nav = () => {
    const handler = () => {
        alert("test")
    }
    return (
        <div className={styles.mainNavDiv}>
            <div>
                <Image className={styles.logo} src={logo} alt="logo" width={60} height={49} />
                <p className={styles.language}>English <Image src={down} alt="down" width={8} height={4} /></p>
            </div>
            <div>
                <p onClick={handler}>Home</p>
                <p>Programs</p>
                <p>Our Work</p>
                <p>About</p>
                <p>Events</p>
                <p>Blog</p>
                <p>Contact</p>
                <button>Donate</button>
            </div>
        </div>
    )
}

export default Nav