import CareerHeader from 'components/CareerHeader';
import DiagramFrame from 'components/DiagramFrame';
import styles from 'styles/UserInterface.module.css'

function UserInterface() {
    return (
        <DiagramFrame>
            <div className={styles.container}>
                <div className={styles.header}>
                    <CareerHeader 
                        title="User Interface Designer"
                        desc="The latest and complete guide for user interface designer 2023"
                        prevLink='design'
                        currLink='ui'
                    />
                </div>
                <section className={styles.content}>
                    this is me
                </section>
            </div>
        </DiagramFrame>
    )
}

export default UserInterface;
//TODO - convert the header to a component that would be on every single career page n