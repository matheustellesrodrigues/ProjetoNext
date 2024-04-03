import Link from "next/link";


interface NavBarProps{
    active: "dashboard" | "movimentacoes" | "categorias"
}

export default function NavBar(props: NavBarProps){

    const { active } = props


    return(
        <nav className="flex justify-between items-center bg-slate-900 w-full px-5 py-3"> 
        <h1 className="text-3xl font-bold">Cash FLow Pro</h1>
        <ul className="flex gap-8">
          <li className="border-b-8 border-pink-500 pb-2"><Link href="/">Dashboard</Link></li>
          <li><Link href="/movimentacoes">Movimentações</Link></li>
          <li><Link href="/categorias">Categoria</Link></li>
          
        </ul>

        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/150" alt="avatar do usuario" />
        </div>
      </nav>
    )
}