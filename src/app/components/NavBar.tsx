import Link from "next/link";


interface NavBarProps{
    active: "Página Inicial" | "Atendimento" | "Login"
}

export default function NavBar(props: NavBarProps){

    const { active } = props


    return(
        <nav className="flex justify-between items-center bg-slate-700 w-full px-5 py-3"> 
        <h1 className="text-3xl font-bold">SleepGood</h1>
        <ul className="flex gap-8">
          <li className="pb-2"><Link href="/">Pagina Inicial</Link></li>
          <li><Link href="/movimentacoes">Atendimento</Link></li>
          <li><Link href="/categorias">Login</Link></li>
          
        </ul>

        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://github.com/matheustellesrodrigues.png" alt="avatar do usuario" />
        </div>
      </nav>
    )
}