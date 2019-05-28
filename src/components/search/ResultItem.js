import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';

import '../../css/ResultItem.css';

const ResultItem = props => {
  // --------------
  // Item builder:
  // --------------
  const buildItems = (_items, _class) => {
    const dom = _items.map((element, i) => (
      <Link
        key={i}
        className={'Categories ' + _class}
        to={`/buscar/categorías/${element.id}/asc`}
      >
        {element.label}
      </Link>
    ));
    return <div className="ChipContainer">{dom}</div>;
  };

  const {
    company_id,
    title,
    description,
    categories,
    subcategories
  } = props.data;

  const link = '/empresa/' + company_id;

  return (
    <div className="ResultItem">
      <div className="Left">
        <ButtonBase component={Link} to={link} className="ButtonBase">
          <h5>{title}</h5>
          <h6>{description}</h6>
        </ButtonBase>

        {buildItems(categories, 'main-bg-color')}
        {buildItems(subcategories, 'sec-bg-color')}
      </div>
    </div>
  );
};

export default ResultItem;
