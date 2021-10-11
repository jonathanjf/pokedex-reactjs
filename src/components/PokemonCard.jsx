
async function PokemonCard(data) {
const { name, url } = data;
 
  const getInfos = await fetch(url);
  const { forms, habilities } = getInfos
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default PokemonCard;