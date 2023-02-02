import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="av-re-page">
      <button onClick={() => setPage(page - 1)} className="btn-av-re-page">Page{page - 1}</button>
      <p>Page: {page}</p>
      <button onClick={() => setPage(page + 1)} className="btn-av-re-page">Page{page + 1}</button>
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="row characters">
          {characters.map((character) => (
            <div className="card" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
