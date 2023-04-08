import CardItem from "components/CardItem"
import SkillCategory from "components/SkillCategory"
import styles from 'styles/design.module.css'
import {DATA} from '../data/DummyData'

function Design() {
    const dataToDisplay = DATA.find((item) => item.name === 'design')

    return (
        <SkillCategory>
            <div className={styles.cards}>
                <div className={styles.cardsSection}>
                    {
                        dataToDisplay!.cat.map((item: any) => {
                            return (
                                <div key={item.name}>
                                    <CardItem data={item}  />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </SkillCategory>
    )
}

export default Design