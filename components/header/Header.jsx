import styles from "@/styles/Header.module.css"
import Nav from './Nav'
import MainHead from "./MainHead"

const Header = () => {
    return (
        <div className={styles.mainHeader}>
            <Nav />
            <MainHead />
        </div>
    )
}

export default Header