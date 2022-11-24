import Link from "next/link"
import { useRouter } from "next/router"
import { Container } from "../UI/Container"

const Header = () => {
  const router = useRouter()
  const NavLinks = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/blog",
      name: "blog",
    },
    {
      path: "/about",
      name: "about",
    },
  ]

  return (
    <nav className="bg-slate-700 text-slate-100 h-20 flex">
      <Container center padding={4} classes="flex justify-between m-auto">
        <Link href="/" className="text-lg md:text-3xl font-bold">
          Ibrahim_Rezq
        </Link>
        <ul className="flex justify-between md:text-lg items-center capitalize ">
          {NavLinks.map((link) => {
            return (
              <li
                key={link.path}
                className={`mx-4 hover:border-b-2 hover:text-slate-100 duration-75 ${
                  link.path === router.pathname
                    ? "border-b-2"
                    : "text-slate-300"
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </nav>
  )
}

export default Header
