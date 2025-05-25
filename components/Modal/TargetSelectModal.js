import { useTarget } from '../../lib/context/TargetContext';

export default function TargetSelectModal() {
  const { isModalOpen, setIsModalOpen, changeTargetType, TARGET_TYPES, targetType } = useTarget();

  if (!isModalOpen) return null;

  const options = [
    {
      type: TARGET_TYPES.BEGINNER,
      icon: '🏊‍♂️',
      title: 'これから始める初心者',
      description: 'スキンダイビングは初めて。何を買えばいいか知りたい'
    },
    {
      type: TARGET_TYPES.EXPERIENCED,
      icon: '🤿',
      title: '体験済み・装備検討中',
      description: '体験ダイビングは経験済み。自分の装備が欲しい'
    },
    {
      type: TARGET_TYPES.GIFT,
      icon: '🎁',
      title: 'プレゼントを探す方',
      description: '大切な人へのギフトとして装備を探している'
    }
  ];

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">あなたのタイプは？</h2>
        <p className="modal-subtitle">最適な装備をご提案するため、該当するものをお選びください</p>
        
        <div className="modal-options">
          {options.map((option) => (
            <label key={option.type} className="modal-option">
              <input
                type="radio"
                name="targetType"
                value={option.type}
                checked={targetType === option.type}
                onChange={() => {}}
              />
              <div 
                className="option-card"
                onClick={() => changeTargetType(option.type)}
              >
                <div className="option-icon">{option.icon}</div>
                <div className="option-content">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>
              </div>
            </label>
          ))}
        </div>
        
        <div className="modal-actions">
          <button 
            className="modal-cancel"
            onClick={() => setIsModalOpen(false)}
          >
            キャンセル
          </button>
          <button 
            className="btn modal-confirm"
            onClick={() => setIsModalOpen(false)}
          >
            決定
          </button>
        </div>
      </div>
    </div>
  );
}