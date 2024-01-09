import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { unstable_noStore as noStore } from 'next/cache';

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };

export default async function TableWrapper() {
const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
} = await fetchCardData();



return (
    <>
    {/* NOTE: comment in this code when you get to this point in the course */}

    <Card title="Collected" value={totalPaidInvoices} type="collected" />
    <Card title="Pending" value={totalPendingInvoices} type="pending" />
    <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
    <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
    />
    </>
);
}
  

  export async function fetchCardData() {
    noStore();
    try {
      // You can probably combine these into a single SQL query
      // However, we are intentionally splitting them to demonstrate
      // how to initialize multiple queries in parallel with JS.
      const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
      const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
      const invoiceStatusPromise = sql`SELECT
           SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
           SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
           FROM invoices`;
  
      const data = await Promise.all([
        invoiceCountPromise,
        customerCountPromise,
        invoiceStatusPromise,
      ]);
  
      const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
      const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
      const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
      const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');
  
      return {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
  }
  

  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }
  