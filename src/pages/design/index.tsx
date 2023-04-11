import CardItem from "components/CardItem"
import SkillCategory from "components/SkillCategory"
import styles from 'styles/design.module.css'
import { RiPenNibFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import Link from 'next/link'

interface DesignData {
    name: string;
    icon: IconType;
    url: string;
}

const DATA: DesignData[] = [
    {
        name: 'user interface',
        icon: RiPenNibFill,
        url: 'user-interface'
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
                                <Link href={`/design/${item.url}`} key={item.name} className={styles.link}>
                                    <CardItem data={item}  />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            
        </SkillCategory>
    )
}

export default Design