import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Row from './Row';
import { getDetailTransaction } from '../../../services/player';

export default function TransactionDetailContent() {
  const { query, isReady } = useRouter();
  const [detailTransaction, setDetailTransaction] = useState({
    _id: '',
    accountUser: '',
    name: '',
    historyVoucherTopup: {
      gameName: '',
      category: '',
      coinName: '',
      coinQuantity: '',
      price: '',
      thumbnail: '',
    },
    historyPayment: {
      name: '',
      type: '',
      bankName: '',
      noRekening: '',
    },
    status: '',
  });

  const getTransactionDetailAPI = useCallback(async (id) => {
    const data = await getDetailTransaction(id);
    data.data.historyVoucherTopup.thumbnail = `${process.env.NEXT_PUBLIC_IMG}/${data.data.historyVoucherTopup.thumbnail}`;
    console.log(data.data);
    setDetailTransaction(data.data);
  }, []);

  useEffect(() => {
    if (isReady) {
      getTransactionDetailAPI(query.id);
    }
  }, [isReady]);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #{detailTransaction._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={detailTransaction.historyVoucherTopup.thumbnail}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {detailTransaction.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {detailTransaction.historyVoucherTopup.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`fw-medium text-center label ${detailTransaction.status} m-0 rounded-pill`}
                  >
                    {detailTransaction.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row
                  label="Your Game ID"
                  value={detailTransaction.accountUser}
                />
                <Row label="Order ID" value={`#${detailTransaction._id}`} />
                <Row
                  label="Item"
                  value={`${detailTransaction.historyVoucherTopup.coinQuantity} ${detailTransaction.historyVoucherTopup.coinName}`}
                />
                <Row label="Price" value={42280500} />
                <Row label="Tax (10%)" value={4228000} />
                <Row
                  label="Total"
                  value={46508500}
                  className="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row label="Your Account Name" value={detailTransaction.name} />
                <Row
                  label="Type"
                  value={detailTransaction.historyPayment.type}
                />
                <Row
                  label="Bank Name"
                  value={detailTransaction.historyPayment.bankName}
                />
                <Row
                  label="Bank Account Name"
                  value={detailTransaction.historyPayment.name}
                />
                <Row
                  label="Bank Number"
                  value={detailTransaction.historyPayment.noRekening}
                />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
