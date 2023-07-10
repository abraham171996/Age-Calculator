import Input from "./Input"
import styles from "./main.module.css"
import arrow from "../assets/image/icon-arrow.svg"
const Main = () => {
    const inputs = [
        {labelText:"Day",htmlFor:"day",placeholder:"DD",type:"number"},
        {labelText:"Month",htmlFor:"month",placeholder:"MM",type:"number"},
        {labelText:"Year",htmlFor:"year",placeholder:"YYYY",type:"number"}
    ]
  return (
    <main>
        <section className={styles.first}>
        <div className={styles.card}>
        <ul className={styles.inptLists}>
            {
                inputs.map((e)=>(
                        <Input
                        key={crypto.randomUUID()}
                        labelText={e.labelText}
                        htmlFor={e.htmlFor}
                        placeholder={e.placeholder}
                        type={e.type}
                        />
                    )
                )
            }
            
        </ul>
        <div className={styles.update}>
        <hr />
        <figure>
        <img src={arrow} alt="" />
        </figure>
        </div>
        <div className={styles.result}>
            
            <div className={styles.resultRow}>
                <p>--</p>
                <h1>years</h1>
            </div>
            <div className={styles.resultRow}>
                <p>--</p>
                <h1>months</h1>
            </div>
            <div className={styles.resultRow}>
                <p>--</p>
                <h1>days</h1>
            </div>
        </div>
        </div>
        
        </section>
        
    </main>
  )
}

export default Main