import { useOutletContext } from "react-router-dom"
import PageTitle from "../PageTitle";
import type { MovieContext } from "../../types";
import AddMovieForm from "../AddMovieForm ";

const AddMoviePage = () => {
    const { onMovieAdded } : MovieContext = useOutletContext();

    return (
        <div>
            <PageTitle title = "Add a movie"/>
            <AddMovieForm onMovieAdded = {onMovieAdded} />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default AddMoviePage;