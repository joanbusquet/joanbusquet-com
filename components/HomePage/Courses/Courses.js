import Image from "next/image"
import classes from "./Courses.module.css"

import SectionTitle from "components/Ui/SectionTitle/SectionTitle"

// Data
import COURSES from "constants/courses"

export default function Courses() {
  return (
    <section>
      <SectionTitle title="Cursos gratis" />
      <div className={classes.courses}>
        {COURSES.map((category) => {
          return (
            <div className={classes.course} key={category.name}>
              <div className={classes.icon}>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                />
              </div>
              <h2 className={classes.title}>{category.name}</h2>
              <p className={classes.text}>{category.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
