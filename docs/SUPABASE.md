# Supabase Schema & Data

The Wild Oasis uses **Supabase** for database, authentication, and storage.

## Tables

### `cabins`

- `id` (PK)
- `name`
- `maxCapacity`
- `regularPrice`
- `discount`
- `description`
- `image` (storage URL)

### `guests`

- `id` (PK)
- `fullName`
- `email`
- `nationalID`
- `country`
- `countryFlag`

### `bookings`

- `id` (PK)
- `createdAt`
- `startDate`
- `endDate`
- `numNights`
- `numGuests`
- `cabinId` (FK → cabins)
- `guestId` (FK → guests)
- `status` (`unconfirmed|checked-in|checked-out`)
- `hasBreakfast` (boolean)
- `observations`
- `isPaid` (boolean)
- `totalPrice`

### `settings`

- `id` (PK)
- `minBookingLength`
- `maxBookingLength`
- `maxGuestsPerBooking`
- `breakfastPrice`

### `users`

- Supabase Auth managed
- Extended with profile table if needed

## Storage

- Bucket: `cabin-images` (public read, auth write)

## Security

- Row Level Security enabled
- Policies:
  - Authenticated users only
  - Admin-only actions (user creation, settings updates)
