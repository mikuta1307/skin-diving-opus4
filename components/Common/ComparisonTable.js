import { useTarget } from '../../lib/context/TargetContext';

export default function ComparisonTable() {
  const { targetType, TARGET_TYPES } = useTarget();

  const getTableData = () => {
    switch (targetType) {
      case TARGET_TYPES.BEGINNER:
        return {
          headers: ['', 'ビギナー', 'ステップアップ', 'コンフォート'],
          rows: [
            {
              label: '価格',
              values: ['¥15,000', '¥25,000', '¥35,000']
            },
            {
              label: 'おすすめポイント',
              values: ['最軽量・低価格', 'バランス重視', '快適性重視']
            },
            {
              label: '付属品',
              values: ['DVD・講習券', 'メンテナンスキット', 'キャリーバッグ']
            },
            {
              label: '保証期間',
              values: ['6ヶ月', '6ヶ月', '1年']
            },
            {
              label: '初心者おすすめ度',
              values: [5, 5, 4],
              isRating: true
            }
          ]
        };

      case TARGET_TYPES.EXPERIENCED:
        return {
          headers: ['', 'パフォーマンス', 'プロフェッショナル', 'トラベラー'],
          rows: [
            {
              label: '価格',
              values: ['¥32,000', '¥48,000', '¥38,000']
            },
            {
              label: '主な特徴',
              values: ['カーボンフィン', 'チタン素材', 'コンパクト収納']
            },
            {
              label: '推進力',
              values: ['+30%', '+40%', '+20%']
            },
            {
              label: '重量',
              values: ['軽量', '超軽量', '最軽量']
            },
            {
              label: '上級者向け度',
              values: [4, 5, 3],
              isRating: true
            }
          ]
        };

      case TARGET_TYPES.GIFT:
        return {
          headers: ['', 'スターター', 'カップル', 'プレミアム'],
          rows: [
            {
              label: '価格',
              values: ['¥20,000', '¥45,000', '¥50,000']
            },
            {
              label: 'セット内容',
              values: ['1人分', '2人分', '1人分+特典']
            },
            {
              label: 'カラー選択',
              values: ['3色', 'ペアカラー', 'オーダーメイド']
            },
            {
              label: 'ギフト特典',
              values: ['体験チケット', 'ペアレッスン', 'VIPツアー']
            },
            {
              label: 'ギフト人気度',
              values: [5, 5, 4],
              isRating: true
            }
          ]
        };

      default:
        return {
          headers: ['', 'セット1', 'セット2', 'セット3'],
          rows: []
        };
    }
  };

  const tableData = getTableData();

  return (
    <section id="comparison" className="section comparison-section">
      <div className="container">
        <h2 className="section-title">セット比較表</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                {tableData.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, i) => (
                <tr key={i}>
                  <td className="row-label">{row.label}</td>
                  {row.values.map((value, j) => (
                    <td key={j}>
                      {row.isRating ? (
                        <div className="rating-stars">
                          {[...Array(5)].map((_, k) => (
                            <span key={k} className="material-icons">
                              {k < value ? 'star' : 'star_border'}
                            </span>
                          ))}
                        </div>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}