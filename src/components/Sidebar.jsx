const NavLink = {
    Home: {name: 'Home', url: '#home'},
    About: {name: 'About', url: '#about'},
    Skill: {name: 'Skills', url: '#skills'},
    Services: {name: 'Services', url: '#services'},
    Projects: {name: 'Projects', url: '#projects'},
    Contact: {name: 'Contact', url: '#contact'},
    Blog: {name: 'Blog', url: '#blog'}

}

const Sidebar = ({setOpen}) => {
    return (
        <section  className="bg-dark-gray md:hidden absolute right-0 top-16 w-full p-4 shadow-sm" id="sidebar">

            <nav>
                <ul className="flex flex-col justify-start items-center">
                    {
                        Object.values(NavLink).map((link, ) => (
                            <li className="my-2" key={link.name}>
                                <a
                                    onClick={() => setOpen(false)}
                                    className="text-brand  hover:text-brand-dark text-body"
                                    href={link.url}>
                                    {link.name}
                                </a>
                            </li>
                        ))

                    }
                </ul>
            </nav>
        </section>

    )
}
export default Sidebar
