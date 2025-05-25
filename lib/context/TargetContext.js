import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const TargetContext = createContext();

export const TARGET_TYPES = {
  BEGINNER: 'beginner',
  EXPERIENCED: 'experienced',
  GIFT: 'gift'
};

export const TARGET_LABELS = {
  [TARGET_TYPES.BEGINNER]: 'これから始める初心者',
  [TARGET_TYPES.EXPERIENCED]: '体験済み・装備検討中',
  [TARGET_TYPES.GIFT]: 'プレゼント用'
};

export function TargetProvider({ children }) {
  const [targetType, setTargetType] = useState(TARGET_TYPES.BEGINNER);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const savedType = Cookies.get('targetType');
    const hasVisited = Cookies.get('hasVisited');
    
    if (savedType && Object.values(TARGET_TYPES).includes(savedType)) {
      setTargetType(savedType);
    }
    
    if (!hasVisited) {
      setTimeout(() => {
        setIsModalOpen(true);
        Cookies.set('hasVisited', 'true', { expires: 365 });
      }, 1000);
    }
    setIsFirstVisit(!hasVisited);
  }, []);

  const changeTargetType = (type) => {
    setTargetType(type);
    Cookies.set('targetType', type, { expires: 365 });
    setIsModalOpen(false);
  };

  return (
    <TargetContext.Provider value={{
      targetType,
      changeTargetType,
      isModalOpen,
      setIsModalOpen,
      isFirstVisit,
      TARGET_TYPES,
      TARGET_LABELS
    }}>
      {children}
    </TargetContext.Provider>
  );
}

export const useTarget = () => {
  const context = useContext(TargetContext);
  if (!context) {
    throw new Error('useTarget must be used within TargetProvider');
  }
  return context;
};