interface GoogleMapProps {
  apiKey: string;
  placeId: string;
}

export function GoogleMap({ apiKey, placeId }: GoogleMapProps) {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${apiKey}`}
      ></iframe>
    </div>
  );
}
