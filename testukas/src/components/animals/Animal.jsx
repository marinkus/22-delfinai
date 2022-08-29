import rand from "../rand";
import colors from '../colors';
const Animal = ({ url, animal }) => {
  return (
    <>
      <figure className="box"><img className="Image" src={url} alt={animal + "-animal"} /><figcaption style={{
        backgroundColor: colors[rand(0, colors.length - 1)]
      }} className="title" >{animal}</figcaption></figure>
    </>
  );
};

export default Animal;
