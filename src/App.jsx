import Star from './assets/icon-star.svg'
import Colton from './assets/image-colton.jpg'
import Irene from './assets/image-irene.jpg'
import Anne from './assets/image-anne.jpg'
export const App = () => {
  return (
    <main className="flex flex-col items-center gap-4 max-w-[1120px]">
      <div className="flex items-center flex-wrap w-full justify-between">
        <aside className="flex flex-col gap-4 w-full items-center md:items-start max-w-[412px]">
          <h1 className="text-very-dark-magenta text-4xl font-bold text-center leading-7 mt-6 max-w-[312px] sm:max-w-[412px] sm:text-[3.25rem] sm:leading-[3.12rem] sm:text-start">
            10,000+ of our users love our products.
          </h1>
          <p className="text-[.9375rem] text-center text-very-dark-magenta mt-2 max-w-[412px] sm:text-lg sm:text-start sm:leading-[1.6rem]">
            We only provide great products combined with excellent customer service. See what our
            satisfied customers are saying about our services.
          </p>
        </aside>

        <aside className="flex flex-col items-center md:items-end gap-4 w-full max-w-[446px]">
          <div className="bg-light-grayish-magenta p-3 rounded-lg mt-4 max-w-[446px] w-full sm:flex sm:gap-8 sm:items-end sm:pl-9 sm:py-5">
            <span className="flex justify-center pb-[10px] sm:pb-0 gap-[6px] sm:gap-[7px]">
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
            </span>
            <p className="font-bold text-center text-very-dark-magenta leading-4 text-sm sm:leading-3 sm:text-[1.05rem]">
              Rated 5 Stars in Reviews
            </p>
          </div>
          <div className="bg-light-grayish-magenta p-3 rounded-lg max-w-[446px] w-full sm:flex sm:gap-8 sm:items-end sm:pl-9 sm:py-5">
            <span className="flex justify-center pb-[10px] sm:pb-0 gap-[6px] sm:gap-[7px]">
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
            </span>
            <p className="font-bold text-center text-very-dark-magenta leading-4 text-sm sm:leading-3 sm:text-[1.05rem]">
              Rated 5 Stars in Report Guru
            </p>
          </div>
          <div className="bg-light-grayish-magenta p-3 rounded-lg max-w-[446px] w-full sm:flex sm:gap-8 sm:items-end sm:pl-9 sm:py-5">
            <span className="flex justify-center pb-[10px] sm:pb-0 gap-[6px] sm:gap-[7px]">
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
              <img src={Star} alt="estrella" />
            </span>
            <p className="font-bold text-center text-very-dark-magenta leading-4 text-sm sm:leading-3 sm:text-[1.05rem]">
              Rated 5 Stars in BestTech
            </p>
          </div>
        </aside>
      </div>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        <article className="bg-very-dark-magenta text-white rounded-lg p-6 text-sm flex flex-col gap-6 mt-10 sm:mt-0 max-w-[352px] sm:p-[31px] sm:py-10 lg:max-h-[236px]">
          <div className="flex gap-4 items-center sm:gap-6">
            <img className="rounded-full w-10" src={Colton} alt="Avatar of Colton" />
            <div>
              <p className="sm:text-[1.135rem]">Colton Smith</p>
              <p className="text-soft-pink sm:text-[1.05rem]">Verified Buyer</p>
            </div>
          </div>
          <p className="text-[.933rem] sm:text-[1.05rem] sm:leading-[22px]">
            "We needed the same printed design as the one we had ordered a week prior. Not only did
            they find the original order, but we also received it in time. Excellent!"
          </p>
        </article>
        <article className="bg-very-dark-magenta text-white rounded-md p-6 text-sm flex flex-col gap-6 max-w-[352px] sm:p-[31px] sm:py-10 lg:max-h-[236px] lg:mt-4">
          <div className="flex gap-4 items-center sm:gap-6">
            <img className="rounded-full w-10" src={Irene} alt="Avatar of Irene" />
            <div>
              <p className="sm:text-[1.135rem]">Irene Roberts</p>
              <p className="text-soft-pink sm:text-[1.05rem]">Verified Buyer</p>
            </div>
          </div>
          <p className="text-[.933rem] sm:text-[1.05rem] sm:leading-[22px]">
            "Customer service is always excellent and very quick turn around. Completely delighted
            with the simplicity of the purchase and the speed of delivery."
          </p>
        </article>
        <article className="bg-very-dark-magenta text-white rounded-md p-6 text-sm flex flex-col gap-6 mb-12 sm:mb-0 max-w-[352px] sm:p-[31px] sm:py-10 lg:max-h-[236px] lg:mt-8">
          <div className="flex gap-4 items-center sm:gap-6">
            <img className="rounded-full w-10" src={Anne} alt="Avatar of Anne" />
            <div>
              <p className="sm:text-[1.135rem]">Anne Wallace</p>
              <p className="text-soft-pink sm:text-[1.05rem]">Verified Buyer</p>
            </div>
          </div>
          <p className="text-[.933rem] sm:text-[1.05rem] sm:leading-[22px]">
            "Put an order with this company and can only praise them for the very high standard.
            Will definitely use them again and recommend them to everyone!"
          </p>
        </article>
      </div>
    </main>
  )
}
