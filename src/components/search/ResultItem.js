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
        to={'/categorias/' + element.id}
      >
        {element.label}
      </Link>
    ));
    return <div className="ChipContainer">{dom}</div>;
  };

  return (
    <div className="ResultItem">
      <div className="Left">
        <ButtonBase
          component={Link}
          to={'/empresa/' + props.data.company_id}
          className="ButtonBase"
        >
          <h5>{props.data.title}</h5>
          <h6>{props.data.description}</h6>
        </ButtonBase>

        {buildItems(props.data.categories, 'main-bg-color')}
        {buildItems(props.data.subcategories, 'sec-bg-color')}
      </div>
    </div>
  );
};

export default ResultItem;
