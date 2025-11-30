import React, { useMemo, useState } from "react";

const daysBetween = (start?: string, end?: string) => {
  if (!start || !end) return 0;
  const s = new Date(start);
  const e = new Date(end);
  const diff = Math.ceil((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
};

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const nights = useMemo(() => daysBetween(checkIn, checkOut), [checkIn, checkOut]);
  const total = useMemo(() => nights * price, [nights, price]);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg border">
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-semibold">${price}</h3>
        <span className="text-sm text-gray-600">night</span>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} type="date" className="border p-2 w-full mt-2 rounded" />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} type="date" className="border p-2 w-full mt-2 rounded" />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Nights</p>
          <p className="font-semibold">{nights}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total</p>
          <p className="font-semibold">${total}</p>
        </div>
      </div>

      <button
        disabled={nights === 0}
        className={`mt-4 w-full py-2 rounded text-white ${nights === 0 ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
