'use client';

import { useOptimistic } from 'react';
import { deleteReservation } from '@/app/_lib/actions';
import ReservationCard from './ReservationCard';

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (prev, bookingId) => prev.filter((booking) => booking.id !== bookingId),
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation();
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          onDelete={handleDelete}
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
