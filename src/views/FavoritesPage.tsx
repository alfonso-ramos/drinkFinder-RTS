import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {
    const favorites = useAppStore((state) => state.favorites)

    const hasFavorites = useMemo(() => favorites.length, [favorites])
    return (
        <>
            <h1 className="text-6xl font-extrabold">Favorites</h1>
            {hasFavorites ? (
                <div className="container p-5 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10">
                    {favorites.map(recipe => (
                        <DrinkCard 
                            key={recipe.idDrink}
                            drink={recipe}
                        />
                    ))}
                </div>
            ) : <p className="my-10 text-center text-2xl">Your favorites will be here</p>}
        </>
    )
}