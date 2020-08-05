import * as React from "react";
import {Link} from "react-router-dom";

interface Props {
  id: number,
  title: string
}

const Breadcrumbs: React.FunctionComponent<Props> = (props: Props) => {
  const {id, title} = props;

  return <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}`} className="breadcrumbs__link">{title}</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link to="#" className="breadcrumbs__link">Add review</Link>
      </li>
    </ul>
  </nav>;
};

export default Breadcrumbs;
