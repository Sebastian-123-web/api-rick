import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage, characters }) {
  return (
    <header className="av-re-page">
      {
        page === 1 ? (<div></div>) : (<button onClick={() => setPage(page - 1)} className="btn-av-re-page">{page - 1} Back</button>)
      }
      <p>Page: {page}</p>
      {
        characters < 20 ? (
          <div></div>
        ) : (
          <button onClick={() => setPage(page + 1)} className="btn-av-re-page">Next {page + 1}</button>
        )
      }
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
      <NavPage page={page} setPage={setPage} characters={characters.length} />
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
      <NavPage page={page} setPage={setPage} characters={characters.length} />
    </div>
  );
}
