import { useContext } from "react"
import { PokeBallSmall } from "../../assets/pokeball"
import { PokemonList } from "../../components/PokemonList"
import styles from './style.module.scss'
import { PokemonContext } from "../../context/PokemonContext"
import { Pagination } from "../../components/Pagination"
import { usePagination } from "../../hooks/usePagination"
import { Filters } from "../../components/Filters"

export const Home = () => {

    const {pokemonsFiltered} = useContext(PokemonContext);
    const {page, nextPage, previousPage, backToHome} = usePagination();

    let perPage = 12

    return (
        <div className={styles.home}>
            <header>
                <div onClick={backToHome}>
                    <PokeBallSmall />
                    <span>Pokédex</span>
                </div>
            </header>
            <Filters/>
            <PokemonList page={page} perPage={perPage} pokemonsUrls={pokemonsFiltered}/>
            <Pagination
                page={page}
                perPage={perPage}
                nextPage={nextPage}
                previousPage={previousPage}
                maxItems={pokemonsFiltered?.length!}/>
        </div>
    )
}