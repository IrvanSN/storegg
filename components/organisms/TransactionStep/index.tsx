import React from 'react';
import StepItem from '../../molecules/StepItem/index';

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            title="1. Start"
            icon="step-1"
            description1="Pilih salah satu game"
            description2="yang ingin kamu top up"
          />
          <StepItem
            title="2. Fill Up"
            icon="step-2"
            description1="Top up sesuai dengan"
            description2="nominal yang sudah tersedia"
          />
          <StepItem
            title="2. Fill Up"
            icon="step-3"
            description1="Siap digunakan untuk"
            description2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
