import FlipCard from '../components/flipcard/flipcard';
import styles from '../styles/Beneficios.module.css';

export default function Servicio() {

  const FlipCardsItems = [
    {
      title: 'Refinanciamos tu deuda, para que comiences de nuevo',
      content: 'Pagamos tu deuda ofreciéndote un plan de pagos fijos, para que comiences de nuevo'
    },
    {
      title: 'La deuda se liquida al final del plazo que se eligió',
      content: 'Liquida tu deuda en el plazo de tu elección en cómodos pagos fijos'
    },
    {
      title: 'Te ayudamos a mejorar tu Historial Crediticio',
      content: 'Al momento que contratas el servicio con nosotros tu deuda se congela.'
    }
  ];

  return (
    <section className={styles.container}>
      <h1>Beneficios</h1>
      <div>
      {
        FlipCardsItems.map(item => <FlipCard title={item.title} content={item.content} />)
      }
      </div>
    </section>
  )
}
