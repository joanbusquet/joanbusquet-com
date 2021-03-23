import classes from "./SocialIcons.module.css"

// Icons
import Youtube from "components/icons/social/Youtube"
import Twitch from "components/icons/social/Twitch"
import Twitter from "components/icons/social/Twitter"
import Linkedin from "components/icons/social/Linkedin"
import GitHub from "components/icons/social/GitHub"

export default function SocialIcons() {
  return (
    <div className={classes.container}>
      <Youtube className={classes.icon} />
      <Twitch className={classes.icon} />
      <Twitter className={classes.icon} />
      <Linkedin className={classes.icon} />
      <GitHub className={classes.icon} />
    </div>
  )
}
