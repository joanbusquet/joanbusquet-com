import classes from "./Topics.module.css"
import Image from "next/image"
import Container from "components/Ui/Container/Container"
import CATEGORIES from "constants/categories"

export default function Topics() {
  return (
    <Container flex>
      <section className={classes.topics}>
        {CATEGORIES.map((category) => {
          return (
            <div className={classes.topic} key={category.name}>
              <div className={classes.icon}>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                />
              </div>
              <h2 className={classes.title}>{category.name}</h2>
              <p className={classes.description}>{category.description}</p>
            </div>
          )
        })}
      </section>
    </Container>
  )
}
