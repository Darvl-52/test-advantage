import './Home.scss';
import Slider from "../components/Slider";
import { AdvantagesCard } from "./cfg/AdvantagesCfg.ts";
import Card from "../components/Card";

export function Home() {

    const titleId = 'why-us-title'

    return (
        <main className="main container">
            <div className="main__content">
                <div className="main__slider">
                    <Slider/>
                </div>
                <section className="main__section" aria-labelledby={titleId}>
                    <h1 className='main__section-title' id={titleId}>
                        Почему выбирают именно нас?
                    </h1>
                    <p className='main__section-description'>
                        Мы не просто создаём иллюзию работы, а действительно выполняем <br/>
                        её, гарантируя безупречный результат и
                        предоставляя гарантии.
                        <br/>
                        <br/>
                        После завершения всех процедур в нашем детейлинг-центре,<br/>
                        ваш автомобиль будет выглядеть как новый.
                    </p>
                    <div className="main__section-advantages">
                        {AdvantagesCard.map(item => (
                            <div key={item.id}>
                                <Card
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
  )
}