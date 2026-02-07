import { Suspense } from "react";
import LocationsClient from "./LocationsClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading locations...</div>}>
      <LocationsClient />
    </Suspense>
  );
}
