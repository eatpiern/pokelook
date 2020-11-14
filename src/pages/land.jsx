import React from 'react';
import Search from '../components/Search';
import { fetchPokemon } from '../functions/fetchPokemon';
import PokemonData from '../components/PokeData';
import { Alert, Button } from 'react-bootstrap';
import '../Land.css'

export default function HomePage() {
  
  const [pokemon, setPokemon] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon not found.');
      }
    }, 1500);
  }

  // function AlertDismissible() {
  //   const [show, setShow] = React.useState(true);

  //   return (
  //     <>
  //       <Alert show={show} variant="info">
  //         <Alert.Heading>Disclaimer</Alert.Heading>
  //         <p>
  //           The site is currently under development with the help of the community. If you would like to help, visit the{' '}
  //           <Alert.Link href='https://github.com/eatpiern/pokelook'>github repo</Alert.Link>, and develop! Thanks!
  //         </p>
  //         <hr />
  //         <div className="d-flex justify-content-end">
  //           <Button onClick={() => setShow(false)} variant="outline-primary">
  //             Close
  //           </Button>
  //         </div>
  //       </Alert>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="bg"></div>
      <div>
        {/* <AlertDismissible /> */}

        {error ? (<Alert variant='danger'>{errorMsg}</Alert>): null}
        <Search getPokemon={getPokemon} />
        {!loading && pokemon ? (
          <PokemonData
            name={pokemon.name}
            sprite={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
            types={pokemon.types} />
        ): null}
      </div>
    </>
  )
}