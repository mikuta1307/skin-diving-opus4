import { useTarget } from '../../lib/context/TargetContext';

export default function HeroSection() {
  const { targetType, TARGET_TYPES } = useTarget();

  const heroContent = {
    [TARGET_TYPES.BEGINNER]: {
      title: 'スキンダイビングの第一歩は、\n正しい装備選びから',
      subtitle: 'プロが厳選した初心者向けスターターセット完全ガイド',
      cta: '初心者向けセットを見る',
      image: '/svg/hero-beginner.svg',
      color: 'var(--primary-color)',
      link: '#products'
    },
    [TARGET_TYPES.EXPERIENCED]: {
      title: 'レンタル卒業！\n自分だけの装備で海を楽しもう',
      subtitle: '体験済みのあなたに最適なこだわりセットをご紹介',
      cta: 'おすすめセットを比較する',
      image: '/svg/hero-experienced.svg',
      color: 'var(--secondary-color)',
      link: '#comparison'
    },
    [TARGET_TYPES.GIFT]: {
      title: '特別な人に、特別な体験を\nスキンダイビングギフトセット',
      subtitle: 'サイズ選びも安心の交換保証付きセット',
      cta: 'ギフトセットを選ぶ',
      image: '/svg/hero-gift.svg',
      color: 'var(--accent-color)',
      link: '#products'
    }
  };

  const content = heroContent[targetType];

  const handleCtaClick = () => {
    const element = document.querySelector(content.link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={{ '--hero-color': content.color }}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content fade-in">
            <h1 className="hero-title">{content.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}</h1>
            <p className="hero-subtitle">{content.subtitle}</p>
            <button className="btn hero-cta pulse" onClick={handleCtaClick}>
              {content.cta}
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
          <div className="hero-image">
            <img src={content.image} alt="スキンダイビング" />
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="material-icons">expand_more</span>
        </div>
      </div>
    </section>
  );
}