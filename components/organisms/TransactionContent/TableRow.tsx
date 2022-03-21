import React from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface TableRowProps {
  image: string;
  game: string;
  categories: string;
  item: string;
  price: number;
  status: string;
  href: string;
}

export default function TableRow(props: TableRowProps) {
  const { image, game, categories, item, price, status, href } = props;
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start thumbnail-game me-3 mb-lg-0 mb-3"
          src={image}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {game}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {categories}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status}`} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href={href}>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
