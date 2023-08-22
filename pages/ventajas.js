import FlipCard from '../components/FlipCard/FlipCard';
import styles from '../styles/Ventajas.module.css';

export default function Servicio() {

  const FlipCardsItems = [
    {
      title: 'Incentiva el incremento a la línea de crédito',
      content: 'Al mejorar tu calificación en Buro de Crédito tienes la posibilidad que tu Banco te califique para incrementar la línea de crédito de tu Tarjeta',
    },
    {
      title: 'Se puede seguir utilizando la tarjeta de crédito',
      content: 'Tu tarjeta no queda bloqueada o inactiva, la puedes seguir utilizando de forma responsable conforme vayas liberando saldo en tu línea de crédito'
    },
    {
      title: 'Sin cobro de seguros que no solicitas',
      content: 'Nuestro trámite no está condicionado a la contratación de ningún tipo de seguro(vida, auto, hogar etc.)'
    },
    {
      title: 'El trámite es muy rápido y seguro',
      content: 'Te brindamos una respuesta eficiente de inmediato. Somos una empresa con altos estándares de seguridad y cuidado de los datos personales de nuestros clientes.'
    }
  ];

  return (
    <section className={styles.container}>
      <h1>Ventajas</h1>
      <div>
      {
          FlipCardsItems.map(item => <FlipCard title={item.title} content={item.content} invertColors={true} />)
      }
      </div>
    </section>
  )
}
