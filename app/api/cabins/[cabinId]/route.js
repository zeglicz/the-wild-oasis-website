import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service';

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const numericCabinId = Number(cabinId);

    const [cabin, bookedDates] = await Promise.all([
      getCabin(numericCabinId),
      getBookedDatesByCabinId(numericCabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: 'Cabin not found' }, { status: 404 });
  }
}
