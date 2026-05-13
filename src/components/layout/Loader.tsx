export default function Loader() {
  return (
    <div className="grid min-h-screen w-full place-content-center bg-[#f5f5f5]">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-[#42446e] border-t-transparent"
        role="status"
        aria-label="Carregando"
      />
    </div>
  );
}
