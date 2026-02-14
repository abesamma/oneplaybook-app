/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      {/* <img
        className="w-12 h-12 mr-4 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      /> */}
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
