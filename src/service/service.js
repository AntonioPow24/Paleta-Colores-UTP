

const ROUTE = "https://reqres.in/api/colors?per_page=9";

export const getApi = async function (page_number) {
    try {
        const response = await fetch(`${ROUTE}&page=${page_number}`);
        const movies = await response.json();
        console.log(movies);
        return movies
    } catch (error) {
        alert(JSON.stringify(error))
    }
};

