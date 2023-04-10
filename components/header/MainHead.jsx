import styles from "@/styles/MainHead.module.css"
import Image from "next/image"
import bg from "../../public/bg_image.jpg"

const MainHead = () => {
    return (
        <div className={styles.mainHead}>
            <div className={styles.firstDiv}>
                <h3>Metro Youth Diversion Center</h3>
                <h1>Empowering Youth for a <span>Brighter Future</span></h1>
                <p>Our Mission is to create a partnership with youth, families, youth service providers and community stakeholders for the advancement and well-being of our youth as productive and contributing citizens of the community.</p>
                <div>
                    <button>Our Programs</button>
                    <button>Donate</button>
                </div>
            </div>
            <div className={styles.imageDiv}>
                <Image className={styles.bgImage} src={bg} alt="bg" width={736} height={925} />
                <div></div>
            </div>
        </div>
    )
}

export default MainHead