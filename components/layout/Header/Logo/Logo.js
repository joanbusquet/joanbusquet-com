import Image from "next/image"
import Link from "next/link"
export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image
          src="/images/ui/logo.png"
          alt="desarrollo web"
          width={200}
          height={80}
        />
      </a>
    </Link>
  )
}
