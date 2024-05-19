'use client';

export const ConfirmButton = () => {
  return (
    <button
      onClick={() => window.location.reload()}
      className="bg-blue-700 text-white p-4 rounded-md mt-4 hover:bg-blue-500 focus:bg-blue-800 w-full"
    >
      Proceed to Order Summary
    </button>
  );
};
