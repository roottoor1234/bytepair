export function UnderConstruction() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="text-5xl mb-4">🚧</div>
        <h1 className="text-3xl font-bold mb-4">Η ιστοσελίδα μας είναι προσωρινά εκτός λειτουργίας</h1>
        <p className="text-lg text-gray-300 mb-6">
          Πραγματοποιούμε εργασίες συντήρησης και σύντομα θα είμαστε ξανά κοντά σας. Ευχαριστούμε για την κατανόησή σας.
        </p>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} BytePair
        </div>
      </div>
    </div>
  );
}
