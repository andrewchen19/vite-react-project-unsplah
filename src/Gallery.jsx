import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
// import custom Axios instance
import customFetch from "./utilize";

const Gallery = () => {
  // use custom Hook
  const { searchText } = useGlobalContext();

  // React Query
  const { isLoading, data, error } = useQuery({
    queryKey: ["images", searchText],
    queryFn: () => customFetch(`/search/photos?query=${searchText}`),
  });

  // conditional rendering
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (error) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  //  console.log(data);

  // 輸入的內容找不到任何相關的 images
  const results = data.data.results;

  if (results.length === 0) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((image) => {
        const { id, urls, description } = image;
        return (
          <img key={id} src={urls.regular} alt={description} className="img" />
        );
      })}
    </section>
  );
};

export default Gallery;
