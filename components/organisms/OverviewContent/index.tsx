import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Categories from './Categories';
import TableRow from './TableRow';
import { getMemberOverview } from '../../../services/player';
import {
  HistoryTransactionTypes,
  TopupCategoriesTypes,
} from '../../../services/data-types';

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.history);
    }
  }, []);

  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopupCategoriesTypes) => {
                return (
                  <Categories
                    key={item._id}
                    spent={item.value}
                    icon="categories-desktop"
                  >
                    {item.name}
                  </Categories>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: HistoryTransactionTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      image={`${process.env.NEXT_PUBLIC_IMG}/${item.historyVoucherTopup.thumbnail}`}
                      game={item.historyVoucherTopup.gameName}
                      categories={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      price={item.historyVoucherTopup.price}
                      status={item.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
