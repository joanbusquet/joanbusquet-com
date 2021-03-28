import classes from "./SocialIcons.module.css"
import SOCIALMEDIA from "constants/socialMedia"

export default function SocialIcons() {
  return (
    <div className={classes.container}>
      {SOCIALMEDIA.map((social) => (
        <a
          className={classes.icon}
          key={social.name}
          href={social.link}
          rel="noreferrer"
          target="_BLANK"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
