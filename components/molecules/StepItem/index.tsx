import React from 'react';

interface StepProps {
  title: string;
  icon: 'step-1' | 'step-2' | 'step-3';
  description1: string;
  description2: string;
}

export default function StepItem(props: StepProps) {
  const { title, icon, description1, description2 } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/transaction-${icon}.svg`}
          alt="step-1"
          className="mb-30"
          width={80}
          height={80}
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {description1}
          <br />
          {description2}
        </p>
      </div>
    </div>
  );
}
