import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// цю функцію знайшов в інтернеті

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


export const Statistic = ({ title, stats }) => {
   
    return (
        <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
    {stats.map(({ id, label, percentage }) => {
    return(
        <li 
        className={css.item} 
        key={id}
        style={{ backgroundColor: getRandomColor() }}
        >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
      </li>
    );
})}
    </ul>
</section>
    );
};

Statistic.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.array.isRequired,
};