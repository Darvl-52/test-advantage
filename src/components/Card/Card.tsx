import './Card.scss';
import type { AdvantagesCardType } from "../../app/cfg/AdvantagesCfg.ts";

export const Card = (
    {
        id,
        title,
        description
    }: AdvantagesCardType) => {

    return (
        <div className='card'>
            <div className="card__id">
                0{id}
            </div>
            <div className="card__content">
                <h2 className='card__title'>
                    {title}
                </h2>
                <p className='card__description'>
                    {description}
                </p>
            </div>
        </div>
    )
}