import CardItem from "components/CardItem"
import SkillCategory from "components/SkillCategory"
import styles from 'styles/design.module.css'
import { RiPenNibFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface DesignData {
    name: string;
    icon: IconType;
    url: string;
}

const DATA: DesignData[] = [
    {
        name: 'user interface',
        icon: RiPenNibFill,
        url: ''
    },
    {
        name: 'user exeperience',
        icon: RiPenNibFill,
        url: ''
    }
]

function Design() {
    const [data, setData] = useState<DesignData[]>([])

    useEffect(() => {
        setData(DATA)
    }, [])

    return (
        <SkillCategory>
            <div className={styles.cards}>
                <div className={styles.cardsSection}>
                    {
                        data.map((item: any) => {
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