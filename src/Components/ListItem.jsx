/* eslint-disable react/prop-types */
export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.href}>
        <img src={props.imageSrc} alt={props.altSrc} />
      </a>
    </li>
  );
}
