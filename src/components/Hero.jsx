import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { HeroSlide } from './HeroSlide';

export const Hero = () => {
  return (
    <Swiper
      pagination={true} 
      modules={[Pagination]} 
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Queima de estoque Nike 🔥'}
          descricao={'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={"white-sneakers.png"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Super oferta K-Swiss 🔥'}
          descricao={'Doloremque, illum earum? Pariatur unde doloremque laborum, cumque neque quam veniam, ullam nulla velit ut exercitationem!'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={"k-swiss.png"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Air Jordan Edição de Colecionador 🔥'}
          descricao={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe quia quos consectetur!'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={"air-jordan.png"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide
          eyebrown={'Melhores ofertas personalizadas'}
          titulo={'Promoção Imperdível!!!'}
          descricao={'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.'}
          ctaText={'Ver Ofertas'}
          ctaLink={'#'}
          imagem={"white-sneakers.png"}
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

