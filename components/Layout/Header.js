import { useState } from 'react';
import { useTarget } from '../../lib/context/TargetContext';

export default function Header() {
  const { targetType, TARGET_LABELS } = useTarget();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons">menu</span>
          </button>
          
          <div className="logo">
            <span className="material-icons">waves</span>
            <span>ダイビングギア</span>
          </div>
          
          <div className="target-display">
            <span>現在の表示: {TARGET_LABELS[targetType]}</span>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#guide" onClick={(e) => handleNavClick(e, '#newsletter-section')}>装備選びガイド</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '.footer')}>お問い合わせ</a>
          </nav>
        </div>
      </div>
    </header>
  );
}