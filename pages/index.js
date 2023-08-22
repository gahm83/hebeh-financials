import Head from 'next/head';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
import slideImage1 from '../images/1-paga-tus-deudas.jpg';
import slideImage2 from '../images/2-mejora-tu-calificacion-en-buro.jpg';
import slideImage3 from '../images/3-sabemos-que-preocupa-deber-tu-tarjeta.jpg';
import slideImage4 from '../images/4-olvidate-de-los-pagos-minimos.jpg';
import slideImage5 from '../images/5-liquida tu deuda.jpg';

const Home = () => {
  
  // const swiperSlide = useSwiperSlide();

  const paginationText= [
    'Te ayudamos a pagar las deudas que actualmente tienes en tus Tarjetas de Crédito',
    '¿Te interesa mejorar tu calificación en Buro de Crédito?',
    'Sabemos lo preocupante que es deber tú tarjeta de Crédito',
    'Olvídate de los Pagos mínimos en tu tarjeta de crédito',
    'Liquida tu deuda en un plan de pagos fijos',
  ]

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span>' + paginationText[index] + '</span></span>';
    },
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swiper
        direction={'vertical'}
        pagination={pagination}
        modules={[Pagination]}>
        <SwiperSlide>
          <Image src={slideImage1} fill />
          <div>
            <h1>Te ayudamos a pagar las deudas que actualmente tienes en tus Tarjetas de Crédito</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage2} fill />
          <div>
            <h1>¿Te interesa mejorar tu calificación en Buro de Crédito?</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage3} fill />
          <div>
            <h1>Sabemos lo preocupante que es deber tú tarjeta de Crédito</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage4} fill />
          <div>
            <h1>Olvídate de los Pagos mínimos en tu tarjeta de crédito</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage5} fill />
          <div>
            <h1>Liquida tu deuda en un plan de pagos fijos</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home;