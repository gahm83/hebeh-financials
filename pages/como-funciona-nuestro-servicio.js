import Head from 'next/head';
import Accordion from '../components/Accordion/Accordion';
import styles from '../styles/HowItworks.module.css';

export default function Servicio() {

  const accordionData = [
    {
      title: 'Evaluación de la situación financiera:',
      content: 'Comenzamos por realizar una evaluación exhaustiva de la situación financiera de nuestros clientes. Analizamos sus ingresos, gastos, deudas existentes y patrones de pago para comprender plenamente su situación y necesidades financieras.'
    },
    {
      title: 'Diseño de un plan de refinanciamiento:',
      content: 'Una vez que hemos recopilado la información relevante, diseñamos un plan de refinanciamiento personalizado para cada cliente. Este plan tiene en cuenta su capacidad de pago, objetivos financieros y las opciones de refinanciamiento disponibles.'
    },
    {
      title: 'Mejor opción:',
      content: 'Nos encargamos de recomendarte la mejor opción. Buscamos reducir las tasas de interés, eliminar o reducir las comisiones y establecer acuerdos de pago más flexibles que se ajusten a las posibilidades financieras de nuestros clientes.'
    },
    {
      title: 'Pago de la deuda y consolidación:',
      content: 'Una vez que hemos llegado a acuerdos favorables con el cliente, utilizamos los fondos obtenidos a través de nuestra pasarela de pago para liquidar la deuda de tarjeta de crédito de nuestros clientes. Consolidamos sus deudas en un solo préstamo, lo que simplifica los pagos y mejora la administración de su situación financiera.'
    },
    {
      title: 'Diferimiento de pagos y opciones de plazo:',
      content: 'Ofrecemos a nuestros clientes la opción de diferir los pagos del préstamo consolidado durante 6, 9 o 12 meses sin intereses adicionales. Esto les brinda un alivio financiero temporal y la posibilidad de organizar mejor sus finanzas.'
    },
    {
      title: 'Acompañamiento y asesoramiento financiero:',
      content: 'No nos limitamos a refinanciar la deuda, sino que también brindamos un seguimiento continuo y asesoramiento financiero a nuestros clientes. Les ofrecemos herramientas y recursos para mejorar su educación financiera, administrar su presupuesto y evitar futuras situaciones de endeudamiento.'
    }
  ];

  return (
    <section className={styles.container}>
      <div>
        <h2>¿Cómo funciona nuestro servicio?</h2>
        <Accordion accordionItems={accordionData}/>
        <p>Nuestro enfoque integral y personalizado nos permite ayudar a las personas a salir de la deuda de tarjetas de crédito de manera efectiva y con un plan a medida. Nos comprometemos a brindar un servicio de calidad, con transparencia y honestidad en cada etapa del proceso.</p>
      </div>
    </section>
  )
}
