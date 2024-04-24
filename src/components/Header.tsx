import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

    const {pathname} = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    console.log(categories)

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <header className={isHome ? 'bg-header' : 'bg-slate-800'}>
            <div className='mx-auto container px-5 py-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='w-32' src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink 
                            to='/'
                            className={({isActive}) => 
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >Inicio</NavLink>
                        <NavLink 
                            to='/favorites'
                            className={({isActive}) => 
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >Favoritos</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form className="bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 md:w-1/2 2xl:1/3" action="">
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingedient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes</label>
                            <input 
                                id="ingedient"
                                name="ingedient"
                                type="text" 
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o ingrediente. Ej. Vodka, Tequila."
                                />
                        </div>

                        <div className="space-y-4">
                            <label 
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>
                            <select 
                                name="category" 
                                id="category"
                                className="p-3 w-full rounded-lg focus:outline-none">
                                <option value="">-- Seleccione ---</option>
                                {categories.drinks.map(category => (
                                    <option 
                                        value={category.strCategory}
                                        key={category.strCategory}
                                    >{category.strCategory}</option>
                                ))}
                            </select>
                        </div>
                        <input 
                            type="submit"
                            value='Buscar Recetas'
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" 
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
