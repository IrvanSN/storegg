import React, { ReactNode } from 'react';
import Image from 'next/image';
import NumberFormat from 'react-number-format';

interface CategoriesProps {
  children: ReactNode;
  spent: number;
  icon: string;
}

function Categories(props: CategoriesProps) {
  const { children, spent, icon } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${icon}.svg`} height={60} width={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumberFormat
              value={spent}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
