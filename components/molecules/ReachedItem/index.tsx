import React from 'react';

interface ReachedItemProps {
  title: string;
  description: string;
}

export default function Index(props: ReachedItemProps) {
  const { title, description } = props;
  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {title}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {description}
      </p>
    </div>
  );
}