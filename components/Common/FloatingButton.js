import { useTarget } from '../../lib/context/TargetContext';

export default function FloatingButton() {
  const { setIsModalOpen } = useTarget();

  return (
    <button 
      className="floating-button"
      onClick={() => setIsModalOpen(true)}
      aria-label="ターゲット変更"
    >
      <span className="material-icons">swap_horiz</span>
      <span className="floating-button-text">タイプ変更</span>
    </button>
  );
}