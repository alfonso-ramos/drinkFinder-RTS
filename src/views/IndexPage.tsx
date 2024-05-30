import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCart from "../components/DrinkCart"

export default function IndexPage() {
    const drinks =  useAppStore((state) => state.drinks)

    const hasDrinks = useMemo(() => drinks.drinks.length, [drinks])
    return (
        <>
            <h1 className="text-6xl font-extralight">Recetas</h1>

            {hasDrinks ? (
                <div className="container p-5 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
                    {drinks.drinks.map(drink => (
                        <DrinkCart 
                        key={drink.idDrink}
                        drink={drink}
                        />
                    ))}
                </div>
            ) : (
                <p className="my-16 text-center text-2xl">
                    No hay resultados aún, utiliza el formulario para buscar recetas
                </p>
            )}
        </>
    )
}
